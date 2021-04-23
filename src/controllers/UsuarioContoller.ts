
import { ItEndereco } from './../interfaces/Endereco.interface';
import { ItUsuario } from './../interfaces/Usuario.interface';
import Usuario from './../models/Usuario';
import { EnderecoRepositories } from './../repositories/EnderecoRepositories';
import { UsuarioRepositories } from './../repositories/UsuarioRepositories';
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { EntityRepository, getCustomRepository } from 'typeorm';
import { token } from 'morgan';
//import { KEY } from "../config";

@EntityRepository(Usuario)
class UsuarioController {
  async login(req: Request, res: Response) {
    const email: string = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const usuario = await userRepository.findOne(email);
      if (!usuario) {
        return res.sendStatus(401);
      }
      //@ts-ignore
      req.session.userId = usuario.id;
      const token = jwt.sign({ id: usuario.id }, process.env.KEY, { expiresIn: "1h" });
      usuario.token = token;
      const atualizarToken = await userRepository.update(usuario.id, usuario);
      if (!atualizarToken.affected) {
        return res.sendStatus(401);
      }
      return res.status(200).json(usuario);
    } catch (error) {
      console.log(error.message)
      return res.sendStatus(500);
    }
  }

  async create(req: Request, res: Response) {
    const { nome, telefone, email, idade, peso, etnia }: ItUsuario = req.body;
    const { endereco, numero, complemento, cep, cidade, estado }: ItEndereco = req.body;

    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
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
        const enderecoRepository = getCustomRepository(EnderecoRepositories);
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
        //@ts-ignore
        userSalvo = {
          ...userSalvo,
          ...enderecoSalvo
        };
      }
      return res.status(201).json(userSalvo);
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async index(req: Request, res: Response) {
    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const users = await userRepository.find();
      return res.status(200).json(users);
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
      await enderecoRepository.delete({ id_usuario: id.toString() });
      const userRepository = getCustomRepository(UsuarioRepositories);
      await userRepository.delete({ id: id.toString() });

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error.message)
      return res.sendStatus(500);
    }
  }
  async update(req: Request, res: Response) {
    const id = req.params;
    const dados: ItUsuario = req.body;

    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const usuario = await userRepository.update(id, dados);
      if (!usuario.affected) {
        return res.status(404).json({ message: "fail" });
      }
      return res.status(200).json({ message: "success" });
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async buscar(req: Request, res: Response) {
    try {
      const id = req.params;
      const userRepository = getCustomRepository(UsuarioRepositories);
      const usuario = await userRepository.find(id);

      return res.status(200).json(usuario);
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async logout(req: Request, res: Response) {
    const id = req.params;
    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const users = await userRepository.update(id, { token: null });
      req.session.destroy(err => {
        res.clearCookie('sid')
        return res.status(200).redirect('/')
      })
    } catch (error) {

      return res.sendStatus(500);
    }
  }

}
export default new UsuarioController();