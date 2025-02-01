import { Module } from '@nestjs/common';
import { UserService } from './student.service';
import { UserController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
