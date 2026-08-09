import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

// You'll see all the DTOs in Swagger Schema section
export class CreateUserDto{
    @ApiProperty() // used to show the property is required: It is only for Swagger not for request validation
    @IsAlphanumeric()
    @MaxLength(10)
    name:string;

    @ApiProperty({required:false})
    age?:number;
}