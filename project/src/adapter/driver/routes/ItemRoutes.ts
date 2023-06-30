import { Router } from 'express'
import ItemService from '../../../core/application/services/ItemService'
import ItemDBRepository from '../../driven/infra/dbRepositories/ItemDBRepository'
import ItemController from '../controllers/ItemController'

const router = Router()

const itemDBRepository = new ItemDBRepository()
const itemService = new ItemService(itemDBRepository)
const itemController = new ItemController(itemService)

router.post('/', (req, res) => itemController.postItem(req, res))
router.get('/', (req, res) => itemController.getAll(req, res))

export default router
