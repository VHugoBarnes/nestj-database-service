import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserController } from "./controllers/user/user.controller";
import { AnalyticsController } from "./controllers/analytics/analytics.controller";
import { UserService } from "./services/user/user.service";
import { PaymentMethodService } from "./services/payment_method/payment_method.service";
import { PaymentMethodController } from "./controllers/payment_method/payment_method.controller";
import { AnalyticsService } from "./services/analytics/analytics.service";

@Module({
  imports: [],
  controllers: [AppController, UserController, PaymentMethodController, AnalyticsController],
  providers: [AppService, UserService, PaymentMethodService, AnalyticsService],
})
export class AppModule { }
