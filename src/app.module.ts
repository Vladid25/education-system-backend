import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { EntrollmentModule } from './entrollment/entrollment.module';
import { Enrollment } from './entrollment/entities/entrollment.entity';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: process.env.DB_PASSWORD,
      username: 'postgres',
      entities: [Student, Course, Enrollment],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    StudentModule,
    CourseModule,
    EntrollmentModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
