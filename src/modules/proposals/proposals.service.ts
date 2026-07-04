import { Injectable } from '@nestjs/common';

@Injectable()
export class ProposalsService {
  create() {
    return 'This action adds a new proposal';
  }

  findAll() {
    return `This action returns all proposals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proposal`;
  }

  update(id: number) {
    return `This action updates a #${id} proposal`;
  }

  remove(id: number) {
    return `This action removes a #${id} proposal`;
  }
}
