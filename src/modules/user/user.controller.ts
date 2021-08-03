import {
   Body,
   Controller,
   Delete,
   Get,
   Header,
   HttpCode,
   HttpStatus,
   Param,
   Post,
   Query,
} from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'
import { UserService } from './user.service'
import { User } from './schemas/user.schema'
import { DeleteUser, GetUserByIdResponse } from './types/user.types'

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get()
   getAll(): Promise<User[]> {
      return this.userService.getAll()
   }

   @Get(':id')
   getOne(@Param('id') id: string): Promise<User> {
      return this.userService.getById(id)
   }

   @Post()
   @HttpCode(HttpStatus.CREATED)
   @Header('Cache-Control', 'none')
   create(@Body() createUser: CreateUserDto) {
      return this.userService.create(createUser)
   }

   @Delete(':id')
   remove(@Param('id') id: string): Promise<User> {
      return this.userService.deleteUserById(id)
   }
}
