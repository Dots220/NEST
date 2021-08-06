import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Todo } from '../todo/todo.entity'

@Entity({ name: 'users' })
export class User {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   email: string

   @Column()
   password: string

   @Column({ default: null })
   phone: string

   @OneToMany(() => Todo, (todo) => todo.user)
   todos: Todo[]
}
