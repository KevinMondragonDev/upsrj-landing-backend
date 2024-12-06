"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProtected = exports.META_ROLE = exports.RawHeaders = exports.Auth = void 0;
var auth_decorator_1 = require("./auth.decorator");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return auth_decorator_1.Auth; } });
var get_rawHeaders_decorator_1 = require("./get-rawHeaders.decorator");
Object.defineProperty(exports, "RawHeaders", { enumerable: true, get: function () { return get_rawHeaders_decorator_1.RawHeaders; } });
var role_protected_decorator_1 = require("./role-protected.decorator");
Object.defineProperty(exports, "META_ROLE", { enumerable: true, get: function () { return role_protected_decorator_1.META_ROLE; } });
Object.defineProperty(exports, "RoleProtected", { enumerable: true, get: function () { return role_protected_decorator_1.RoleProtected; } });
//# sourceMappingURL=index.js.map