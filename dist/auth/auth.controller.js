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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const user_entity_1 = require("./entities/user.entity");
const get_user_decorator_1 = require("./decorators/get-user.decorator");
const auth_decorator_1 = require("./decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    createUser(createUserDto) {
        return this.authService.create(createUserDto);
    }
    loginUser(loginUserDto) {
        return this.authService.login(loginUserDto);
    }
    checkAuthStatus(user) {
        return this.authService.checkAuthStatus(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User was created successfully', type: dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request due to invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Token related issues' }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User logged in', type: dto_1.LoginUserDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request due to invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Token related issues' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User check-status', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request due to invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden. Token related issues' }),
    (0, common_1.Get)('check-status'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkAuthStatus", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map