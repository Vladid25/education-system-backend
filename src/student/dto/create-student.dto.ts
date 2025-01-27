import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';  

  const passwordRegEx =
  /^(?=.*[a-z])(?=.*d)[A-Za-zd@$!%*?&]{8,20}$/;

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
