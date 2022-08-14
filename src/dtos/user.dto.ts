import { IsString, IsEmail, IsIn, IsDate, IsPhoneNumber, IsUrl, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { authProviderType } from "../models/user.model";

export class CreateUserDTO {

  @IsString()
  @IsNotEmpty()
  readonly full_name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsIn(["email", "google", "apple", "facebook"])
  @IsNotEmpty()
  readonly auth_provider: authProviderType;

  @IsUrl()
  @IsNotEmpty()
  readonly profile_photo: string;

  @IsPhoneNumber()
  readonly phone_number: string;

  @IsString()
  readonly password?: string;

  @IsDate()
  @IsNotEmpty()
  readonly date_of_birth: Date;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {

}