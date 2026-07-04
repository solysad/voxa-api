import { Module } from '@nestjs/common';
import { AuthModule } from './security/auth.module';
import { ModulesModule } from './modules/modules.module';
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [AuthModule, ModulesModule, DatabaseModule],
})
export class AppModule {}

