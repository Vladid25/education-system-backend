import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EntrollmentService as EnrollmentService } from './entrollment.service';

@Controller('entrollment')
export class EntrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post(':userId/:courseId')
  enroll(@Param('userId') userId: number, @Param('courseId') courseId: number) {
    return this.enrollmentService.enroll(userId, courseId);
  }

  @Delete(':userId/:courseId')
  unenroll(@Param('userId') userId: number, @Param('courseId') courseId: number) {
    return this.enrollmentService.unenroll(userId, courseId);
  }

  @Get('student/:studentId/courses')
  async getStudentCourses(@Param('studentId') studentId: number) {
    return this.enrollmentService.getStudentCourses(Number(studentId));
  }

  @Get('course/:courseId/students')
  async getStudentsByCourse(@Param('courseId') courseId: number) {
    return this.enrollmentService.getStudentsByCourse(Number(courseId));
  }
}
