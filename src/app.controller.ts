import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  getHelloUser(@Query() query: any): string {
    const user: string = query.name;

    return this.appService.helloUser(user);
  }

  @Post('/user')
  createUser(@Body() body: any): string {
    const username: string = body.username;
    const password: string = body.password;
    return this.appService.createUser(username, password);
  }

  @Get('/user/:id')
  getUser(@Param() param: any): string {
    const id: number = param.id;
    return this.appService.getUser(id);
  }
}