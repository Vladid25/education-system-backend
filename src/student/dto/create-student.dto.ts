import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';  
import { UserRole } from '../entities/student.entity';

  export const passwordRegEx =
  /^(?=.*[a-z])(?=.*d)[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @MinLength(2, { message: 'Lastname must have atleast 2 characters.' })
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    role: UserRole;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide valid Email.' })
    email: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
      message: `Password must contain Minimum 8 and maximum 20 characters, 
      at least one uppercase letter, 
      one lowercase letter, 
      one number and 
      one special character`,
    })
    password: string;
}
