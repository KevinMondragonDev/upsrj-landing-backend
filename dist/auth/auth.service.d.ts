import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto, CreateUserDto } from './dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        mail: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
    }>;
    checkAuthStatus(user: User): Promise<{
        token: string;
        id: string;
        mail: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
        id: string;
        mail: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
    }>;
    private getJwtToken;
    private handleDBErrors;
}
