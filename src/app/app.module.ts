import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from '../modules/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../modules/user/user.entity'
import { AuthModule } from '../modules/auth/auth.module'
import { TodoModule } from '../modules/todo/todo.module'
import { Todo } from '../modules/todo/todo.entity'

@Module({
   imports: [
      TodoModule,
      UserModule,
      AuthModule,
      TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 3010,
         username: 'postgres',
         password: 'qQ12345!',
         entities: [User, Todo],
         synchronize: true,
      }),
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
