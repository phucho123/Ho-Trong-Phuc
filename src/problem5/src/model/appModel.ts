import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, min: 18 },
    active: { type: Boolean, default: true },
});

const User = mongoose.model('User', userSchema);

export { User }
