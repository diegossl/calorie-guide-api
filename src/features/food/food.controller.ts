import { Controller, Get, Param } from '@nestjs/common'
import { FoodParams } from './Dto/FoodParams'
import { FoodService } from './food.service'

@Controller('food')
export class FoodController {

  constructor(private readonly foodService: FoodService) {}

  @Get('categories')
  async listAllCategories (): Promise<Array<any>> {
    return await this.foodService.getAllCategories()
  }

  @Get('list/:categoryId')
  async listAllFoodByCategory (@Param() params: FoodParams): Promise<Array<any>> {
    return await this.foodService.getAllFoodByCategory(params)
  }

}
