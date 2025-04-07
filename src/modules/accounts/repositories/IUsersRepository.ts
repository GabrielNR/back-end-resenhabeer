import { User } from '../infra/typeorm/entities/User';
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

export interface IUsersRepository {
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  create({ name, email, password }: ICreateUserDTO): void;
}

