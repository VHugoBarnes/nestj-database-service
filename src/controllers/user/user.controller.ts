import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserService } from "../../services/user/user.service";
import { ParseBooleanPipe } from "../../common/parse-boolean.pipe";
import { CreateUserDTO } from "../../dtos/user.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {

  }

  @Get("/")
  async getAllUsers() {
    const users = await this.userService.findAll();

    return {
      ok: true,
      response: {
        data: {
          users: users
        },
        message: "[sucess]",
        redirect: false
      }
    };
  }

  @Get("/status/:status")
  async getUsersByStatus(@Param("status", ParseBooleanPipe) status: boolean) {
    const users = await this.userService.findByAccountStatus(status);

    return {
      ok: true,
      response: {
        data: {
          users: users
        },
        message: "[success]",
        redirect: false
      }
    };
  }

  @Get("/:id")
  async getUserById(@Param("id") id: string) {
    const user = await this.userService.findById(id);

    return {
      ok: true,
      response: {
        data: {
          user: user
        },
        message: "[sucess]",
        redirect: false
      }
    };
  }

  @Post("/")
  async createUser(@Body() body: any) {
    const user = await this.userService.create(body.payload);

    return {
      ok: true,
      response: {
        data: {
          user: user,
        },
        message: "[user-created]",
        redirect: true
      }
    };
  }
}
