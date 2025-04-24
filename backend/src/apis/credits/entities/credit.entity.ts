import { SuperProp } from '@libs/super-core';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AggregateRoot } from 'src/base/entities/aggregate-root.schema';
import { COLLECTION_NAMES } from 'src/constants';
import autopopulateSoftDelete from 'src/utils/mongoose-plugins/autopopulate-soft-delete';

@Schema({
    timestamps: true,
    collection: COLLECTION_NAMES.CREDIT,
})
export class Credit extends AggregateRoot {
    @SuperProp({
        type: Number,
        required: true,
    })
    amountPerOne: number;

    @SuperProp({
        type: [Number],
        required: true,
    })
    period: number[];

    @SuperProp({
        type: Number,
        required: true,
    })
    semester: number;
}
export type CreditDocument = Credit & Document;
export const CreditSchema = SchemaFactory.createForClass(Credit);
CreditSchema.plugin(autopopulateSoftDelete);
