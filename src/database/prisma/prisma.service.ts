import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  // Instancia o cliente diretamente como uma propriedade pública da classe
  public readonly client = new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    }),
  });

  async onModuleInit() {
    // Abre a conexão através do cliente instanciado
    await this.client.$connect();
  }

  async onModuleDestroy() {
    // Fecha a conexão através do cliente instanciado
    await this.client.$disconnect();
  }
}
