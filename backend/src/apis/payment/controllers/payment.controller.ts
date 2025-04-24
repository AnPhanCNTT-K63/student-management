import { Controller, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { VnpayService } from '../vnpay.service';
import { PERMISSION, Resource, SuperAuthorize } from '@libs/super-authorize';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from '../transaction.service';
import { SuperGet } from '@libs/super-core';
import { Me } from 'src/decorators/me.decorator';
import { UserPayload } from 'src/base/models/user-payload.model';
import { Types } from 'mongoose';

@Controller('payment')
@Resource('payment')
@ApiTags('Front: Payment')
export class PaymentController {
    constructor(
        private readonly vnpayService: VnpayService,
        private readonly transactionService: TransactionService,
    ) {}

    @SuperGet({ route: 'create-vnpay-url' })
    @SuperAuthorize(PERMISSION.GET)
    createVnpayUrl(
        @Query('amount') amount: number,
        @Req() req: Request,
        @Me() user: UserPayload,
    ) {
        const ipAddr =
            (Array.isArray(req.headers['x-forwarded-for'])
                ? req.headers['x-forwarded-for'][0]
                : req.headers['x-forwarded-for']) ||
            req.socket?.remoteAddress ||
            req.connection?.remoteAddress;
        const url = this.vnpayService.createPaymentUrl(amount, ipAddr, user);
        return { url };
    }

    @SuperGet({ route: 'vnpay-return' })
    async getPayment(@Query() query: Record<string, any>) {
        const orderInfo = decodeURIComponent(query.vnp_OrderInfo);
        const userIdMatch = orderInfo.match(/cho user:\s*([a-f0-9]{24})/i);
        const createdBy = userIdMatch ? userIdMatch[1] : null;

        const transaction = {
            txnRef: query.vnp_TxnRef,
            amount: parseInt(query.vnp_Amount),
            bankCode: query.vnp_BankCode,
            bankTranNo: query.vnp_BankTranNo,
            cardType: query.vnp_CardType,
            orderInfo: decodeURIComponent(query.vnp_OrderInfo),
            payDate: query.vnp_PayDate,
            responseCode: query.vnp_ResponseCode,
            transactionNo: query.vnp_TransactionNo,
            transactionStatus: query.vnp_TransactionStatus,
            secureHash: query.vnp_SecureHash,
            status:
                query.vnp_ResponseCode === '00' &&
                query.vnp_TransactionStatus === '00'
                    ? 'success'
                    : 'failed',
            createdBy: new Types.ObjectId(createdBy),
        };

        await this.transactionService.model.create(transaction);

        return transaction;
    }
}
