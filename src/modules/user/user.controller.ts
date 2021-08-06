import {
   Body,
   Controller,
   Delete,
   Get,
   HttpException,
   HttpStatus,
   Param,
   Post,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('user')
export class UserController {
   constructor(private userService: UserService) {}

   @Post()
   public async create(@Body() body: CreateUserDto) {
      const user = await this.userService.findByEmail(body.email)
      if (user) {
         throw new HttpException('User is exist', HttpStatus.BAD_REQUEST)
      }

      return this.userService.create(body)
   }

   @Get()
   async getAll() {
      return this.userService.getAll()
   }

   @Delete('/:id')
   async delete(@Param('id') id: number) {
      const user = await this.userService.findById(id)
      if (!user) {
         throw new HttpException('User is not exist', HttpStatus.NOT_FOUND)
      }
      return this.userService.delete(id)
   }
}
