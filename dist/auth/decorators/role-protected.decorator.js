"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProtected = exports.META_ROLE = void 0;
const common_1 = require("@nestjs/common");
exports.META_ROLE = 'roles';
const RoleProtected = (...args) => {
    return (0, common_1.SetMetadata)(exports.META_ROLE, args);
};
exports.RoleProtected = RoleProtected;
//# sourceMappingURL=role-protected.decorator.js.map