import { Module } from '@nestjs/common';
import { serviceJwt } from './jwt.service';
import { JwtModule } from '@nestjs/jwt'
import { env } from 'prisma/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
    secret: env["secretKey"],
    signOptions: {
      expiresIn: '1h'
    }

  })],
  providers: [serviceJwt],
  exports: [serviceJwt]
})
export class jwtModule {}
