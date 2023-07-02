import express from 'express'
import { ClientUseCaseImpl } from '../../../core/application/useCaseImpl/ClientUseCaseImpl'
import { ClientDBRepository } from '../../driven/infra/dbRepositories/ClientDBRepository'
import { ClientController } from '../controllers/ClientController'
import { asyncHandler } from './AsyncHandler'
import { CpfValidatorImpl } from '../../../core/application/validators/CpfValidator'
import { NameValidatorImpl } from '../../../core/application/validators/NameValidator'
import { EmailValidatorImpl } from '../../../core/application/validators/EmailValidator'

const router = express.Router()

const clientRepository = new ClientDBRepository()
const nameValidator = new NameValidatorImpl()
const emailValidator = new EmailValidatorImpl()
const cpfValidator = new CpfValidatorImpl()
const clientUseCaseImpl = new ClientUseCaseImpl(
    clientRepository,
    nameValidator,
    emailValidator,
    cpfValidator
)
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
