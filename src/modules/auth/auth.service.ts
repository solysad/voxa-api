import { Injectable, BadRequestException, NotFoundException, UnauthorizedException, InternalServerErrorException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service'
import { CryptographyService } from '../../security/cryptoArgon/cryptography.service'
import { serviceJwt } from '../../security/jwt/jwt.service'
import type { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private cryptographyService: CryptographyService, private jwtService : serviceJwt ) {}

  async consultUser(data: any) {
    if (!data || typeof data !== 'object') {
      throw new BadRequestException('Dados de login inválidos');
    }

    if (!data.senha) {
      throw new BadRequestException('Senha é obrigatória');
    }

    let user;
    if (data.email) {
      user = await this.prisma.client.user.findUnique({
        where: { email: data.email },
      });
    } else if (data.user) {
      user = await this.prisma.client.user.findUnique({
        where: { username: data.user },
      });
    } else {
      throw new BadRequestException('É necessário informar email ou usuário para login');
    }

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const hash = user.passwordHash?.trim();
    if (!hash?.startsWith('$')) {
      throw new InternalServerErrorException('Hash de senha inválido no banco de dados');
    }

    const valid = await this.cryptographyService.comparePassword(
      data.senha,
      user.passwordHash,
    );

    if (!valid) { 
      throw new HttpException(
      { 
        status: HttpStatus.UNAUTHORIZED,
        error: 'Credenciais inválidas',
        code: 'INVALID_CREDENTIALS' // Um código fixo ajuda o front a tomar decisões
      }, 
      HttpStatus.UNAUTHORIZED // Status HTTP 401
    )
    }

    try {
      const token = await this.jwtService.createToken({
        sub: user.id,
        username: user.username,
        role : user.role,
      });

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        remember: data.rememberMe,
        accessToken: token,
      };
    } catch (err) {
      throw new InternalServerErrorException('Erro ao gerar token JWT');
    }
  }

  async cadastrar(data: CreateAuthDto) {
    if (!data || typeof data !== 'object') {
      throw new BadRequestException('Dados de cadastro inválidos');
    }

    const { userName, email, password, interests } = data;
    console.log(data);
    
    if (!userName || !email || !password) {
      throw new BadRequestException('Usuário, email e senha são obrigatórios');
    }

    const interestIds = Array.isArray(interests)
      ? interests.map((interestId) => Number(interestId)).filter((id) => Number.isInteger(id) && id > 0)
      : [];
    console.log(interestIds + "");
    

    try {
      const createdUser = await this.prisma.client.$transaction(async (tx) => {
        const cryptoPass = await this.cryptographyService.hashPassword(password);
        const userRecord = await tx.user.create({
          data: {
            username: userName,
            email,
            passwordHash: cryptoPass,
          },
        });

        if (interestIds.length > 0) {
          await tx.userInterest.createMany({
            data: interestIds.map((interestId) => ({
              userId: userRecord.id,
              interestId,
            })),
            skipDuplicates: true,
          });
        }

        return userRecord;
      });

      return {
        id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email,
      };
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      throw new InternalServerErrorException('Erro ao cadastrar usuário');
    }
  }
}
