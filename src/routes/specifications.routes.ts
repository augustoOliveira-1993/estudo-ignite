import { Router } from 'express'
import { SpecificationsRepository } from '../cars/repositories/implemantations/SpecificationsRepository'
import { createSpecificationController } from '../cars/useCases/createSpecification'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (request, response) => {
   return createSpecificationController.handle(request, response)
})

export {
    specificationsRoutes
}