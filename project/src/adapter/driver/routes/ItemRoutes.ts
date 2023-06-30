import { Router } from 'express'
import ItemService from '../../../core/application/services/ItemService'
import ItemDBRepository from '../../driven/infra/dbRepositories/ItemDBRepository'
import ItemController from '../controllers/ItemController'
import { asyncHandler } from '../error/AsyncHandler'

const router = Router()

const itemDBRepository = new ItemDBRepository()
const itemService = new ItemService(itemDBRepository)
const itemController = new ItemController(itemService)

router
    .post(
        '/',
        asyncHandler((req, res) => itemController.postItem(req, res))
    )
    .get(
        '/',
        asyncHandler((req, res) => itemController.getItem(req, res))
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
