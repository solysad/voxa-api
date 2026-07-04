import { Module } from '@nestjs/common';
import { ControllersService } from './controllers.service';
import { ControllersController } from './controllers.controller';

@Module({
  providers: [ControllersService],
  controllers: [ControllersController]
})
export class ControllersModule {}
