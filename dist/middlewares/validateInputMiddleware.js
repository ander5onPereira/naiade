"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioValid = void 0;
const UsuarioRepositories_1 = require("./../repositories/UsuarioRepositories");
const express_validator_1 = require("express-validator");
const typeorm_1 = require("typeorm");
exports.UsuarioValid = {
    validarEmail: [
        express_validator_1.body("email").if(express_validator_1.body('email').exists()).isEmail(),
        express_validator_1.body("nome").if(express_validator_1.body('nome').exists()).isAlpha()
    ],
    validarCadastro: [
        express_validator_1.body("email").isEmail(),
        express_validator_1.body("email").custom(async (valor) => {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = await userRepository.findOne({ email: valor });
            if (usuario) {
                return Promise.reject("E-mail já cadastrado");
            }
            return true;
        }),
        express_validator_1.body("nome").isAlpha(),
        express_validator_1.body("idade").if(express_validator_1.body('idade').exists()).isNumeric(),
        express_validator_1.body("peso").if(express_validator_1.body('peso').exists()).isNumeric(),
        express_validator_1.body("etnia").if(express_validator_1.body('etnia').exists()).custom((valor) => {
            const etniaArray = ["Branco", "Negro", "Indígena", "Pardo", "Mulato", "Caboclos", "Cafuzos"];
            if (!etniaArray.includes(valor)) {
                return Promise.reject("Etnia invalida");
            }
            return true;
        })
    ],
    handler: async (req, res, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }
        next();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVJbnB1dE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvdmFsaWRhdGVJbnB1dE1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0VBQTRFO0FBRTVFLHlEQUEyRDtBQUMzRCxxQ0FBOEM7QUFHakMsUUFBQSxZQUFZLEdBQUc7SUFDMUIsWUFBWSxFQUFFO1FBQ1osd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUNsRCx3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyx3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQ2pEO0lBQ0QsZUFBZSxFQUFFO1FBQ2Ysd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDdkIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25DLE1BQU0sY0FBYyxHQUFHLDZCQUFtQixDQUFDLHlDQUFtQixDQUFDLENBQUM7WUFDaEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUE7YUFDOUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLHdCQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO1FBQ3RCLHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUU7UUFDcEQsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUNsRCx3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyx3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDaEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztLQUVIO0lBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtRQUNqRSxNQUFNLE1BQU0sR0FBRyxvQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQztDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc3VhcmlvUmVwb3NpdG9yaWVzIH0gZnJvbSAnLi8uLi9yZXBvc2l0b3JpZXMvVXN1YXJpb1JlcG9zaXRvcmllcyc7XHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgYm9keSwgdmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJ2V4cHJlc3MtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc3VhcmlvVmFsaWQgPSB7XHJcbiAgdmFsaWRhckVtYWlsOiBbXHJcbiAgICBib2R5KFwiZW1haWxcIikuaWYoYm9keSgnZW1haWwnKS5leGlzdHMoKSkuaXNFbWFpbCgpLFxyXG4gICAgYm9keShcIm5vbWVcIikuaWYoYm9keSgnbm9tZScpLmV4aXN0cygpKS5pc0FscGhhKClcclxuICBdLFxyXG4gIHZhbGlkYXJDYWRhc3RybzogW1xyXG4gICAgYm9keShcImVtYWlsXCIpLmlzRW1haWwoKSxcclxuICAgIGJvZHkoXCJlbWFpbFwiKS5jdXN0b20oYXN5bmMgKHZhbG9yKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJSZXBvc2l0b3J5ID0gZ2V0Q3VzdG9tUmVwb3NpdG9yeShVc3VhcmlvUmVwb3NpdG9yaWVzKTtcclxuICAgICAgY29uc3QgdXN1YXJpbyA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyBlbWFpbDogdmFsb3IgfSk7XHJcbiAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRS1tYWlsIGrDoSBjYWRhc3RyYWRvXCIpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KSxcclxuICAgIGJvZHkoXCJub21lXCIpLmlzQWxwaGEoKSxcclxuICAgIGJvZHkoXCJpZGFkZVwiKS5pZihib2R5KCdpZGFkZScpLmV4aXN0cygpKS5pc051bWVyaWMoKSxcclxuICAgIGJvZHkoXCJwZXNvXCIpLmlmKGJvZHkoJ3Blc28nKS5leGlzdHMoKSkuaXNOdW1lcmljKCksXHJcbiAgICBib2R5KFwiZXRuaWFcIikuaWYoYm9keSgnZXRuaWEnKS5leGlzdHMoKSkuY3VzdG9tKCh2YWxvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV0bmlhQXJyYXkgPSBbXCJCcmFuY29cIiwgXCJOZWdyb1wiLCBcIkluZMOtZ2VuYVwiLCBcIlBhcmRvXCIsIFwiTXVsYXRvXCIsIFwiQ2Fib2Nsb3NcIiwgXCJDYWZ1em9zXCJdO1xyXG4gICAgICBpZiAoIWV0bmlhQXJyYXkuaW5jbHVkZXModmFsb3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiRXRuaWEgaW52YWxpZGFcIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KVxyXG5cclxuICBdLFxyXG4gIGhhbmRsZXI6IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdChyZXEpO1xyXG4gICAgaWYgKCFlcnJvcnMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yczogZXJyb3JzLmFycmF5KCkgfSk7XHJcbiAgICB9XHJcbiAgICBuZXh0KCk7XHJcbiAgfSxcclxufVxyXG5cclxuIl19