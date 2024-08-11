import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/createUserDto';
import { UpdateUserDto } from 'src/dto/updateUserDto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
