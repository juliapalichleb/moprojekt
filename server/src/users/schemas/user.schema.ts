import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  nameUser: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  tel: number;

  @Prop()
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
