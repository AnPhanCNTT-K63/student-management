import { Controller } from '@nestjs/common';
import { GradesService } from '../grades.service';
import { Resource } from '@libs/super-authorize';
import { ApiTags } from '@nestjs/swagger';

@Controller('grades')
@Resource('grades')
@ApiTags('Admin: Grade')
export class GradesControllerAdmin {
    constructor(private readonly gradesService: GradesService) {}
}
