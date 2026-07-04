import { Module } from '@nestjs/common';
import { RegistrarService } from './registrar.service';

@Module({
  providers: [RegistrarService]
})
export class RegistrarModule {}
