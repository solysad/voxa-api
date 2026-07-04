import { Module } from '@nestjs/common';
import { RegistrarModule } from './registrar/registrar.module';
import { ProposalsModule } from './proposals/proposals.module';
import { DebatesModule } from './debates/debates.module';
import { ComunidadesModule } from './comunidades/comunidades.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [RegistrarModule, ProposalsModule, DebatesModule, ComunidadesModule, AuthModule],
})
export class ModulesModule {}
