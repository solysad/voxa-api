import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class CryptographyService {
  // Transforma a senha plana em hash (Usado no Cadastro)
  async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password, {
      type: argon2.argon2id, // Tipo recomendado para a maioria dos casos
      memoryCost: 2 ** 16, // 64 MB
      timeCost: 3, // Número de iterações
      parallelism: 1, // Grau de paralelismo
    });
  }

  // Compara a senha plana com o hash do banco (Usado no Login)
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await argon2.verify(hash, password);
  }
}
