import express from 'express'
import { ClientUseCase } from '../../../core/application/usecases/ClientUseCase'
import { ClientRepository } from '../../driven/infra/dbRepositories/ClientRepository'
import { ClientController } from '../controllers/ClientController'

const router = express.Router()

const clientRepository = new ClientRepository()
const clientUseCase = new ClientUseCase(clientRepository)
const clientController = new ClientController(clientUseCase)

router.get('/', (req, res) => clientController.getUser(req, res))
router.post('/', (req, res) => clientController.postUser(req, res))

export default router
