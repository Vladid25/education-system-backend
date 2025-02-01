import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { UserModule } from './student/student.module';
import { User } from './student/entities/student.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { EntrollmentModule } from './entrollment/entrollment.module';
import { Enrollment } from './entrollment/entities/entrollment.entity';
import { GradeModule } from './grade/grade.module';
import { Grade } from './grade/entities/grade.entity';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: process.env.DB_PASSWORD,
      username: 'postgres',
      entities: [User, Course, Enrollment, Grade],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    UserModule,
    CourseModule,
    EntrollmentModule,
    GradeModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
