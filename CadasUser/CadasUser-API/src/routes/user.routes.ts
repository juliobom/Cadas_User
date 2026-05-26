import { Router } from "express"

import {createUser, getUser, deleteUser} from "../controllers/user.controller";// aqui vamos importar as funcoes criadas no controller.

const router = Router()

router.post("/",createUser)
router.get("/", getUser)
router.delete("/:id",deleteUser )

export default router






