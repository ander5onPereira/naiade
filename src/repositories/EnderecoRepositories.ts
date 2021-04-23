import Endereco from "./../models/Endereco";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Endereco)
class EnderecoRepositories extends Repository<Endereco>{

}

export { EnderecoRepositories };