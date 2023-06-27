import express from "express";
import { ClientUseCase } from "../../../core/application/usecases/ClientUseCase";
import { ClientRepository } from "../../driven/infra/repositories/ClientRepository";
import { ClientController } from "../controllers/ClientController";

const router = express.Router();

const clientRepository = new ClientRepository();
const clientUseCase = new ClientUseCase(clientRepository);
const clientController = new ClientController(clientUseCase);

router.get("/", clientController.getUser.bind(clientController));

export default router;
