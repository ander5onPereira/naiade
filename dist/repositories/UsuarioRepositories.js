"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepositories = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = __importDefault(require("./../models/Usuario"));
let UsuarioRepositories = class UsuarioRepositories extends typeorm_1.Repository {
};
UsuarioRepositories = __decorate([
    typeorm_1.EntityRepository(Usuario_1.default)
], UsuarioRepositories);
exports.UsuarioRepositories = UsuarioRepositories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXN1YXJpb1JlcG9zaXRvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvVXN1YXJpb1JlcG9zaXRvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBdUQ7QUFFdkQsa0VBQTBDO0FBRzFDLElBQU0sbUJBQW1CLEdBQXpCLE1BQU0sbUJBQW9CLFNBQVEsb0JBQW1CO0NBQ3BELENBQUE7QUFESyxtQkFBbUI7SUFEeEIsMEJBQWdCLENBQUMsaUJBQU8sQ0FBQztHQUNwQixtQkFBbUIsQ0FDeEI7QUFDUSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuLy4uL21vZGVscy9Vc3VhcmlvXCI7XHJcblxyXG5ARW50aXR5UmVwb3NpdG9yeShVc3VhcmlvKVxyXG5jbGFzcyBVc3VhcmlvUmVwb3NpdG9yaWVzIGV4dGVuZHMgUmVwb3NpdG9yeTxVc3VhcmlvPntcclxufVxyXG5leHBvcnQgeyBVc3VhcmlvUmVwb3NpdG9yaWVzIH07Il19