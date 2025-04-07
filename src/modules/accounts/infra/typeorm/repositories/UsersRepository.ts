import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }
  
  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id)

    return user
  }

  async create({ name, email, password }: ICreateUserDTO) {
    const user = this.repository.create({
      name,
      email,
      password,
    })

    await this.repository.save(user)
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email })
    return user;
  }
}

export { UsersRepository }