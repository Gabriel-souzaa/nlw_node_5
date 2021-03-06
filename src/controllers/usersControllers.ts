import { Request, Response } from 'express';
import { UserService } from '../services/usersService';

class UsersControllers {
    async create(request: Request, response: Response): Promise<Response>{
        const { email } = request.body;

        const userService = new UserService();

        const user = await userService.create({email});

        return response.json(user);
    }
}

export {UsersControllers}