import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-student.dto';
import { UpdateUserDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/student.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly studentRepository: Repository<User>,
  ) {}

  create(createStudentDto: CreateUserDto):Promise<User> {
    const user: User = new User();
    user.firstName = createStudentDto.firstName;
    user.lastName = createStudentDto.lastName;
    user.email = createStudentDto.email;
    user.password = createStudentDto.password;
    user.role = createStudentDto.role;
    return this.studentRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.studentRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.studentRepository.findOneByOrFail({id});
  }

  update(id: number, updateStudentDto: UpdateUserDto):Promise<User> {
    const student: User = new User();
    student.firstName = updateStudentDto.firstName;
    student.lastName = updateStudentDto.lastName;
    student.email = updateStudentDto.email;
    student.password = updateStudentDto.password;
    student.id = id;
    student.role = student.role;
    return this.studentRepository.save(student);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.studentRepository.delete(id);
  }
}