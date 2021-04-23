import EnderecoController from "./controllers/EnderecoController";
import UsuarioController from "./controllers/UsuarioContoller";
import authUserMiddleware from "./middlewares/authUserMiddleware";
import { UsuarioValid } from "./middlewares/validateInputMiddleware";
import { Router } from "express";

const router = Router();

router.post("/login", UsuarioValid.validarEmail, UsuarioController.login);
router.post("/usuario", UsuarioValid.validarCadastro, UsuarioValid.handler, UsuarioController.create);

router.get("/logout/", authUserMiddleware, UsuarioController.logout);

router.delete("/usuario/:id?", authUserMiddleware, UsuarioController.delete);
router.get("/usuario/busca", authUserMiddleware, UsuarioController.buscar);
router.get("/usuario", authUserMiddleware, UsuarioController.index);
router.put("/usuario", UsuarioValid.validarEmail, UsuarioValid.handler, authUserMiddleware, UsuarioController.update);

router.get("/endereco/busca", authUserMiddleware, EnderecoController.buscar);
router.get("/endereco", authUserMiddleware, EnderecoController.index);
router.post("/endereco", authUserMiddleware, EnderecoController.create);
router.put("/endereco", authUserMiddleware, EnderecoController.update);
router.delete("/endereco/:id?", authUserMiddleware, EnderecoController.delete);

router.get("/status", (req, res, next) => {
  return res.status(200).send(true);
});

router.get("/", (req, res) => {
  return res.status(200).send("Realize login");
})

export default router;