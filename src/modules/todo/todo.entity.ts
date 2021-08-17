import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../user/user.entity'
import { Exclude } from 'class-transformer'

@Entity({ name: 'todos' })
export class Todo {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   text: string

   @Column({ default: false })
   checked: boolean

   @ManyToOne(() => User, (user) => user.todos)
   user: User

   public constructor(todo) {
      Object.assign(this, todo)
   }
}
