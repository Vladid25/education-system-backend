import { Test, TestingModule } from '@nestjs/testing';
import { EntrollmentController } from './entrollment.controller';
import { EntrollmentService } from './entrollment.service';

describe('EntrollmentController', () => {
  let controller: EntrollmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrollmentController],
      providers: [EntrollmentService],
    }).compile();

    controller = module.get<EntrollmentController>(EntrollmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
