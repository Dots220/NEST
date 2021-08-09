import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { User } from '../user/user.entity'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
   constructor(private jwtService: JwtService) {}

   public async generateToken(user: User) {
      const payload = { email: user.email, id: user.id }
      return {
         token: this.jwtService.sign(payload),
      }
   }

   public async decodeToken(token: string) {
      if (!token) {
         return {
            error: 'Unauthorized',
            status: HttpStatus.UNAUTHORIZED,
         }
      }

      const decode = this.jwtService.verify(token)
      return decode.id
   }
}
