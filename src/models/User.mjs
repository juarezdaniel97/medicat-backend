import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.model('User', userSchema)
