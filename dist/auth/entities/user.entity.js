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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let User = class User {
    checkFieldsInsert() {
        this.mail = this.mail
            .toLowerCase()
            .trim();
    }
    checkFieldsBeforeUpdate() {
        this.mail = this.mail
            .toLowerCase()
            .trim();
    }
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del usuario',
        type: String,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo del usuario',
        type: String,
    }),
    (0, typeorm_1.Column)('text', {
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña de los usuarios',
        type: String,
    }),
    (0, typeorm_1.Column)('text', {
        select: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo de los usuarios',
        type: String,
    }),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Los usuarios no se elimina, solo se dan de baja con un boolean',
        type: Boolean,
    }),
    (0, typeorm_1.Column)('bool', {
        default: true
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Los diferentes tipos usuarios de la app: admin, super-user, user, pero se define user por defecto',
        type: [String],
    }),
    (0, typeorm_1.Column)('text', {
        array: true,
        default: ['user']
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "checkFieldsInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "checkFieldsBeforeUpdate", null);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
//# sourceMappingURL=user.entity.js.map