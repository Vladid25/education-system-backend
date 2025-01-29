import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsString, MinLength, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(4, { message: 'Teacher shoud have at least 4 characters.' })
    @IsNotEmpty()
    teacher: string;

    @IsNotEmpty()
    @IsNumber()
    duration: number;

    @IsNotEmpty()
    @IsDate()
    startDate: Date;
}
