import { Controller } from '@nestjs/common';
import { CohortsService } from '../cohorts.service';
import { Resource } from '@libs/super-authorize';
import { ApiTags } from '@nestjs/swagger';

@Controller('cohorts')
@Resource('cohorts')
@ApiTags('Admin: Grade')
export class CohortsControllerAdmin {
    constructor(private readonly cohortsService: CohortsService) {}
}
