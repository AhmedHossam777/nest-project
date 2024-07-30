import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserDto } from './dto/user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { User } from './entities/user.entity';

@Controller('user')
@Serialize(UserDto)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      createUserDto.email,
      createUserDto.password,
      createUserDto.username,
    );

    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signin(
    @Body('email') email: string,
    @Body('password') password: string,
    @Session() session: any,
  ) {
    const user = await this.authService.signin(email, password);
    session.userId = user.id;

    return user;
  }

  @Get('/whoAmI')
  async whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signout')
  async signout(@Session() session: any) {
    console.log(session.userId);
    session.userId = null;
  }

  @Get('')
  find(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(parseInt(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}