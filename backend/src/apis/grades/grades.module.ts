import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { ExtendedMongooseModule } from '@libs/super-core/modules/mongoose/extended-mongoose.module';
import { COLLECTION_NAMES } from 'src/constants';
import { Grade, GradeSchema } from './entities/grade.entity';

@Module({
    imports: [
        ExtendedMongooseModule.forFeature([
            {
                name: COLLECTION_NAMES.GRADE,
                schema: GradeSchema,
                entity: Grade,
            },
        ]),
    ],
    providers: [GradesService],
    exports: [GradesService],
})
export class GradesModule {}
