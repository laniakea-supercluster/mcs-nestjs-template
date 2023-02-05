import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Domain } from '@/application/domain/app.domain';
import { AppUseCase } from '@/ports/usecase/app.usecase';

import { User } from '@atisio/central/dist/domain/access/user.model';

@Injectable()
export class AppService implements AppUseCase {
  getDomain(): Domain {
    return new Domain(uuidv4(), 'System');
  }

  getUser(): User {
    const user = new User(uuidv4());
    user.name = 'System';
    return user;
  }
}
