import { Controller } from '@nestjs/common';
import { CreditsService } from '../credits.service';
import { Resource } from '@libs/super-authorize';
import { ApiTags } from '@nestjs/swagger';

@Controller('credits')
@Resource('credits')
@ApiTags('Front: Credit')
export class CreditsController {
    constructor(private readonly creditsService: CreditsService) {}
}
