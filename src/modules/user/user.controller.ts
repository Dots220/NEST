import {
   Body,
   Controller,
   Get,
   HttpException,
   HttpStatus,
   Post,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUser } from './types/user.types'

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Post()
   public async create(@Body() body: CreateUser) {
      const check = await this.userService.findOne({ email: body.email })
      if (check) {
         throw new HttpException(
            'Пользователь с таким email существует',
            HttpStatus.BAD_REQUEST,
         )
      }

      return this.userService.create(body)
   }

   @Get()
   async getAll() {
      return this.userService.getAll()
   }
}
