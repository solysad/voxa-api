import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaModule } from './prisma/prisma.module'

@Module({
  providers: [DatabaseService, PrismaModule],
})
export class DatabaseModule {}
