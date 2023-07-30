import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter = Router()

userRouter.post("/", userController.insertUser)
userRouter.get("/:id", userController.getUser)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.updateUser)

export {
    userRouter
}