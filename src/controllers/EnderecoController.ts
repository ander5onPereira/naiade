import { Request, Response } from "express";
import { ItEndereco } from "./../interfaces/Endereco.interface";
import { EnderecoRepositories } from "./../repositories/EnderecoRepositories";
import { EntityRepository, getCustomRepository } from "typeorm";
import Endereco from "./../models/Endereco";

@EntityRepository(Endereco)
class EnderecoController {
  async create(req: Request, res: Response) {
    const { cep, cidade, complemento, endereco, estado, id_usuario, numero }: ItEndereco = req.body;
    try {
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
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
    } catch (error) {

      return res.sendStatus(500);
    }

  }
  async index(req: Request, res: Response) {
    try {
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
      const listEndereco = await enderecoRepository.find();
      return res.status(200).json(listEndereco);
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
      const returnDelete = await enderecoRepository.delete(id);
      return res.status(200).json(returnDelete);
    } catch (error) {

      return res.sendStatus(500);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const id = req.params;
      const dadosEndereco: ItEndereco = req.body;
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
      const retornoAtualizacao = await enderecoRepository.update(id, dadosEndereco);
      if (!retornoAtualizacao.affected) {
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
      const enderecoRepository = getCustomRepository(EnderecoRepositories);
      const ListEndereco = await enderecoRepository.find(id);
      return res.status(200).json(ListEndereco);
    } catch (error) {

      return res.sendStatus(500);
    }
  }

}
export default new EnderecoController();