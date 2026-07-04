import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { jwtModule } from './jwt/jwt.module';
import { CryptographyModule } from './cryptoArgon/cryptography.module';

@Module({
  imports: [ControllersModule, jwtModule, CryptographyModule],
})
export class AuthModule {}
