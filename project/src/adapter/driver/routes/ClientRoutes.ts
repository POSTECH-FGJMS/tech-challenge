import express from 'express'
import { ClientUseCaseImpl } from '../../../core/application/useCaseImpl/ClientUseCaseImpl'
import { ClientDBRepository } from '../../driven/infra/dbRepositories/ClientDBRepository'
import { ClientController } from '../controllers/ClientController'
import { asyncHandler } from './AsyncHandler'

const router = express.Router()

const clientRepository = new ClientDBRepository()
const clientUseCaseImpl = new ClientUseCaseImpl(clientRepository)
const clientController = new ClientController(clientUseCaseImpl)

router.get(
    '/',
    asyncHandler((req, res) => clientController.getUsers(req, res))
)
router.post(
    '/',
    asyncHandler((req, res) => clientController.postUser(req, res))
)

export default router
