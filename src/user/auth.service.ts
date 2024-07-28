import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(email: string, password: string, username: string) {
    // Check if the user already exists
    const users = await this.userService.find(email);
    if (users.length !== 0) {
      throw new BadRequestException('Email is already in use');
    }

    // Generate salt
    const salt = randomBytes(8).toString('hex');

    // Hash the password with the salt
    let hash: Buffer;
    try {
      hash = (await scrypt(password, salt, 32)) as Buffer;
    } catch (error) {
      throw new Error('Error hashing password');
    }

    const result = salt + '.' + hash.toString('hex');

    // Create a new user DTO
    const createUserDto = new CreateUserDto();
    createUserDto.email = email;
    createUserDto.password = result;
    createUserDto.username = username;

    // Save the new user
    return await this.userService.create(createUserDto);
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    console.log(user);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') !== storedHash) {
      throw new BadRequestException('wrong password');
    }

    return user;
  }
}