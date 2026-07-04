import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CryptographyService } from '../../security/cryptoArgon/cryptography.service'
import { jwtModule } from '../../security/jwt/jwt.module'

@Module({
  imports: [jwtModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, CryptographyService],
})
export class AuthModule {}
