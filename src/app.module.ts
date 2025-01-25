import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';

config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: process.env.DB_PASSWORD,
      username: 'postgres',
      entities: [Student],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    StudentModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
