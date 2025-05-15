import mongoose from "mongoose";

const medicoProfileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    firstName: {type: String}, 
    lastName: {type: String}, 
    specialty: { type: String },
    licenseNumber: {type: String, unique: true},
    consultationFee: {type: Number},
    availability: [{ dayOfWeek: Number, startTime: String, endTime: String }],
    profileType: { type: String, enum: ['patient', 'medico', 'admin'], required: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('MedicoProfile', medicoProfileSchema);