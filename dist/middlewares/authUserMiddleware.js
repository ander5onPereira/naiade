"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UsuarioRepositories_1 = require("../repositories/UsuarioRepositories");
const typeorm_1 = require("typeorm");
async function authUserMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.sendStatus(401);
    }
    try {
        const token = authorization.replace("Bearer", "").trim();
        try {
            const userRepository = typeorm_1.getCustomRepository(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = await userRepository.findOne({ token });
            if (!usuario) {
                return res.sendStatus(401);
            }
            const data = jsonwebtoken_1.default.verify(token, process.env.KEY);
            const { id } = data;
            req.userId = id;
            return next();
        }
        catch (error) {
            console.log(error.message);
            return res.sendStatus(500);
        }
    }
    catch (error) {
        return res.sendStatus(500);
    }
}
exports.default = authUserMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aFVzZXJNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2F1dGhVc2VyTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdFQUErQjtBQUMvQiw2RUFBMEU7QUFDMUUscUNBQThDO0FBTy9CLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzlGLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbEIsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCO0lBQ0QsSUFBSTtRQUNGLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pELElBQUk7WUFDRixNQUFNLGNBQWMsR0FBRyw2QkFBbUIsQ0FBQyx5Q0FBbUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7WUFDRCxNQUFNLElBQUksR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBb0IsQ0FBQztZQUVwQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVoQixPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtLQUNGO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFFZCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7QUFDSCxDQUFDO0FBM0JELHFDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgVXN1YXJpb1JlcG9zaXRvcmllcyB9IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvVXN1YXJpb1JlcG9zaXRvcmllc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXN0b21SZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbmludGVyZmFjZSBUb2tlblBheWxvYWQge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaWF0OiBudW1iZXI7XHJcbiAgZXhwOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXV0aFVzZXJNaWRkbGV3YXJlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoIWF1dGhvcml6YXRpb24pIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnJlcGxhY2UoXCJCZWFyZXJcIiwgXCJcIikudHJpbSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlclJlcG9zaXRvcnkgPSBnZXRDdXN0b21SZXBvc2l0b3J5KFVzdWFyaW9SZXBvc2l0b3JpZXMpO1xyXG4gICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgdXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IHRva2VuIH0pO1xyXG4gICAgICBpZiAoIXVzdWFyaW8pIHtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuS0VZKTtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZGF0YSBhcyBUb2tlblBheWxvYWQ7XHJcblxyXG4gICAgICByZXEudXNlcklkID0gaWQ7XHJcblxyXG4gICAgICByZXR1cm4gbmV4dCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg1MDApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDUwMCk7XHJcbiAgfVxyXG59Il19