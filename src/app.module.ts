import { FoodController } from './features/food/food.controller'
import { FoodService } from './features/food/food.service'
import { FoodModule } from './features/food/food.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [FoodModule],
  controllers: [FoodController],
  providers: [FoodService],
})
export class AppModule {}
