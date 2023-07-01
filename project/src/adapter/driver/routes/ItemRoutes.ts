import { Router } from 'express'
import { ItemUseCaseImpl } from '../../../core/application/useCaseImpl/ItemUseCaseImpl'
import { ItemDBRepository } from '../../driven/infra/dbRepositories/ItemDBRepository'
import { ItemController } from '../controllers/ItemController'
import { asyncHandler } from '../error/AsyncHandler'

const router = Router()

const itemDBRepository = new ItemDBRepository()
const itemUseCaseImpl = new ItemUseCaseImpl(itemDBRepository)
const itemController = new ItemController(itemUseCaseImpl)

router
    .post(
        '/',
        asyncHandler((req, res) => itemController.postItem(req, res))
    )
    .get(
        '/',
        asyncHandler((req, res) => itemController.getItems(req, res))
    )
    .patch(
        '/:id',
        asyncHandler((req, res) => itemController.patchItem(req, res))
    )
    .delete(
        '/:id',
        asyncHandler((req, res) => itemController.deleteItem(req, res))
    )

export default router
