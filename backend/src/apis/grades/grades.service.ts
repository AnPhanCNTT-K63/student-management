import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/service/base.service';
import { GradeDocument } from './entities/grade.entity';
import { ExtendedInjectModel } from '@libs/super-core';
import { COLLECTION_NAMES } from 'src/constants';
import { ExtendedModel } from '@libs/super-core/interfaces/extended-model.interface';

@Injectable()
export class GradesService extends BaseService<GradeDocument> {
    constructor(
        @ExtendedInjectModel(COLLECTION_NAMES.GRADE)
        private readonly gradeModel: ExtendedModel<GradeDocument>,
    ) {
        super(gradeModel);
    }
}
