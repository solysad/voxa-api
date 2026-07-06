import { Module } from '@nestjs/common';
import { AuthModule } from './security/auth.module';
import { ModulesModule } from './modules/modules.module';
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, ModulesModule, DatabaseModule, 
    ConfigModule.forRoot({
      isGlobal: true, // Torna o .env visível em toda a aplicação
    }),

  ],
})
export class AppModule {}

