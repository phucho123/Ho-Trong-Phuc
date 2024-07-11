import { Router } from "express";
import { createUser, getAllUsers, findUserById, updateUser, deleteUser, getUserBy } from "../controller/appController.js";

const router = Router();

router.post("/create-user", createUser); //Create a resource
router.get("/get-all-users", getAllUsers); //List all resources
router.get("/get-users-by", getUserBy); //List resources with basic filters (use query ?name=abc&&age=2x)
router.get("/find-user/:id", findUserById); //Get details of a resource
router.post("/update-user/:id", updateUser); //Update resource details
router.post("/delete-user/:id", deleteUser); //Delete a resource

export { router }