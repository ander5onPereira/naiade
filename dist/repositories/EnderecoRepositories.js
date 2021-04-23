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
exports.EnderecoRepositories = void 0;
const Endereco_1 = __importDefault(require("./../models/Endereco"));
const typeorm_1 = require("typeorm");
let EnderecoRepositories = class EnderecoRepositories extends typeorm_1.Repository {
};
EnderecoRepositories = __decorate([
    typeorm_1.EntityRepository(Endereco_1.default)
], EnderecoRepositories);
exports.EnderecoRepositories = EnderecoRepositories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kZXJlY29SZXBvc2l0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yaWVzL0VuZGVyZWNvUmVwb3NpdG9yaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG9FQUE0QztBQUM1QyxxQ0FBdUQ7QUFHdkQsSUFBTSxvQkFBb0IsR0FBMUIsTUFBTSxvQkFBcUIsU0FBUSxvQkFBb0I7Q0FFdEQsQ0FBQTtBQUZLLG9CQUFvQjtJQUR6QiwwQkFBZ0IsQ0FBQyxrQkFBUSxDQUFDO0dBQ3JCLG9CQUFvQixDQUV6QjtBQUVRLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmRlcmVjbyBmcm9tIFwiLi8uLi9tb2RlbHMvRW5kZXJlY29cIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSwgUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5ARW50aXR5UmVwb3NpdG9yeShFbmRlcmVjbylcclxuY2xhc3MgRW5kZXJlY29SZXBvc2l0b3JpZXMgZXh0ZW5kcyBSZXBvc2l0b3J5PEVuZGVyZWNvPntcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IEVuZGVyZWNvUmVwb3NpdG9yaWVzIH07Il19