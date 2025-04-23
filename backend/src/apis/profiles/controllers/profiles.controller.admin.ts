import { Controller } from '@nestjs/common';
import { ProfilesService } from '../profiles.service';

@Controller('profiles')
export class ProfilesControllerAdmin {
    constructor(private readonly profilesService: ProfilesService) {}
}
