import { PartialType } from '@nestjs/mapped-types';
import { CreateDebateDto } from './create-debate.dto';

export class UpdateDebateDto extends PartialType(CreateDebateDto) {}
