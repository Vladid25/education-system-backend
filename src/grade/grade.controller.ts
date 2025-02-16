import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GradeService } from './grade.service';

@Controller('grades')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  async create(@Body() createGradeDto: { studentId: number; courseId: number; grade: number; date: Date }) {
    return this.gradeService.create(createGradeDto);
  }

  @Get()
  async findAll() {
    return this.gradeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.gradeService.findOne(id);
  }

  @Get('report/:id')
  async getStudentReport(@Param('id') studentId: number) {
    return this.gradeService.generateStudentReport(studentId ? Number(studentId) : undefined);
  }
}
