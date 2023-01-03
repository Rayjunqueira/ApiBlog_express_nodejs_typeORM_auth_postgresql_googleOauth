import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Post,  { eager: true })
    @JoinColumn()
    post: Post

    @OneToOne(() => User,  { eager: true })
    @JoinColumn()
    user: User

    @Column()
    comment: string;

    @CreateDateColumn({ 
        type: 'timestamp', 
        precision: 3
      })
      createdAt: Date;    
}