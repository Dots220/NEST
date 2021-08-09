import {
   Body,
   Controller,
   Post,
   HttpException,
   HttpStatus,
} from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { AuthService } from './auth.service'
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcryptjs'

@Controller('auth')
export class AuthController {
   constructor(
      private authService: AuthService,
      private userService: UserService,
   ) {}

   @Post('/login')
   public async login(@Body() body: CreateUserDto) {
      const user = await this.userService.findByEmail(body.email)
      const passwordEquals = await bcrypt.compare(body.password, user.password)

      if (user && passwordEquals) {
         return this.authService.generateToken(user)
      }

      throw new HttpException(
         'Некоректный email или пароль',
         HttpStatus.BAD_REQUEST,
      )
   }

   @Post('/registration')
   public async registration(@Body() body: CreateUserDto) {
      const candidate = await this.userService.findByEmail(body.email)
      if (candidate) {
         throw new HttpException(
            'Пользователь с таким email существует',
            HttpStatus.BAD_REQUEST,
         )
      }

      const hashPassword = await bcrypt.hash(body.password, 5)
      const user = await this.userService.create({
         ...body,
         password: hashPassword,
      })

      return this.authService.generateToken(user)
   }
}
