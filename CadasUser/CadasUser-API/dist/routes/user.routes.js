"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller"); // aqui vamos importar as funcoes criadas no controller.
const router = (0, express_1.Router)();
router.post("/", user_controller_1.createUser);
router.get("/:email", user_controller_1.getUser);
//router.delete("/:id",deleteUser )
exports.default = router;
