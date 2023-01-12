"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.post("/users", user_controllers_1.createUser);
router.get("/users", user_controllers_1.getUsers);
router.get("/prueba", user_controllers_1.prueba);
exports.default = router;
