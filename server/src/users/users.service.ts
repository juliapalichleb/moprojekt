import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { Status, StatusDocument } from '../status/schemas/status.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
  ) {}

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

  async createUser(createUserDto): Promise<User> {
    return this.userModel.create({
      ...createUserDto,
      date: new Date().toISOString(),
      status: '630785f7e3b2f4da2fbc42f2',
    });
  }

  async updateUser(_id, updateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id }, updateUserDto, {
      new: true,
    });
  }
}
