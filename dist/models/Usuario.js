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
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    hasCreatedAt() {
        this.createdAt = new Date();
    }
    hasUpdatedAt() {
        this.updatedAt = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "idade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "peso", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "etnia", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "token", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "hasCreatedAt", null);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "hasUpdatedAt", null);
Usuario = __decorate([
    typeorm_1.Entity("usuario")
], Usuario);
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXN1YXJpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUE2RjtBQUU3RixJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQU87SUFnQzFCLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUlELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUF2Q0M7SUFEQyxnQ0FBc0IsQ0FBQyxNQUFNLENBQUM7O21DQUNwQjtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3lDQUNRO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3NDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOztxQ0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3NDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzhCQUNFLElBQUk7MENBQUM7QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzhCQUNFLElBQUk7MENBQUM7QUFHaEI7SUFEQyxzQkFBWSxFQUFFOzs7OzJDQUdkO0FBSUQ7SUFGQyxzQkFBWSxFQUFFO0lBQ2Qsc0JBQVksRUFBRTs7OzsyQ0FHZDtBQXhDa0IsT0FBTztJQUQzQixnQkFBTSxDQUFDLFNBQVMsQ0FBQztHQUNHLE9BQU8sQ0F5QzNCO2tCQXpDb0IsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlZm9yZUluc2VydCwgQmVmb3JlVXBkYXRlLCBDb2x1bW4sIEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5ARW50aXR5KFwidXN1YXJpb1wiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc3VhcmlvIHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBub21lOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHRlbGVmb25lOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIGVtYWlsOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIGlkYWRlOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHBlc286IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgZXRuaWE6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgdG9rZW46IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG5cclxuICBAQ29sdW1uKClcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcblxyXG4gIEBCZWZvcmVJbnNlcnQoKVxyXG4gIGhhc0NyZWF0ZWRBdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcclxuICB9XHJcblxyXG4gIEBCZWZvcmVJbnNlcnQoKVxyXG4gIEBCZWZvcmVVcGRhdGUoKVxyXG4gIGhhc1VwZGF0ZWRBdCgpIHtcclxuICAgIHRoaXMudXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcclxuICB9XHJcbn0iXX0=