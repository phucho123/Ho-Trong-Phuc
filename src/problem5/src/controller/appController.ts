import { User } from "../model/appModel.js"

export const createUser = async (req: any, res: any) => {
    try {
        const newUser = new User(req.body);
        newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllUsers = async (req: any, res: any) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getUserBy = async (req: any, res: any) => {

    try {
        const query: {
            name?: string,
            age?: string
        } = {};
        if (req.query.name != undefined) query.name = req.query.name;
        if (req.query.age != undefined) query.age = req.query.age;
        const user = await User.find(query);
        if (user) res.status(200).json(user);
        else res.status(400).json("User not exists")
    } catch (err) {
        res.status(500).json(err);
    }
}

export const findUserById = async (req: any, res: any) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) res.status(200).json(user);
        else res.status(400).json("User not exists")
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateUser = async (req: any, res: any) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        }, { new: true })
        if (user) res.status(200).json(user);
        else res.status(400).json("User doesn't exists");
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteUser = async (req: any, res: any) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) res.status(200).json(user);
        else res.status(400).json("Can't delete user");
    } catch (err) {
        res.status(500).json(err);
    }
}