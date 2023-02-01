import { Domain } from '@/application/domain/app.domain';
import { User } from '@atisio/central/dist/domain/access/user.model';

export interface AppUseCase {
  getDomain(): Domain;
  getUser(): User;
}

export const AppUseCase = Symbol('AppUseCase');
