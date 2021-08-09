import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { UserSharedModule } from '../user/user-shared.module'
import { AuthSharedModule } from './auth-shared.module'

@Module({
   controllers: [AuthController],
   imports: [AuthSharedModule, UserSharedModule],
})
export class AuthModule {}
