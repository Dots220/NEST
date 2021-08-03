import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'
import { User, UserDocument } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
   constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>,
   ) {}

   public async getAll(): Promise<User[]> {
      return this.userModel.find().exec()
   }

   public async getById(id: string): Promise<User> {
      return this.userModel.findById(id)
   }

   public async create(userDto: CreateUserDto) {
      const newUser = new this.userModel(userDto)
      return newUser.save()
   }

   async deleteUserById(id: string): Promise<User> {
      return this.userModel.findByIdAndDelete(id)
   }
}
