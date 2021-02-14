import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { FoodParams } from './Dto/FoodParams'
import { promises } from 'fs'

@Injectable()
export class FoodService {

  async getAllCategories (): Promise<Array<any>> {
    try {
      const filePath = 'src/database/categories.json'
      const data = await promises.readFile(filePath, { encoding: 'utf8' })
      const categories: Array<any> = JSON.parse(data)
      return categories
    } catch {
      throw new InternalServerErrorException('food/list-categories-failed')
    }
  }

  async getAllFoodByCategory (params: FoodParams): Promise<Array<any>> {
    try {
      const { categoryId } = params
      const filePath = 'src/database/foods.json'
      const data = await promises.readFile(filePath, { encoding: 'utf8' })
      const foodList: Array<any> = JSON.parse(data)
      const response = foodList.filter((food: any) => {
        if (food.category_id.toString() === categoryId.toString()) {
          return food
        }
      })
      return response
    } catch {
      throw new InternalServerErrorException('food/search-by-category-failed')
    }
  }

}
