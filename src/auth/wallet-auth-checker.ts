import {AuthCheckerInterface, ResolverData} from 'type-graphql';
import { Context } from '../context';

export enum Roles {
    ADMIN = 'admin',
    USER = 'user',
}

export class WalletAuthChecker implements AuthCheckerInterface<Context> {
    check({ root, args, context: {wallet}, info }: ResolverData<Context>, roles: string[]) {
      if (!wallet) {
        console.warn('No wallet found in context');
        return false;
      }
      
      return true;
    }
  }