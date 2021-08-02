import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateProductDto } from './create-user.dto'

@Controller('user')
export class UserController {
   @Get()
   getAll() {
      return 'getAll'
   }

   @Post()
   create(@Body() createUser: CreateProductDto): string {
      return `Name: ${createUser.name}  Age: ${createUser.age}`
   }
}
