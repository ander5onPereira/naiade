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
], Usuario.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "complemento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "estado", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "id_usuario", void 0);
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
    typeorm_1.Entity("enderecos")
], Usuario);
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kZXJlY28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL0VuZGVyZWNvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZGO0FBRTdGLElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBTztJQWdDMUIsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBSUQsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBRUYsQ0FBQTtBQXhDQztJQURDLGdDQUFzQixDQUFDLE1BQU0sQ0FBQzs7bUNBQ3BCO0FBR1g7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7O3VDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDVztBQUdwQjtJQURDLGdCQUFNLEVBQUU7O29DQUNHO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7OzJDQUNVO0FBR25CO0lBREMsZ0JBQU0sRUFBRTs4QkFDRSxJQUFJOzBDQUFDO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs4QkFDRSxJQUFJOzBDQUFDO0FBR2hCO0lBREMsc0JBQVksRUFBRTs7OzsyQ0FHZDtBQUlEO0lBRkMsc0JBQVksRUFBRTtJQUNkLHNCQUFZLEVBQUU7Ozs7MkNBR2Q7QUF4Q2tCLE9BQU87SUFEM0IsZ0JBQU0sQ0FBQyxXQUFXLENBQUM7R0FDQyxPQUFPLENBMEMzQjtrQkExQ29CLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWZvcmVJbnNlcnQsIEJlZm9yZVVwZGF0ZSwgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcclxuQEVudGl0eShcImVuZGVyZWNvc1wiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc3VhcmlvIHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBlbmRlcmVjbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBudW1lcm86IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgY29tcGxlbWVudG86IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgY2VwOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIGNpZGFkZTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBlc3RhZG86IHN0cmluZztcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgaWRfdXN1YXJpbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKClcclxuICBjcmVhdGVkQXQ6IERhdGU7XHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxuXHJcbiAgQEJlZm9yZUluc2VydCgpXHJcbiAgaGFzQ3JlYXRlZEF0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgQEJlZm9yZUluc2VydCgpXHJcbiAgQEJlZm9yZVVwZGF0ZSgpXHJcbiAgaGFzVXBkYXRlZEF0KCkge1xyXG4gICAgdGhpcy51cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xyXG4gIH1cclxuXHJcbn0iXX0=