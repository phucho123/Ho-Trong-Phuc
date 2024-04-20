import { Router } from "express";
import { createUser, getAllUsers, findUserById, updateUser, deleteUser } from "../controller/appController.js";

const router = Router();

router.post("/create-user", createUser);
router.get("/get-all-users", getAllUsers);
router.get("/find-user/:id", findUserById);
router.post("/update-user/:id", updateUser);
router.post("/delete-user/:id", deleteUser);

export { router }