import { SuperApiProperty } from '@libs/super-core/decorators/super-api-property.decorator';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProfileDto {
    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    code: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    firstName: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    lasName: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    phone: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    address: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    city: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    province: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsString()
    ward: string;

    @SuperApiProperty({
        type: Types.ObjectId,
        required: false,
        default: '667a5598731a524b19865ea1',
    })
    @IsString()
    grade: Types.ObjectId;
}
