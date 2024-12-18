import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        mail: string;
        password: string;
        fullName: string;
        isActive: boolean;
        roles: string[];
    }>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
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
}
