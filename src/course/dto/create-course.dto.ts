import { IsString, MinLength, IsNotEmpty, IsEmail, Matches, isNumber, IsNumber, IsDate } from 'class-validator';

export class CreateCourseDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    duration: number;

    @IsNotEmpty()
    @IsNumber()
    teacherId: number;

    @IsNotEmpty()
    @IsDate()
    startDate: Date;
}
