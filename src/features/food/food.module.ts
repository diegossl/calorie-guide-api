import { FoodController } from './food.controller'
import { FoodService } from './food.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [FoodService],
  controllers: [FoodController],
  exports: [FoodService]
})
export class FoodModule {}
