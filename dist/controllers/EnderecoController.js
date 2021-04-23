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
const EnderecoRepositories_1 = require("./../repositories/EnderecoRepositories");
const typeorm_1 = require("typeorm");
const Endereco_1 = __importDefault(require("./../models/Endereco"));
let EnderecoController = class EnderecoController {
    async create(req, res) {
        const { cep, cidade, complemento, endereco, estado, id_usuario, numero } = req.body;
        try {
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            const novoEndereco = enderecoRepository.create({
                cep: cep.replaceAll("^[^0-9]+", ""),
                cidade,
                complemento,
                endereco,
                estado,
                id_usuario,
                numero
            });
            const enderecoSave = await enderecoRepository.save(novoEndereco);
            return res.status(201).json(enderecoSave);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async index(req, res) {
        try {
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            const listEndereco = await enderecoRepository.find();
            return res.status(200).json(listEndereco);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async delete(req, res) {
        try {
            const id = req.query;
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            const returnDelete = await enderecoRepository.delete(id);
            return res.status(200).json(returnDelete);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    async update(req, res) {
        try {
            const id = req.params;
            const dadosEndereco = req.body;
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            const retornoAtualizacao = await enderecoRepository.update(id, dadosEndereco);
            if (!retornoAtualizacao.affected) {
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
            const enderecoRepository = typeorm_1.getCustomRepository(EnderecoRepositories_1.EnderecoRepositories);
            const ListEndereco = await enderecoRepository.find(id);
            return res.status(200).json(ListEndereco);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
};
EnderecoController = __decorate([
    typeorm_1.EntityRepository(Endereco_1.default)
], EnderecoController);
exports.default = new EnderecoController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kZXJlY29Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL0VuZGVyZWNvQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLGlGQUE4RTtBQUM5RSxxQ0FBZ0U7QUFDaEUsb0VBQTRDO0FBRzVDLElBQU0sa0JBQWtCLEdBQXhCLE1BQU0sa0JBQWtCO0lBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDdEMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDaEcsSUFBSTtZQUNGLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLE1BQU07Z0JBQ04sV0FBVztnQkFDWCxRQUFRO2dCQUNSLE1BQU07Z0JBQ04sVUFBVTtnQkFDVixNQUFNO2FBQ1AsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBRWQsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBRUgsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7UUFDckMsSUFBSTtZQUNGLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLFlBQVksR0FBRyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUVkLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ3RDLElBQUk7WUFDRixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3JCLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLFlBQVksR0FBRyxNQUFNLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUN0QyxJQUFJO1lBQ0YsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN0QixNQUFNLGFBQWEsR0FBZSxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzNDLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDckQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUVkLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ3RDLElBQUk7WUFDRixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sa0JBQWtCLEdBQUcsNkJBQW1CLENBQUMsMkNBQW9CLENBQUMsQ0FBQztZQUNyRSxNQUFNLFlBQVksR0FBRyxNQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQXRFSyxrQkFBa0I7SUFEdkIsMEJBQWdCLENBQUMsa0JBQVEsQ0FBQztHQUNyQixrQkFBa0IsQ0FzRXZCO0FBQ0Qsa0JBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBJdEVuZGVyZWNvIH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlcy9FbmRlcmVjby5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgRW5kZXJlY29SZXBvc2l0b3JpZXMgfSBmcm9tIFwiLi8uLi9yZXBvc2l0b3JpZXMvRW5kZXJlY29SZXBvc2l0b3JpZXNcIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSwgZ2V0Q3VzdG9tUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBFbmRlcmVjbyBmcm9tIFwiLi8uLi9tb2RlbHMvRW5kZXJlY29cIjtcclxuXHJcbkBFbnRpdHlSZXBvc2l0b3J5KEVuZGVyZWNvKVxyXG5jbGFzcyBFbmRlcmVjb0NvbnRyb2xsZXIge1xyXG4gIGFzeW5jIGNyZWF0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgY2VwLCBjaWRhZGUsIGNvbXBsZW1lbnRvLCBlbmRlcmVjbywgZXN0YWRvLCBpZF91c3VhcmlvLCBudW1lcm8gfTogSXRFbmRlcmVjbyA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZW5kZXJlY29SZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShFbmRlcmVjb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGNvbnN0IG5vdm9FbmRlcmVjbyA9IGVuZGVyZWNvUmVwb3NpdG9yeS5jcmVhdGUoe1xyXG4gICAgICAgIGNlcDogY2VwLnJlcGxhY2VBbGwoXCJeW14wLTldK1wiLCBcIlwiKSxcclxuICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgY29tcGxlbWVudG8sXHJcbiAgICAgICAgZW5kZXJlY28sXHJcbiAgICAgICAgZXN0YWRvLFxyXG4gICAgICAgIGlkX3VzdWFyaW8sXHJcbiAgICAgICAgbnVtZXJvXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBlbmRlcmVjb1NhdmUgPSBhd2FpdCBlbmRlcmVjb1JlcG9zaXRvcnkuc2F2ZShub3ZvRW5kZXJlY28pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZW5kZXJlY29TYXZlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGFzeW5jIGluZGV4KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZW5kZXJlY29SZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShFbmRlcmVjb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGNvbnN0IGxpc3RFbmRlcmVjbyA9IGF3YWl0IGVuZGVyZWNvUmVwb3NpdG9yeS5maW5kKCk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihsaXN0RW5kZXJlY28pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBkZWxldGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IHJlcS5xdWVyeTtcclxuICAgICAgY29uc3QgZW5kZXJlY29SZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShFbmRlcmVjb1JlcG9zaXRvcmllcyk7XHJcbiAgICAgIGNvbnN0IHJldHVybkRlbGV0ZSA9IGF3YWl0IGVuZGVyZWNvUmVwb3NpdG9yeS5kZWxldGUoaWQpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmV0dXJuRGVsZXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBkYWRvc0VuZGVyZWNvOiBJdEVuZGVyZWNvID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGVuZGVyZWNvUmVwb3NpdG9yeSA9IGdldEN1c3RvbVJlcG9zaXRvcnkoRW5kZXJlY29SZXBvc2l0b3JpZXMpO1xyXG4gICAgICBjb25zdCByZXRvcm5vQXR1YWxpemFjYW8gPSBhd2FpdCBlbmRlcmVjb1JlcG9zaXRvcnkudXBkYXRlKGlkLCBkYWRvc0VuZGVyZWNvKTtcclxuICAgICAgaWYgKCFyZXRvcm5vQXR1YWxpemFjYW8uYWZmZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcImZhaWxcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgYnVzY2FyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBlbmRlcmVjb1JlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KEVuZGVyZWNvUmVwb3NpdG9yaWVzKTtcclxuICAgICAgY29uc3QgTGlzdEVuZGVyZWNvID0gYXdhaXQgZW5kZXJlY29SZXBvc2l0b3J5LmZpbmQoaWQpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oTGlzdEVuZGVyZWNvKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFbmRlcmVjb0NvbnRyb2xsZXIoKTsiXX0=