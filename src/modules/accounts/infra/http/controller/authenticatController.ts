import { Request, Response } from 'express';


import { container } from 'tsyringe';
import { AuthenticateUserService } from '@modules/accounts/services/authenticateService';

export default class AuthenticatedController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);
  
    const token = await authenticateUserService.execute({ password, email })
  
    return response.json(token)
  }
}
