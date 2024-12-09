import { Permission } from './permissions.entity';
export declare class User {
    id: string;
    mail: string;
    password: string;
    fullName: string;
    isActive: boolean;
    roles: string[];
    permissions: Permission[];
    normalizeFields(): void;
}
