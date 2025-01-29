import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>
  ){}

  create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();

    course.duration = createCourseDto.duration;
    course.name = createCourseDto.name;
    course.startDate= createCourseDto.startDate;
    course.teacher=createCourseDto.teacher;

    return this.courseRepository.save(course);
  }

  findAll(): Promise<Course[]>  {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOneByOrFail({id})
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = new Course();

    course.duration = updateCourseDto.duration;
    course.name = updateCourseDto.name;
    course.startDate= updateCourseDto.startDate;
    course.teacher=updateCourseDto.teacher;
    course.id = id;

    return this.courseRepository.save(course);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.courseRepository.delete(id)
  }
}
