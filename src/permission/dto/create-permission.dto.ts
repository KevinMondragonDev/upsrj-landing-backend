
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

@Entity({ name: 'permissions' })
export class Permission {


    @ApiProperty({
        description: 'Module name that is assigned in an interface',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    // *! Esto debe ser cambiado por una interfaz 
    @IsIn(['dark', 'light', 'system'], { message: 'Theme must be one of: dark, light, system' })
    module_name: string;
   
    @ApiProperty({
        description: 'Permission to create resources',
        type: Boolean,
    })
    create: boolean;

    @ApiProperty({
        description: 'Permission to read resources',
        type: Boolean,
    })
  
    read: boolean;

    @ApiProperty({
        description: 'Permission to update resources',
        type: Boolean,
    })

    update: boolean;

    @ApiProperty({
        description: 'Permission to delete resources',
        type: Boolean,
    })

    delete: boolean;
}


export class CreatePermissionDto {}
