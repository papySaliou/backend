import { CreateUserDto } from 'src/dto/createUserDto';
import { UpdateUserDto } from 'src/dto/updateUserDto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: number): Promise<import("./user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: number): Promise<void>;
}
