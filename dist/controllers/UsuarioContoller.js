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
const Usuario_1 = __importDefault(require("./../models/Usuario"));
const EnderecoRepositories_1 = require("./../repositories/EnderecoRepositories");
const UsuarioRepositories_1 = require("./../repositories/UsuarioRepositories");
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
let UsuarioController = class UsuarioController {
    async login(req, res) {
        const email = req.body;
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = await userRepository.findOne(email);
            if (!usuario) {
                return res.sendStatus(401);
            }
            req.session.userId = usuario.id;
            const token = jsonwebtoken_1.default.sign({ id: usuario.id }, process.env.KEY, { expiresIn: "1h" });
            usuario.token = token;
            const atualizarToken = await userRepository.update(usuario.id, usuario);
            if (!atualizarToken.affected) {
                return res.sendStatus(401);
            }
            return res.status(200).json(usuario);
        }
        catch (error) {
            console.log(error.message);
            return res.sendStatus(500);
        }
    }
    async create(req, res) {
        const { nome, telefone, email, idade, peso, etnia } = req.body;
        const { endereco, numero, complemento, cep, cidade, estado } = req.body;
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const user = userRepository.create({
                nome,
                telefone,
                email,
                idade,
                peso,
                etnia
            });
            var userSalvo = await userRepository.save(user);
            if (!userSalvo) {
                return res.sendStatus(401);
            }
            if (cep) {
                const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
                const NovoEndereco = enderecoRepository.create({
                    endereco,
                    numero,
                    complemento,
                    cep,
                    cidade,
                    estado,
                    id_usuario: userSalvo.id
                });
                const enderecoSalvo = await enderecoRepository.save(NovoEndereco);
                if (!enderecoSalvo) {
                    await userRepository.delete(userSalvo.id);
                    return res.sendStatus(404);
                }
                userSalvo = Object.assign(Object.assign({}, userSalvo), enderecoSalvo);
            }
            return res.status(201).json(userSalvo);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async index(req, res) {
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const users = await userRepository.find();
            return res.status(200).json(users);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.query;
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            await enderecoRepository.delete({ id_usuario: id.toString() });
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            await userRepository.delete({ id: id.toString() });
            return res.status(200).json({ message: "Success" });
        }
        catch (error) {
            console.log(error.message);
            return res.sendStatus(500);
        }
    }
    async update(req, res) {
        const id = req.params;
        const dados = req.body;
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = await userRepository.update(id, dados);
            if (!usuario.affected) {
                return res.status(404).json({ message: "fail" });
            }
            return res.status(200).json({ message: "success" });
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async buscar(req, res) {
        try {
            const id = req.params;
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = await userRepository.find(id);
            return res.status(200).json(usuario);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async logout(req, res) {
        const id = req.params;
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const users = await userRepository.update(id, { token: null });
            req.session.destroy(err => {
                res.clearCookie('sid');
                return res.status(200).redirect('/');
            });
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
};
UsuarioController = __decorate([
    typeorm_1.EntityRepository(Usuario_1.default)
], UsuarioController);
exports.default = new UsuarioController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXN1YXJpb0NvbnRvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Vc3VhcmlvQ29udG9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esa0VBQTBDO0FBQzFDLGlGQUE4RTtBQUM5RSwrRUFBNEU7QUFFNUUseURBQXFEO0FBQ3JELGdFQUErQjtBQUMvQixxQ0FBZ0U7QUFLaEUsSUFBTSxpQkFBaUIsR0FBdkIsTUFBTSxpQkFBaUI7SUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNyQyxNQUFNLEtBQUssR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRS9CLE1BQU0sTUFBTSxHQUFHLG9DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSTtZQUNGLE1BQU0sY0FBYyxHQUFHLDZCQUFtQixDQUFDLHlDQUFtQixDQUFDLENBQUM7WUFDaEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1lBRUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqRixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN0QixNQUFNLGNBQWMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDdEMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQWMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUMxRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBZSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXBGLElBQUk7WUFDRixNQUFNLGNBQWMsR0FBRyw2QkFBbUIsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLElBQUk7Z0JBQ0osUUFBUTtnQkFDUixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsSUFBSTtnQkFDSixLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBQ0gsSUFBSSxTQUFTLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsTUFBTSxrQkFBa0IsR0FBRyw2QkFBbUIsQ0FBQywyQ0FBb0IsQ0FBQyxDQUFDO2dCQUNyRSxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7b0JBQzdDLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixXQUFXO29CQUNYLEdBQUc7b0JBQ0gsTUFBTTtvQkFDTixNQUFNO29CQUNOLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRTtpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sYUFBYSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNsQixNQUFNLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzVCO2dCQUVELFNBQVMsbUNBQ0osU0FBUyxHQUNULGFBQWEsQ0FDakIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBRWQsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDckMsSUFBSTtZQUNGLE1BQU0sY0FBYyxHQUFHLDZCQUFtQixDQUFDLHlDQUFtQixDQUFDLENBQUM7WUFDaEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBRWQsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDdEMsSUFBSTtZQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sY0FBYyxHQUFHLDZCQUFtQixDQUFDLHlDQUFtQixDQUFDLENBQUM7WUFDaEUsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUMxQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN0QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFbEMsSUFBSTtZQUNGLE1BQU0sY0FBYyxHQUFHLDZCQUFtQixDQUFDLHlDQUFtQixDQUFDLENBQUM7WUFDaEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN0QyxJQUFJO1lBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN0QixNQUFNLGNBQWMsR0FBRyw2QkFBbUIsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU5QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN0QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3RCLElBQUk7WUFDRixNQUFNLGNBQWMsR0FBRyw2QkFBbUIsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sS0FBSyxHQUFHLE1BQU0sY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN0QyxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQTlJSyxpQkFBaUI7SUFEdEIsMEJBQWdCLENBQUMsaUJBQU8sQ0FBQztHQUNwQixpQkFBaUIsQ0E4SXRCO0FBQ0Qsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEl0RW5kZXJlY28gfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvRW5kZXJlY28uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSXRVc3VhcmlvIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL1VzdWFyaW8uaW50ZXJmYWNlJztcclxuaW1wb3J0IFVzdWFyaW8gZnJvbSAnLi8uLi9tb2RlbHMvVXN1YXJpbyc7XHJcbmltcG9ydCB7IEVuZGVyZWNvUmVwb3NpdG9yaWVzIH0gZnJvbSAnLi8uLi9yZXBvc2l0b3JpZXMvRW5kZXJlY29SZXBvc2l0b3JpZXMnO1xyXG5pbXBvcnQgeyBVc3VhcmlvUmVwb3NpdG9yaWVzIH0gZnJvbSAnLi8uLi9yZXBvc2l0b3JpZXMvVXN1YXJpb1JlcG9zaXRvcmllcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGlvblJlc3VsdCB9IGZyb20gXCJleHByZXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSwgZ2V0Q3VzdG9tUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyB0b2tlbiB9IGZyb20gJ21vcmdhbic7XHJcbi8vaW1wb3J0IHsgS0VZIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEVudGl0eVJlcG9zaXRvcnkoVXN1YXJpbylcclxuY2xhc3MgVXN1YXJpb0NvbnRyb2xsZXIge1xyXG4gIGFzeW5jIGxvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgY29uc3QgZW1haWw6IHN0cmluZyA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IGVycm9ycyA9IHZhbGlkYXRpb25SZXN1bHQocmVxKTtcclxuICAgIGlmICghZXJyb3JzLmlzRW1wdHkoKSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcnM6IGVycm9ycy5hcnJheSgpIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlclJlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KFVzdWFyaW9SZXBvc2l0b3JpZXMpO1xyXG4gICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgdXNlclJlcG9zaXRvcnkuZmluZE9uZShlbWFpbCk7XHJcbiAgICAgIGlmICghdXN1YXJpbykge1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICByZXEuc2Vzc2lvbi51c2VySWQgPSB1c3VhcmlvLmlkO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgaWQ6IHVzdWFyaW8uaWQgfSwgcHJvY2Vzcy5lbnYuS0VZLCB7IGV4cGlyZXNJbjogXCIxaFwiIH0pO1xyXG4gICAgICB1c3VhcmlvLnRva2VuID0gdG9rZW47XHJcbiAgICAgIGNvbnN0IGF0dWFsaXphclRva2VuID0gYXdhaXQgdXNlclJlcG9zaXRvcnkudXBkYXRlKHVzdWFyaW8uaWQsIHVzdWFyaW8pO1xyXG4gICAgICBpZiAoIWF0dWFsaXphclRva2VuLmFmZmVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzdWFyaW8pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IG5vbWUsIHRlbGVmb25lLCBlbWFpbCwgaWRhZGUsIHBlc28sIGV0bmlhIH06IEl0VXN1YXJpbyA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgeyBlbmRlcmVjbywgbnVtZXJvLCBjb21wbGVtZW50bywgY2VwLCBjaWRhZGUsIGVzdGFkbyB9OiBJdEVuZGVyZWNvID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlclJlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KFVzdWFyaW9SZXBvc2l0b3JpZXMpO1xyXG4gICAgICBjb25zdCB1c2VyID0gdXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcclxuICAgICAgICBub21lLFxyXG4gICAgICAgIHRlbGVmb25lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGlkYWRlLFxyXG4gICAgICAgIHBlc28sXHJcbiAgICAgICAgZXRuaWFcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciB1c2VyU2Fsdm8gPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5zYXZlKHVzZXIpO1xyXG4gICAgICBpZiAoIXVzZXJTYWx2bykge1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjZXApIHtcclxuICAgICAgICBjb25zdCBlbmRlcmVjb1JlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KEVuZGVyZWNvUmVwb3NpdG9yaWVzKTtcclxuICAgICAgICBjb25zdCBOb3ZvRW5kZXJlY28gPSBlbmRlcmVjb1JlcG9zaXRvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGVuZGVyZWNvLFxyXG4gICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgY29tcGxlbWVudG8sXHJcbiAgICAgICAgICBjZXAsXHJcbiAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICBlc3RhZG8sXHJcbiAgICAgICAgICBpZF91c3VhcmlvOiB1c2VyU2Fsdm8uaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBlbmRlcmVjb1NhbHZvID0gYXdhaXQgZW5kZXJlY29SZXBvc2l0b3J5LnNhdmUoTm92b0VuZGVyZWNvKTtcclxuICAgICAgICBpZiAoIWVuZGVyZWNvU2Fsdm8pIHtcclxuICAgICAgICAgIGF3YWl0IHVzZXJSZXBvc2l0b3J5LmRlbGV0ZSh1c2VyU2Fsdm8uaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHVzZXJTYWx2byA9IHtcclxuICAgICAgICAgIC4uLnVzZXJTYWx2byxcclxuICAgICAgICAgIC4uLmVuZGVyZWNvU2Fsdm9cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih1c2VyU2Fsdm8pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBpbmRleChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJSZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShVc3VhcmlvUmVwb3NpdG9yaWVzKTtcclxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5maW5kKCk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2Vycyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgZW5kZXJlY29SZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShFbmRlcmVjb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGF3YWl0IGVuZGVyZWNvUmVwb3NpdG9yeS5kZWxldGUoeyBpZF91c3VhcmlvOiBpZC50b1N0cmluZygpIH0pO1xyXG4gICAgICBjb25zdCB1c2VyUmVwb3NpdG9yeSA9IGdldEN1c3RvbVJlcG9zaXRvcnkoVXN1YXJpb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGF3YWl0IHVzZXJSZXBvc2l0b3J5LmRlbGV0ZSh7IGlkOiBpZC50b1N0cmluZygpIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgZGFkb3M6IEl0VXN1YXJpbyA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJSZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShVc3VhcmlvUmVwb3NpdG9yaWVzKTtcclxuICAgICAgY29uc3QgdXN1YXJpbyA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgZGFkb3MpO1xyXG4gICAgICBpZiAoIXVzdWFyaW8uYWZmZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcImZhaWxcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYnVzY2FyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCB1c2VyUmVwb3NpdG9yeSA9IGdldEN1c3RvbVJlcG9zaXRvcnkoVXN1YXJpb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGNvbnN0IHVzdWFyaW8gPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5maW5kKGlkKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c3VhcmlvKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgbG9nb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlclJlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KFVzdWFyaW9SZXBvc2l0b3JpZXMpO1xyXG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgeyB0b2tlbjogbnVsbCB9KTtcclxuICAgICAgcmVxLnNlc3Npb24uZGVzdHJveShlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5jbGVhckNvb2tpZSgnc2lkJylcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnJlZGlyZWN0KCcvJylcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc3VhcmlvQ29udHJvbGxlcigpOyJdfQ==