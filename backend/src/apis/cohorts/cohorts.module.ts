import { Module } from '@nestjs/common';
import { CohortsService } from './cohorts.service';
import { ExtendedMongooseModule } from '@libs/super-core/modules/mongoose/extended-mongoose.module';
import { COLLECTION_NAMES } from 'src/constants';
import { Cohort, CohortSchema } from './entities/cohort.entity';

@Module({
    imports: [
        ExtendedMongooseModule.forFeature([
            {
                name: COLLECTION_NAMES.COHORT,
                schema: CohortSchema,
                entity: Cohort,
            },
        ]),
    ],
    providers: [CohortsService],
    exports: [CohortsService],
})
export class CohortsModule {}
