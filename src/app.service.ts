import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloUser(user: string): string {
    return `Hello, ${user}`;
  }

  createUser(username: string, password: string): string {
    return `${username} created with password ${password}`;
  }

  getUser(id: number): string {
    return `hello user with id of ${id}`;
  }
}