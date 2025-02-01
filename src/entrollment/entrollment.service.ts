import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/course/entities/course.entity';
import { Repository } from 'typeorm';
import { Enrollment } from './entities/entrollment.entity';
import { User, UserRole } from 'src/student/entities/student.entity';

@Injectable()
export class EntrollmentService {
    constructor(
        @InjectRepository(Enrollment)
        private readonly enrollmentRepo: Repository<Enrollment>,
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        @InjectRepository(Course)
        private readonly courseRepo: Repository<Course>,
      ) {}
    
      async enroll(userId: number, courseId: number): Promise<Enrollment> {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) throw new NotFoundException('User not found');
        if(user.role!= UserRole.STUDENT)throw new NotAcceptableException("User must be student!")
        const course = await this.courseRepo.findOne({ where: { id: courseId } });
        if (!course) throw new NotFoundException('Course not found');
    
        const existingEnrollment = await this.enrollmentRepo.findOne({ where: { student: { id: userId }, course: { id: courseId } } });
        if (existingEnrollment) throw new NotFoundException('User already enrolled in this course');
    
        const enrollment = this.enrollmentRepo.create({ student: user, course: course });
        return this.enrollmentRepo.save(enrollment);
      }
    
      async unenroll(userId: number, courseId: number): Promise<string> {
        const enrollment = await this.enrollmentRepo.findOne({
          where: { student: { id: userId }, course: { id: courseId } },
        });
    
        if (!enrollment) throw new NotFoundException('Enrollment not found');
    
        await this.enrollmentRepo.remove(enrollment);
        return 'Unenrolled successfully';
      }
}
