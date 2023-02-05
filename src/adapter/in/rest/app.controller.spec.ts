import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '@/application/service/app.service';
import { AppUseCase } from '@/ports/usecase/app.usecase';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, { provide: AppUseCase, useClass: AppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "System" for Domain name', () => {
      expect(appController.getDomain().name).toBe('System');
    });
  });
});
