import {IsEmail,IsNotEmpty,IsString,IsNumber} from "class-validator"
export class userDto{

    
    @IsNotEmpty()
    @IsString()
    fullName:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    age:number

    @IsNotEmpty()
    @IsString()
    country:string
}