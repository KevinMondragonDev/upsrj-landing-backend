import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto, CreateUserDto } from './dto';
import { Permission } from '../permission/entities/permissions.entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly permissionRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, permissionRepository: Repository<Permission>, jwtService: JwtService);
    findOne(term: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        email: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
        permissions: Permission[];
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
        id: string;
        email: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
        permissions: Permission[];
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
        id: string;
        email: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
        permissions: Permission[];
    }>;
    private getJwtToken;
    private handleDBErrors;
}
