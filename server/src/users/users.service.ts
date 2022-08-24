import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(_id: string): Promise<User> {
    return this.userModel.findOne({ _id });
  }

  async createUser(
    email: string,
    age: number,
    nameUser: string,
    tel: number,
  ): Promise<User> {
    return this.userModel.create({
      userId: uuidv4(),
      nameUser,
      email,
      age,
      tel,
    });
  }

  async updateUser(_id: string, status: string): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { _id },
      { status },
      {
        new: true,
      },
    );
  }
}
