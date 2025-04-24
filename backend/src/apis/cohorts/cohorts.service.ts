import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/service/base.service';
import { CohortDocument } from './entities/cohort.entity';
import { COLLECTION_NAMES } from 'src/constants';
import { ExtendedInjectModel } from '@libs/super-core';
import { ExtendedModel } from '@libs/super-core/interfaces/extended-model.interface';

@Injectable()
export class CohortsService extends BaseService<CohortDocument> {
    constructor(
        @ExtendedInjectModel(COLLECTION_NAMES.COHORT)
        private readonly cohortModel: ExtendedModel<CohortDocument>,
    ) {
        super(cohortModel);
    }
}
