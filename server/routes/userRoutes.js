import express from "express";
import { getuserProfile, login, logout, register } from "../controller/userController.js";
import isAuthenticated from "../middlewares/Authinticate.js";


const router =express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logut").get(logout);
router.route("/profile").get(isAuthenticated,getuserProfile);

export default router;