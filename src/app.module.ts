import { Module } from '@nestjs/common';
import { AppController } from './adapter/in/rest/app.controller';
import { AppService } from '@/application/service/app.service';
import { AppUseCase } from '@/ports/usecase/app.usecase';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: AppUseCase, useClass: AppService }],
})
export class AppModule {}
