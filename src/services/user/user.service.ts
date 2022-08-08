import { Injectable } from "@nestjs/common";
import { User } from "../../models/user.model";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UserService {

  private users: User[] = [{
    _id: uuidv4(),
    full_name: "Victor Hugo Vazquez Gomez",
    email: "hugovg799@gmail.com",
    username: "vhugobarnes",
    auth_provider: "email",
    date_of_birth: new Date(1999, 7, 11),
    phone_number: "+52 555 555 5555",
    profile_photo: "https://pbs.twimg.com/profile_images/1449191408158584840/65Unodb6_400x400.jpg",
    password: "$2a$12$/GHgjxMZMbF4KMlrlj9zduQ1ln2ifmdlI4dRjv5PwjIr7JGrKzo9m",
    deleted: false,
    created_at: new Date().valueOf()
  }];

  async findAll(): Promise<User[] | null> {
    const rawUsers = this.users.slice();
    const users = rawUsers.map((user) => {
      delete user?.password;
      return user;
    });

    return users;
  }

  async findById(_id: string): Promise<User | null> {
    const findedUser = this.users.find((user) => user._id.toString() === _id.toString());

    if (findedUser === undefined) {
      return null;
    }

    return findedUser;
  }

  async create(payload: any): Promise<User> {
    try {
      const newUser: User = {
        _id: uuidv4(),
        auth_provider: payload.auth_provider,
        username: payload.username,
        full_name: payload.full_name,
        email: payload.email,
        phone_number: payload.phone_number,
        profile_photo: payload.profile_photo,
        deleted: false,
        created_at: new Date().valueOf()
      };

      if (payload.auth_provider === "email") {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(payload.password, salt);

        newUser.password = hashedPassword;
      }

      this.users.push(newUser);

      return newUser;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateById(_id: string, payload: any) {

  }

  async deleteById(_id: string) { }

}
