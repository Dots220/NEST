import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
   ) {}

   async create(user: CreateUserDto) {
      return this.usersRepository.save(user)
   }

   async getAll() {
      return this.usersRepository.find()
   }

   async delete(id: number) {
      return this.usersRepository.delete(id)
   }

   async findByEmail(email: string) {
      return this.usersRepository.findOne({ where: { email } })
   }

   async findById(id: number) {
      return this.usersRepository.findOne({ id })
   }
}
