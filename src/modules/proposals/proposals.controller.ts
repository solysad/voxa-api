import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposalsService } from './proposals.service';
@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Post()
  create() {
    return this.proposalsService.create();
  }

  @Get()
  findAll() {
    return this.proposalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.proposalsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposalsService.remove(+id);
  }
}
