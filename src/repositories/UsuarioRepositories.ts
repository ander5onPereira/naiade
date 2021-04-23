import { EntityRepository, Repository } from "typeorm";

import Usuario from "./../models/Usuario";

@EntityRepository(Usuario)
class UsuarioRepositories extends Repository<Usuario>{
}
export { UsuarioRepositories };