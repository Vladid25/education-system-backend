import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';  

export class CreateStudentDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @MinLength(2, { message: 'Lastname must have atleast 2 characters.' })
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide valid Email.' })
    email: string;
}
