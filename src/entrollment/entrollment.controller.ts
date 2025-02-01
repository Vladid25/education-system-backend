import { Controller, Delete, Param, Post } from '@nestjs/common';
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
}
