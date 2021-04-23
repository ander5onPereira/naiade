import { Request, Response } from "express";
declare class UsuarioController {
    login(req: Request, res: Response): Promise<Response<any>>;
    create(req: Request, res: Response): Promise<Response<any>>;
    index(req: Request, res: Response): Promise<Response<any>>;
    delete(req: Request, res: Response): Promise<Response<any>>;
    update(req: Request, res: Response): Promise<Response<any>>;
    buscar(req: Request, res: Response): Promise<Response<any>>;
    logout(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: UsuarioController;
export default _default;
//# sourceMappingURL=UsuarioContoller.d.ts.map