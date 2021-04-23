import { NextFunction, Request, Response } from 'express';
export declare const UsuarioValid: {
    validarEmail: import("express-validator").ValidationChain[];
    validarCadastro: import("express-validator").ValidationChain[];
    handler: (req: Request, res: Response, next: NextFunction) => Promise<Response<any>>;
};
//# sourceMappingURL=validateInputMiddleware.d.ts.map