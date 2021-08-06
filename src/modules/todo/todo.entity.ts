import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../user/user.entity'

@Entity({ name: 'todos' })
export class Todo {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   text: string

   @Column({ default: false })
   checked: boolean

   @OneToMany(() => User, (user) => user.todos)
   user: User
}
