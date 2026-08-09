import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

// Group API based on their controllers:
@ApiTags('Users')
@Controller('users')
export class UsersController {
    /*
        Dependency Injection:
            -   Nest.js Already has UserService as dependency in module so you don't need to create it manually every time you need UserService, you only have to inject it whenever you want. 
                And it is so? You'll test it 
            -   Loose Coupling so that you don't need to create instances again and again.
            -   Good for testing and maintainability.

        What NestJS does internally:
            - Sees UsersService(any other things as well) in providers
            - Creates one instance (singleton by default)
            - Stores it in a DI container(DI container has all Provides stuff)
            - Injects it wherever requested 
                
    */
    constructor(private userService:UsersService){}
    // Above is same as below:
    // constructor(private userService: UsersService){
    //     this.userService = userService;
    // }

    @ApiOkResponse({type:User,isArray:true})
    @ApiQuery({name:'name',required:false})
    @Get()
    findAll(@Query('name') name?:string):any{
        return this.userService.findAll(name);
    }

    @ApiOkResponse({type:User})
    @ApiNotFoundResponse()
    @Get(':id')
    // ParseIntPipe: This is pipe and the used to parse data from one to other type.
    findOneById(@Param('id', ParseIntPipe) id: number):any{
        const user = this.userService.findOneById(id);
        if(!user){
            throw new NotFoundException('User not found');
        }
        return user;
    }
    // This only to show how api response should look like on swagger document
    @ApiCreatedResponse({type:User})
    @ApiBadRequestResponse()
    @Post()
    create(@Body() body: CreateUserDto):any{
        return this.userService.create(body);
    }
}
