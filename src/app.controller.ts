import { Controller, Get, Param, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/products/:product_id")
  getProduct(@Param("product_id") product_id: string) {
    return `Product ${product_id}`;
  }

  @Get("/categories/:id/products/:product_id")
  getCategory(@Param("product_id") product_id: string, @Param("id") id: string) {
    return `Product ${product_id} and ${id}`;
  }

  @Get("/smartphones")
  getSmartPhones(@Query("rom") rom: number, @Query("brand") brand: string, @Query("ram") ram: number) {
    return `Smartphone: ${rom}GB ROM - Brand: ${brand} - ${ram}GB RAM`;
  }
}
