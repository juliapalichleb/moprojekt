import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    email: string,
    age: number,
    nameUser: string,
    surname: string,
    tel: number,
  ): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      nameUser,
      surname,
      email,
      age,
      tel,
    });
  }
}
