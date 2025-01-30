import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './student.service';
import { CreateUserDto } from './dto/create-student.dto';
import { UpdateUserDto } from './dto/update-student.dto';

@Controller('user')
export class UserController {
  constructor(private readonly studentService: UserService) {}

  @Post()
  create(@Body() createStudentDto: CreateUserDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateUserDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
