import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ValidModules } from 'src/common/interfaces/valid-modules';

export class CreatePermissionDto {

    @ApiProperty({
        description: 'The name of the module for which the permission is being assigned. Must be a valid module.',
        type: String,
        enum: ValidModules,
    })
    @IsString()
    @IsNotEmpty()
    @IsIn(Object.values(ValidModules), { message: 'Module must be one of the valid modules' })
    module_name: string;

    @ApiProperty({
        description: 'Permission to create resources (default: false)',
        type: Boolean,
        default: false,
    })
    @IsBoolean()
    @IsOptional()
    create?: boolean;

    @ApiProperty({
        description: 'Permission to read resources (default: false)',
        type: Boolean,
        default: false,
    })
    @IsBoolean()
    @IsOptional()
    read?: boolean;

    @ApiProperty({
        description: 'Permission to update resources (default: false)',
        type: Boolean,
        default: false,
    })
    @IsBoolean()
    @IsOptional()
    update?: boolean;

    @ApiProperty({
        description: 'Permission to delete resources (default: false)',
        type: Boolean,
        default: false,
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean;
}

