// import { Injectable } from '@nestjs/common';
// import { User } from './user.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

// @Injectable()
// export class UsersService {

//     constructor(
//         @InjectRepository(User)
//         private userRepository: Repository<User>
//       ) {}
    
//       findAll(): Promise<User[]> {
//         return this.userRepository.find()
//       }
    
//       findOne(id: number): Promise<User> {
//         return this.userRepository.findOneBy({ id })
//       }
    
//       create(user: User): Promise<User> {
//         return this.userRepository.save(user)
//       }
    
//       async update(id: number, updateUserDto: Partial<User>): Promise<User> {
//         await this.userRepository.update(id, updateUserDto)
//         return this.userRepository.findOneBy({ id })
//       }
    
//       async remove(id: number): Promise<void> {
//         await this.userRepository.delete(id)
//       }
// }

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/createUserDto';
import { UpdateUserDto } from 'src/dto/updateUserDto';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.userRepository.findOneBy({ email: createUserDto.email });
    if (userExists) {
      throw new BadRequestException('User with this email already exists');
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id); // Vérifie d'abord si l'utilisateur existe
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Vérifie d'abord si l'utilisateur existe
    await this.userRepository.delete(user.id);
  }

 
}

