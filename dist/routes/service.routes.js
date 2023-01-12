"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_controllers_1 = require("../controllers/service.controllers");
const router = (0, express_1.Router)();
router.get("/allService", service_controllers_1.getAllService);
exports.default = router;
