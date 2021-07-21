import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {IsEmail, IsNotEmpty} from "class-validator";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    firstName: string;

    @Column()
    @IsNotEmpty()
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

}
