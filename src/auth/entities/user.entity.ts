// user.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permissions.entity';

@Entity({ name: 'users' })
export class User {

    @ApiProperty({
        description: 'Identificador único del usuario',
        type: String,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        description: 'Correo del usuario',
        type: String,
    })
    @Column('text', { unique: true })
    mail: string;

    @ApiProperty({
        description: 'Contraseña de los usuarios',
        type: String,
    })
    @Column('text', { select: false })
    password: string;

    @ApiProperty({
        description: 'Nombre completo de los usuarios',
        type: String,
    })
    @Column('text')
    fullName: string;

    @ApiProperty({
        description: 'Indica si el usuario está activo',
        type: Boolean,
    })
    @Column('bool', { default: true })
    isActive: boolean;

    @ApiProperty({
        description: 'Roles del usuario: admin, super-user, user, etc. Por defecto es "user"',
        type: [String],
    })
    @Column('text', { array: true, default: ['user'] })
    roles: string[];

    @OneToMany(
        () => Permission,
        (permission) => permission.user,
        { cascade: true, eager: true }
    )
    permissions: Permission[];

    @BeforeInsert()
    @BeforeUpdate()
    normalizeFields() {
        this.mail = this.mail.toLowerCase().trim();
    }
}
