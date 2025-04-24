import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { VnpayService } from './vnpay.service';
import { ExtendedMongooseModule } from '@libs/super-core/modules/mongoose/extended-mongoose.module';
import { COLLECTION_NAMES } from 'src/constants';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';

@Module({
    imports: [
        ExtendedMongooseModule.forFeature([
            {
                name: COLLECTION_NAMES.TRANSACTION,
                schema: TransactionSchema,
                entity: Transaction,
            },
        ]),
    ],
    providers: [PaymentService, VnpayService, TransactionService],
    exports: [PaymentService, VnpayService, TransactionService],
})
export class PaymentModule {}
