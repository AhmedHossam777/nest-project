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
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';

@Controller('user')
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
  async whoAmI(@Session() session: any) {
    if (!session || !session.userId) {
      throw new BadRequestException(
        'Session is not initialized or user is not logged in',
      );
    }
    const user = await this.userService.findOne(session.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Post('/signout')
  async signout(@Session() session: any) {
    console.log(session.userId);
    session.userId = null;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get('')
  find(@Query() email: string) {
    return this.userService.find(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
