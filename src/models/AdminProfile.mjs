import mongoose from "mongoose";

const adminProfileSchema = new mongoose.Schema({
    profileId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: true },
    department: {type: String},
    accessLevel: {type: Number, default: 1, min: 1, max: 5 },
    permissions: [String],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('AdminProfile', adminProfileSchema);