import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from '../../permission/entities/permissions.entity';

@Entity({ name: 'users' })
export class User {
    @ApiProperty({
        description: 'Unique identifier of the user',
        type: String,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: 'Email address of the user',
        type: String,
    })
    @Column('text', { unique: true })
    email: string;

    @ApiProperty({
        description: 'Password of the user',
        type: String,
    })
    @Column('text', { select: false })
    password: string;

    @ApiProperty({
        description: 'Full name of the user',
        type: String,
    })
    @Column('text')
    fullName: string;

    @ApiProperty({
        description: 'Indicates whether the user is active',
        type: Boolean,
    })
    @Column('bool', { default: true })
    isActive: boolean;

    // *!  Los permisos seran con el modulo permissions dinamicos y especificos, asi que esto se debe eliminar
    @ApiProperty({
        description: 'Roles of the user: admin, super-user, user, etc. Default is "user"',
        type: [String],
    })
    @Column('text', { array: true, default: ['user'] })
    roles: string[];

    @OneToMany(
        () => Permission,
        (permission) => permission.user,
        { cascade: true , eager: true }
    )
    permissions: Permission[];

    @BeforeInsert()
    @BeforeUpdate()
    normalizeFields() {
        this.email = this.email.toLowerCase().trim();
    }
}
