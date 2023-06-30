import { Router } from 'express'
import ItemService from '../../../core/application/services/ItemService'
import ItemDBRepository from '../../driven/infra/dbRepositories/ItemDBRepository'
import ItemController from '../controllers/ItemController'
import { asyncHandler } from '../error/AsyncHandler'

const router = Router()

const itemDBRepository = new ItemDBRepository()
const itemService = new ItemService(itemDBRepository)
const itemController = new ItemController(itemService)

router.post(
    '/',
    asyncHandler((req, res) => itemController.postItem(req, res))
)
router.get(
    '/',
    asyncHandler((req, res) => itemController.getItem(req, res))
)

export default router
