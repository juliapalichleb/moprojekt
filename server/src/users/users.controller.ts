import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get(':_id')
  // async getUser(@Param('_id') _id: string): Promise<User> {
  //   return this.usersService.getUserById(_id);
  // }

  // @Get()
  // async getUsers(): Promise<User[]> {
  //   return this.usersService.getUsers();
  // }

  // @Get(':_id')
  // async getUserWithStatus(@Param('_id') _id: string): Promise<User> {
  //   return this.usersService.getWithStatus(_id);
  // }
  @Get()
  async getUserWithStatus(): Promise<User[]> {
    return this.usersService.getWithStatus();
  }

  @Delete(':_id')
  async deleteUsers(@Param('_id') _id: string): Promise<void> {
    return this.usersService.deleteUser(_id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':_id')
  async updateUser(
    @Param('_id') _id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(_id, updateUserDto);
  }
}
