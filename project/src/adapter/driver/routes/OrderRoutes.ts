import { Router } from 'express'
import { OrderDBRepository } from '../../driven/infra/dbRepositories/OrderDBRepository'
import { OrderUseCaseImpl } from '../../../core/application/useCaseImpl/OrderUseCaseImpl'
import { OrderController } from '../controllers/OrderController'
import { asyncHandler } from '../error/AsyncHandler'

const router = Router()

const orderDBRepository = new OrderDBRepository()
const orderUseCaseImpl = new OrderUseCaseImpl(orderDBRepository)
const orderController = new OrderController(orderUseCaseImpl)

router
    .post(
        '/',
        asyncHandler((req, res) => orderController.postOrder(req, res))
    )
    .get(
        '/',
        asyncHandler((req, res) => orderController.getOrder(req, res))
    )
    .patch(
        '/:id',
        asyncHandler((req, res) => orderController.patchOrder(req, res))
    )
    .delete(
        '/:id',
        asyncHandler((req, res) => orderController.deleteOrder(req, res))
    )

export default router
