import { Request, Response } from "express";
declare class EnderecoController {
    create(req: Request, res: Response): Promise<Response<any>>;
    index(req: Request, res: Response): Promise<Response<any>>;
    delete(req: Request, res: Response): Promise<Response<any>>;
    update(req: Request, res: Response): Promise<Response<any>>;
    buscar(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: EnderecoController;
export default _default;
//# sourceMappingURL=EnderecoController.d.ts.map