import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getWithStatus() {
    return this.userModel.find().populate('status');
  }

  async deleteUser(_id: string): Promise<Query<any, any>> {
    return this.userModel.deleteOne({ _id });
  }

  // async getUsers(): Promise<User[]> {
  //   return this.userModel.find();
  // }
  //
  // async getUserById(_id: string): Promise<User> {
  //   return this.userModel.findOne({ _id });
  // }

  async createUser(
    email: string,
    age: number,
    nameUser: string,
    tel: string,
    date: string,
    status: string,
  ): Promise<User> {
    return this.userModel.create({
      nameUser,
      email,
      age,
      tel,
      status,
      date: new Date().toISOString().slice(0, 10),
    });
  }

  async updateUser(_id, status, date): Promise<User> {
    return this.userModel.findOneAndUpdate(
      { _id },
      { status, date },
      {
        new: true,
      },
    );
  }
}
