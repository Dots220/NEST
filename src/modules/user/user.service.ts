import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUser } from './types/user.types'

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
   ) {}

   async create(user: CreateUser) {
      return this.usersRepository.save(user)
   }

   async getAll() {
      return this.usersRepository.find()
   }
}
