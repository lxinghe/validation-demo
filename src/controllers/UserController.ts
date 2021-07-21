import {Body, HttpCode, JsonController, Post} from "routing-controllers";
import {User} from "../entity/User";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail, IsNotEmpty} from "class-validator";

@JsonController('/users')
export class UserController {
    @Post()
    @HttpCode(201)
    create(@Body() user: User) {
        console.log("user is instance of User? ", user instanceof User);
        return 'created';
    }

    @Post("/create")
    @HttpCode(201)
    createWithDTO(@Body() user: UserDTO) {
        console.log("user is instance of UserDTO? ", user instanceof UserDTO)
        return 'created';
    }
}

class UserDTO {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;
}
