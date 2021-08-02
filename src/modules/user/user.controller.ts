import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get()
   getAll(): string {
      return.this.UserSe
   }

   @Post()
   create(@Body() createUser: CreateUserDto): string {
      return `Name: ${createUser.name}  Age: ${createUser.age}`
   }
}
