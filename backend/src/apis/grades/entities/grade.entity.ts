import { SuperProp } from '@libs/super-core';
import { AutoPopulate } from '@libs/super-search';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Cohort } from 'src/apis/cohorts/entities/cohort.entity';
import { AggregateRoot } from 'src/base/entities/aggregate-root.schema';
import { COLLECTION_NAMES } from 'src/constants';
import autopopulateSoftDelete from 'src/utils/mongoose-plugins/autopopulate-soft-delete';

@Schema({
    timestamps: true,
    collection: COLLECTION_NAMES.GRADE,
})
export class Grade extends AggregateRoot {
    @SuperProp({
        type: String,
        required: true,
    })
    code: string;

    @SuperProp({
        type: Number,
        required: true,
    })
    studentNum: number;

    @SuperProp({
        type: Types.ObjectId,
        ref: COLLECTION_NAMES.COHORT,
        refClass: Cohort,
    })
    @AutoPopulate({
        ref: COLLECTION_NAMES.COHORT,
    })
    cohort: Types.ObjectId;
}
export type GradeDocument = Grade & Document;
export const GradeSchema = SchemaFactory.createForClass(Grade);
GradeSchema.plugin(autopopulateSoftDelete);
