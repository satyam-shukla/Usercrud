import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { userDto } from '../dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly service:UsersService
    ){}
    

    @Post()
    Add(@Body() payload:userDto){
        return this.service.Add(payload)
    }

    @Post("/search")
    getHello(@Query('key') key) {
        console.log(key)
        return this.service.Search(key);
    }

    @Get()
    FindAll(){
        return this.service.FindAll()
    }


    @Get("/:id")
    FindOne(@Param('id') id:string){
        return this.service.FindOne(id)
    }

    @Put('/:id')
    Update(@Param('id') id:string,payload:userDto){
        return this.service.Update(id,payload)
    }

    @Delete('/:id')
    Delete(@Param('id') id:string){
        return this.service.Delete(id)
    }

    // for fake data 

    // @Post("/faker")
    // Faker(){
    //     return this.service.Faker()
    // }
    

}
