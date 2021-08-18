import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../user/user.entity'
import { Exclude } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'todos' })
export class Todo {
   @ApiProperty()
   @PrimaryGeneratedColumn()
   id: number

   @ApiProperty({ example: 'Сходить в магазин' })
   @Column()
   text: string

   @ApiProperty({ example: 'false' })
   @Column({ default: false })
   checked: boolean

   @ManyToOne(() => User, (user) => user.todos)
   user: User

   public constructor(todo) {
      Object.assign(this, todo)
   }
}
