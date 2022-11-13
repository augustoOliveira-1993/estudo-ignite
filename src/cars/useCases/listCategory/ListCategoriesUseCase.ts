import { Category } from "../../model/Category"
import { ICategoryRepository } from "../../repositories/ICategoryRepository"

class ListCategoriesUseCase {
    constructor(
        private readonly categoriesRepository: ICategoryRepository
    ){}

    execute(): Category[] {
       
      return this.categoriesRepository.list()

    }
    
}

export {
    ListCategoriesUseCase
}