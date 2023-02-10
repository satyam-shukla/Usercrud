import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose"
import { User, UserDocument } from '../models/users.models';
import {Model} from "mongoose"
import { userDto } from '../dto/user.dto';
import {faker} from "@faker-js/faker"

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel:Model<UserDocument>
    ){}

    Add(payload:userDto){
        return this.userModel.create(payload)
    }

    FindAll(){
        return this.userModel.find({})
    }

    FindOne(id:string){
        return this.userModel.findById({_id:id})
    }

    Update(id:string,payload:userDto){
        return this.userModel.updateOne(
            {_id:id},
            {$set:payload},
            {new:true}
            )
    }

    Delete(id:string){
        return this.userModel.remove({_id:id})
    }

    Search(key:string) {
        const keyword = key
          ? {
              $or: [
                { fullName: { $regex: key, $options: 'i' } },
                { email: { $regex: key, $options: 'i' } },
              ],
            }
          : {};
        return this.userModel.find(keyword);
      }

    //   fake data service
    //   Faker(){
    //      for(let index=0;index<30;index++ ){
    //         const fakeUser = {
    //             fullName:faker.name.fullName(),
    //             email:faker.internet.email(),
    //             age:Math.floor(Math.random() * (40-15 +1 )) +15,
    //             country:faker.address.city()
    //         }
    //         this.userModel.create(fakeUser)
    //     }
    //     return "Success"
    //   }
}
