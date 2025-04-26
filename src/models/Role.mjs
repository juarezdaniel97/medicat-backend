import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    permission: [{type: mongoose.Schema.Types.ObjectId, ref: 'Permission'}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('Role', roleSchema);