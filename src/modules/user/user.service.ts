import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'

@Injectable()
export class UserService {
   private user = []

   getAll() {
      return this.user
   }

   getById(id: string) {
      return this.user.find((p) => p.id === id)
   }

   create(userDto: CreateUserDto) {
      this.user.push({
         ...userDto,
         id: Date.now().toString(),
      })
   }
}
