import { Router, Response, Request } from 'express'
import multer from 'multer'


import { createCategoryController } from '../cars/useCases/createCategory'
import { importCategoryController } from '../cars/useCases/importCategory'
import { listCategoriesController } from '../cars/useCases/listCategory'

const categoriesRoutes = Router()

const upload = multer({
    dest: './tmp'
})


categoriesRoutes.post('/', (request: Request, response: Response) => {
   return createCategoryController.handle(request, response)

})

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request: Request, response: Response) => {
    return importCategoryController.handle(request, response)
})

export { categoriesRoutes }