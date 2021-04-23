import { UsuarioRepositories } from './../repositories/UsuarioRepositories';
import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { getCustomRepository } from 'typeorm';


export const UsuarioValid = {
  validarEmail: [
    body("email").if(body('email').exists()).isEmail(),
    body("nome").if(body('nome').exists()).isAlpha()
  ],
  validarCadastro: [
    body("email").isEmail(),
    body("email").custom(async (valor) => {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const usuario = await userRepository.findOne({ email: valor });
      if (usuario) {
        return Promise.reject("E-mail já cadastrado")
      }
      return true;
    }),
    body("nome").isAlpha(),
    body("idade").if(body('idade').exists()).isNumeric(),
    body("peso").if(body('peso').exists()).isNumeric(),
    body("etnia").if(body('etnia').exists()).custom((valor: string) => {
      const etniaArray = ["Branco", "Negro", "Indígena", "Pardo", "Mulato", "Caboclos", "Cafuzos"];
      if (!etniaArray.includes(valor)) {
        return Promise.reject("Etnia invalida");
      }
      return true;
    })

  ],
  handler: async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    next();
  },
}

