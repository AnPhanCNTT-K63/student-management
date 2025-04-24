import { SuperProp } from '@libs/super-core';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AggregateRoot } from 'src/base/entities/aggregate-root.schema';
import { COLLECTION_NAMES } from 'src/constants';
import autopopulateSoftDelete from 'src/utils/mongoose-plugins/autopopulate-soft-delete';

@Schema({
    timestamps: true,
    collection: COLLECTION_NAMES.COHORT,
})
export class Cohort extends AggregateRoot {
    @SuperProp({
        type: String,
        required: true,
    })
    code: string;

    @SuperProp({
        type: Number,
        required: true,
    })
    totalStudent: number;

    @SuperProp({
        type: Number,
        required: true,
    })
    startYear: number;

    @SuperProp({
        type: Number,
        required: true,
    })
    endYear: number;
}
export type CohortDocument = Cohort & Document;
export const CohortSchema = SchemaFactory.createForClass(Cohort);
CohortSchema.plugin(autopopulateSoftDelete);
