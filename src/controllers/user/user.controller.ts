import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserService } from "src/services/user/user.service";

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
