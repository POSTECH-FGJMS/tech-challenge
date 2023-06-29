import { Router } from 'express'
import ItemService from '../../../core/application/services/ItemService'
import ItemDBRepository from '../../driven/infra/dbRepositories/ItemDBRepository'
import ItemController from '../controllers/ItemController'

const router = Router()

const itemDBRepository = new ItemDBRepository()
const itemService = new ItemService(itemDBRepository)
const itemController = new ItemController(itemService)

router
    .post('/', async (req, res) => {
        try {
            const result = await itemController.postItem(req)
            res.json(result)
        } catch (error) {
            res.status(500).json({ error })
        }
    })
    .get('/', async (req, res) => {
        try {
            const result = await itemController.getAll()
            res.json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    })

export default router
