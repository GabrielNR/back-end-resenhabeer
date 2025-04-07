import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { hash } from "bcrypt"

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUsersService {
  constructor (
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const usersAlreadyExists = await this.usersRepository.findByEmail(email)

    if(usersAlreadyExists) {
      throw new AppError("Users already exists!")
    }

    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({ 
      name, 
      email, 
      password: passwordHash 
    })

    return user
  }
}

export { CreateUsersService }