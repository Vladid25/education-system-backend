import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grade } from './entities/grade.entity';
import { User } from 'src/student/entities/student.entity';
import { Course } from 'src/course/entities/course.entity';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>
  ) {}

  async create(gradeData: {
    studentId: number;
    courseId: number;
    grade: number;
    date: Date;
  }): Promise<Grade> {
    const grade = new Grade();

    const student = new User();
    student.id = gradeData.studentId;
    grade.student = student;

    const course = new Course();
    course.id = gradeData.courseId;
    grade.course = course;

    grade.grade = gradeData.grade;
    grade.date = gradeData.date;

    return await this.gradeRepository.save(grade);
  }

  async findAll(): Promise<Grade[]> {
    return this.gradeRepository.find({
      relations: ['student', 'course'],
    });
  }

  async findOne(id: number): Promise<Grade> {
    const grade = await this.gradeRepository.findOne({
      where: { id },
      relations: ['student', 'course'],
    });
    if (!grade) {
      throw new NotFoundException(`Grade with id ${id} not found`);
    }
    return grade;
  }

}
