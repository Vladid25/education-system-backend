import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto):Promise<Student> {
    const student: Student = new Student();
    student.firstName = createStudentDto.firstName;
    student.lastName = createStudentDto.lastName;
    student.email = createStudentDto.email;
    return this.studentRepository.save(student);
  }

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOneByOrFail({id});
  }

  update(id: number, updateStudentDto: UpdateStudentDto):Promise<Student> {
    const student: Student = new Student();
    student.firstName = updateStudentDto.firstName;
    student.lastName = updateStudentDto.lastName;
    student.email = updateStudentDto.email;
    student.id = id;
    return this.studentRepository.save(student);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.studentRepository.delete(id);
  }
}
