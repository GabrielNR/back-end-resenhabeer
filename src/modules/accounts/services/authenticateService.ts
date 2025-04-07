import { inject, injectable } from "tsyringe";
import type { IUsersRepository } from "../repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({ email, password }: IRequest){
		
		// Usuario existe
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or password incorrect!")
    }

		const passwordMatch = await compare(password, user.password);

    // Senha está correta
    if(!passwordMatch){
      throw new AppError("Email or password incorrect!")
    }

		const token = sign({}, "a6c5a40a06bca5f00810741826fd60a9", {
      subject: user.id,
      expiresIn: "7d"
    })

		const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

		return tokenReturn
    // Gerar jsonwebtoken
	}

}


export { AuthenticateUserService }
