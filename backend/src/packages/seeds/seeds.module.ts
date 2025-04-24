import { SeedsService } from './seeds.service';
import { Module } from '@nestjs/common';
import { UserModule } from 'src/apis/users/user.module';
import { MetadataModule } from 'src/apis/metadata/metadata.module';
import { RolesModule } from '@libs/super-authorize/modules/roles/roles.module';
import { PermissionsModule } from '@libs/super-authorize/modules/permissions/permissions.module';
import { CreditsModule } from 'src/apis/credits/credits.module';
import { CohortsModule } from 'src/apis/cohorts/cohorts.module';
import { GradesModule } from 'src/apis/grades/grades.module';
import { ProfilesModule } from 'src/apis/profiles/profiles.module';

@Module({
    imports: [
        RolesModule,
        UserModule,
        MetadataModule,
        PermissionsModule,
        CreditsModule,
        CohortsModule,
        GradesModule,
        ProfilesModule,
    ],
    controllers: [],
    providers: [SeedsService],
    exports: [SeedsService],
})
export class SeedsModule {}
