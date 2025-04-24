import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { ExtendedMongooseModule } from '@libs/super-core/modules/mongoose/extended-mongoose.module';
import { COLLECTION_NAMES } from 'src/constants';
import { Credit, CreditSchema } from './entities/credit.entity';

@Module({
    imports: [
        ExtendedMongooseModule.forFeature([
            {
                name: COLLECTION_NAMES.CREDIT,
                schema: CreditSchema,
                entity: Credit,
            },
        ]),
    ],
    providers: [CreditsService],
    exports: [CreditsService],
})
export class CreditsModule {}
