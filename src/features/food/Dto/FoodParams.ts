import { IsNotEmpty } from 'class-validator'

export class FoodParams {
  @IsNotEmpty({ message: 'food/id-is-missing' })
  categoryId!: number
}