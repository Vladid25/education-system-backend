import { Module } from '@nestjs/common';
import { EntrollmentService } from './entrollment.service';
import { EntrollmentController } from './entrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './entities/entrollment.entity';
import { Student } from 'src/student/entities/student.entity';
import { Course } from 'src/course/entities/course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Enrollment, Student, Course])],
  controllers: [EntrollmentController],
  providers: [EntrollmentService],
})
export class EntrollmentModule {}
