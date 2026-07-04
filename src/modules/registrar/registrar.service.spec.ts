import { Test, TestingModule } from '@nestjs/testing';
import { RegistrarService } from './registrar.service';

describe('RegistrarService', () => {
  let service: RegistrarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrarService],
    }).compile();

    service = module.get<RegistrarService>(RegistrarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
