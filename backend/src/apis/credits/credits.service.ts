import { ExtendedInjectModel } from '@libs/super-core';
import { ExtendedModel } from '@libs/super-core/interfaces/extended-model.interface';
import { Injectable } from '@nestjs/common';
import { COLLECTION_NAMES } from 'src/constants';
import { CreditDocument } from './entities/credit.entity';
import { BaseService } from 'src/base/service/base.service';

@Injectable()
export class CreditsService extends BaseService<CreditDocument> {
    constructor(
        @ExtendedInjectModel(COLLECTION_NAMES.CREDIT)
        private readonly creditModel: ExtendedModel<CreditDocument>,
    ) {
        super(creditModel);
    }
}
