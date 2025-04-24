import { Controller } from '@nestjs/common';
import { CohortsService } from '../cohorts.service';
import { Resource } from '@libs/super-authorize';
import { ApiTags } from '@nestjs/swagger';

@Controller('cohorts')
@Resource('cohorts')
@ApiTags('Front: Grade')
export class CohortsController {
    constructor(private readonly cohortsService: CohortsService) {}
}
