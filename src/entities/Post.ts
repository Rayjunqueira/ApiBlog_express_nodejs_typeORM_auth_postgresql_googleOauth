import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user: User

    @Column()
    title: string;

    @Column({
      default: null,
    })
    img: string;

    @Column()
    desc: string;

    @CreateDateColumn({ 
        type: 'timestamp', 
        precision: 3
      })
      createdAt: Date;    
}