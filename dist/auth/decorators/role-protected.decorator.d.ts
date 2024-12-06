import { ValidRoles } from '../interfaces';
export declare const META_ROLE = "roles";
export declare const RoleProtected: (...args: ValidRoles[]) => import("@nestjs/common").CustomDecorator<string>;
