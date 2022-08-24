import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/demo'),
    JobsModule,
    MongooseModule.forRoot('mongodb://localhost/demo'),
    StatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
