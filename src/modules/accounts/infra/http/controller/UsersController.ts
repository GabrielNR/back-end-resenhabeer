import { Request, Response } from 'express';


import { container } from 'tsyringe';
import { CreateUsersService } from '@modules/accounts/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUsersService);

    const user = await createUser.execute({
      name,
      email,
      password
    });

    return response.json(user);
  }
}
