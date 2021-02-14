import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { promises } from 'fs'

@Injectable()
export class FoodService {

  async getAllCategories () {
    try {
      const filePath = 'src/database/categories.json'
      return await promises.readFile(filePath, { encoding: 'utf8' })
    } catch {
      throw new InternalServerErrorException('food/list-categories-failed')
    }
  }
}
