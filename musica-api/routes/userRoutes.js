import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

// Endpoint para cadastrar um usuario

userRoutes.post("/user", userController.createUser);

// Endpoint para autenticar um usuario

userRoutes.post("/auth", userController.loginUser);

export default userRoutes;
