export declare class User {
    id: string;
    mail: string;
    password: string;
    fullName: string;
    isActive: boolean;
    roles: string[];
    checkFieldsInsert(): void;
    checkFieldsBeforeUpdate(): void;
}
