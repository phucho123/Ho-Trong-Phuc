var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../model/appModel.js";
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new User(req.body);
        newUser.save();
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const findUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(req.params.id);
        if (user)
            res.status(200).json(user);
        else
            res.status(400).json("User not exists");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        }, { new: true });
        if (user)
            res.status(200).json(user);
        else
            res.status(400).json("User doesn't exists");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findByIdAndDelete(req.params.id);
        if (user)
            res.status(200).json(user);
        else
            res.status(400).json("Can't delete user");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
