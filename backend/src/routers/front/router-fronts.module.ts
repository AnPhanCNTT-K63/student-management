import { Module } from '@nestjs/common';
import { MediaModule } from 'src/apis/media/medias.module';
import { UserModule } from 'src/apis/users/user.module';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/apis/auth/auth.module';
import { CategoriesModule } from 'src/apis/categories/categories.module';
import { PostsModule } from 'src/apis/posts/posts.module';
import { MetadataModule } from 'src/apis/metadata/metadata.module';
import { CategoriesController } from 'src/apis/categories/controllers/categories.controller';
import { AuthController } from 'src/apis/auth/controllers/auth.controller';
import { MediaController } from 'src/apis/media/controllers/medias.controller';
import { MetadataController } from 'src/apis/metadata/controllers/metadata.controller';
import { PostsController } from 'src/apis/posts/controllers/posts.controller';
import { UserController } from 'src/apis/users/controllers/user.controller';
import { ProfilesModule } from 'src/apis/profiles/profiles.module';
import { ProfilesController } from 'src/apis/profiles/controllers/profiles.controller';
import { PaymentModule } from 'src/apis/payment/payment.module';
import { PaymentController } from 'src/apis/payment/controllers/payment.controller';
import { CreditsModule } from 'src/apis/credits/credits.module';
import { CreditsController } from 'src/apis/credits/controllers/credits.controller';
import { GradesModule } from 'src/apis/grades/grades.module';
import { GradesController } from 'src/apis/grades/controllers/grades.controller';
import { CohortsModule } from 'src/apis/cohorts/cohorts.module';
import { CohortsController } from 'src/apis/cohorts/controllers/cohorts.controller';

@Module({
    imports: [
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
        UserController,
        MediaController,
        AuthController,
        CategoriesController,
        PostsController,
        MetadataController,
        ProfilesController,
        PaymentController,
        CreditsController,
        GradesController,
        CohortsController,
    ],
    providers: [],
})
export class RouterFrontsModule {}
