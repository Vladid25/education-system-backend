import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeController } from './grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { UserModule } from 'src/student/student.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports:[TypeOrmModule.forFeature([Grade]), UserModule, CourseModule],
  controllers: [GradeController],
  providers: [GradeService],
  exports:[GradeService]
})
export class GradeModule {}
