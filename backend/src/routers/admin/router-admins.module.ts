import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { UserControllerAdmin } from 'src/apis/users/controllers/user.controller.admin';
import { AuthModule } from 'src/apis/auth/auth.module';
import { AuthControllerAdmin } from 'src/apis/auth/controllers/auth.controller.admin';
import { CategoriesModule } from 'src/apis/categories/categories.module';
import { CategoriesControllerAdmin } from 'src/apis/categories/controllers/categories.controller.admin';
import { MediaControllerAdmin } from 'src/apis/media/controllers/medias.controller.admin';
import { MediaModule } from 'src/apis/media/medias.module';
import { MetadataControllerAdmin } from 'src/apis/metadata/controllers/metadata.controller.admin';
import { MetadataModule } from 'src/apis/metadata/metadata.module';
import { PostsControllerAdmin } from 'src/apis/posts/controllers/posts.controller.admin';
import { PostsModule } from 'src/apis/posts/posts.module';
import { UserModule } from 'src/apis/users/user.module';
import { CommonModule } from 'src/common/common.module';
import { ProfilesModule } from 'src/apis/profiles/profiles.module';
import { ProfilesControllerAdmin } from 'src/apis/profiles/controllers/profiles.controller.admin';
import { PaymentModule } from 'src/apis/payment/payment.module';
import { PaymentControllerAdmin } from 'src/apis/payment/controllers/payment.controller.admin';
import { CreditsModule } from 'src/apis/credits/credits.module';
import { CreditsControllerAdmin } from 'src/apis/credits/controllers/credits.controller.admin';
import { GradesModule } from 'src/apis/grades/grades.module';
import { GradesControllerAdmin } from 'src/apis/grades/controllers/grades.controller.admin';
import { CohortsModule } from 'src/apis/cohorts/cohorts.module';
import { CohortsControllerAdmin } from 'src/apis/cohorts/controllers/cohorts.controller.admin';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        CommonModule,
        UserModule,
        MediaModule,
        AuthModule,
        CategoriesModule,
        PostsModule,
        MetadataModule,
        ProfilesModule,
        PaymentModule,
        CreditsModule,
        GradesModule,
        CohortsModule,
    ],
    controllers: [
        MediaControllerAdmin,
        AuthControllerAdmin,
        CategoriesControllerAdmin,
        PostsControllerAdmin,
        MetadataControllerAdmin,
        UserControllerAdmin,
        ProfilesControllerAdmin,
        PaymentControllerAdmin,
        CreditsControllerAdmin,
        GradesControllerAdmin,
        CohortsControllerAdmin,
    ],
    providers: [],
})
export class RouterAdminsModule {}
