import { SpecificationsRepository } from "../../repositories/implemantations/SpecificationsRepository"
import { CreateSpecificationController } from "./CreateSpecificationsController"
import { CreateSpecificationUseCase } from "./CreateSpecificationUserCase"


const specificationRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)


export {
    createSpecificationController
}