import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    firsName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: String},
    dateOfBirth: {type: Date},
    gender: { type: String, enum: ['M', 'F', 'X'] },
    address: { street: String, city: String, zipCode: String },
    profileType: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('Profile', profileSchema);