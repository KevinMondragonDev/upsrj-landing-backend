import { Permission } from '../../permission/entities/permissions.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    fullName: string;
    isActive: boolean;
    roles: string[];
    permissions: Permission[];
    normalizeFields(): void;
}
