import { Module } from '@nestjs/common';
import { CryptographyService } from './cryptography.service';

@Module({
  providers: [CryptographyService],
  exports: [CryptographyService], // Permite o uso em outros módulos
})
export class CryptographyModule {}
