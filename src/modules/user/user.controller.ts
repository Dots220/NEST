import {
   Body,
   Controller,
   Delete,
   Get,
   HttpException,
   HttpStatus,
   Param,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('user')
export class UserController {
   constructor(private userService: UserService) {}

   @Delete('/:id')
   async delete(@Param('id') id: number) {
      const user = await this.userService.findById(id)
      if (!user) {
         throw new HttpException('User is not exist', HttpStatus.NOT_FOUND)
      }
      return this.userService.delete(id)
   }
}
