import { Controller, Get, Inject } from '@nestjs/common';
import { Domain } from '@/application/domain/app.domain';
import { AppUseCase } from '@/ports/usecase/app.usecase';

@Controller()
export class AppController {
  constructor(@Inject(AppUseCase) private readonly appUseCase: AppUseCase) {}

  @Get('/domain')
  getDomain(): Domain {
    return this.appUseCase.getDomain();
  }
}
