import {
   Column,
   Entity,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '../user/user.entity'

@Entity({ name: 'todos' })
export class Todo {
   public constructor(todo) {
      Object.assign(this, todo)
   }

   @PrimaryGeneratedColumn()
   id: number

   @Column()
   text: string

   @Column({ default: false })
   checked: boolean

   @ManyToOne(() => User, (user) => user.todos)
   user: User
}
