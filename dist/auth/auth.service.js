"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const permissions_entity_1 = require("./entities/permissions.entity");
let AuthService = class AuthService {
    constructor(userRepository, permissionRepository, jwtService) {
        this.userRepository = userRepository;
        this.permissionRepository = permissionRepository;
        this.jwtService = jwtService;
    }
    async findOne(term) {
        return this.userRepository.findOneBy({ id: term });
    }
    async create(createUserDto) {
        try {
            const { password, ...userData } = createUserDto;
            const hashedPassword = await bcrypt.hashSync(password, 10);
            const user = this.userRepository.create({
                ...userData,
                password: hashedPassword
            });
            await this.userRepository.save(user);
            delete user.password;
            delete user.roles;
            return {
                ...user,
                token: this.getJwtToken({ id: user.id })
            };
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async checkAuthStatus(user) {
        return {
            ...user,
            token: this.getJwtToken({ id: user.id })
        };
    }
    async login(loginUserDto) {
        const { password, mail } = loginUserDto;
        const mailLowerCase = mail.toLowerCase().trim();
        const user = await this.userRepository.findOne({
            where: { mail: mailLowerCase },
            select: { mail: true, password: true, id: true, permissions: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException(`Credenciales incorrectas`);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException(`Credenciales incorrectas`);
        }
        delete user.password;
        return {
            ...user,
            token: this.getJwtToken({ id: user.id })
        };
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
    handleDBErrors(error) {
        if (error.code === '23505') {
            throw new common_1.BadRequestException(error.details);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(permissions_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map