import { HttpStatus } from '@nestjs/common'
import { User } from '../schemas/user.schema'

export interface DeleteUser {
   status: HttpStatus
   error?: string
   message?: string
}

export interface GetUserByIdResponse {
   data?: User
   status: HttpStatus
   error?: string
}
