// permissions.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'permissions' })
export class Permission {

    @ApiProperty({
        description: 'Identificador único del permiso',
        type: String,
    })
    @PrimaryGeneratedColumn('uuid')
    id_permission: string;

    @ManyToOne(
        () => User,
        (user) => user.permissions,
        { eager: true }
    )
    user: User;

    @ApiProperty({
        description: 'Nombre del módulo',
        type: String,
    })
    @Column('text')
    module: string;

    @ApiProperty({
        description: 'Permiso para crear recursos',
        type: Boolean,
    })
    @Column('bool', { default: false })
    create: boolean;

    @ApiProperty({
        description: 'Permiso para leer recursos',
        type: Boolean,
    })
    @Column('bool', { default: false })
    read: boolean;

    @ApiProperty({
        description: 'Permiso para actualizar recursos',
        type: Boolean,
    })
    @Column('bool', { default: false })
    update: boolean;

    @ApiProperty({
        description: 'Permiso para eliminar recursos',
        type: Boolean,
    })
    @Column('bool', { default: false })
    delete: boolean;
}
