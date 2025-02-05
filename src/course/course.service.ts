import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UserService } from 'src/student/student.service';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
    private readonly userService: UserService
  ){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();

    course.duration = createCourseDto.duration;
    course.name = createCourseDto.name;
    course.startDate = createCourseDto.startDate;
    
    const teacher = await this.userService.findOne(createCourseDto.teacherId);
    course.teacher = teacher;

    return this.courseRepository.save(course);
  }

  findAll(): Promise<Course[]>  {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOneByOrFail({id})
  }

  async findByTeacherLastNameOrCourseName(query: { teacherLastName?: string; name?: string }): Promise<Course[]> {
    const qb = this.courseRepository.createQueryBuilder('course')
      .leftJoinAndSelect('course.teacher', 'teacher');

    if (query.teacherLastName) {
      qb.andWhere('LOWER(teacher.lastName) LIKE LOWER(:teacherLastName)', { teacherLastName: `%${query.teacherLastName}%` });
    }
    if (query.name) {
      qb.andWhere('LOWER(course.name) LIKE LOWER(:name)', { name: `%${query.name}%` });
    }

    return await qb.getMany();
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = new Course();

    course.duration = updateCourseDto.duration;
    course.name = updateCourseDto.name;
    course.startDate= updateCourseDto.startDate;
    const teacher = await this.userService.findOne(updateCourseDto.teacherId);
    course.teacher = teacher;
    course.id = id;

    return this.courseRepository.save(course);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.courseRepository.delete(id)
  }
}
