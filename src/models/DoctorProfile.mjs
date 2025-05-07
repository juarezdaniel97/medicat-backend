import mongoose from "mongoose";

const doctorProfileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    // profileId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: true },
    firstName: {type: String}, //agregue
    lastName: {type: String}, //agregue
    specialty: { type: String },
    licenseNumber: {type: String, unique: true},
    consultationFee: {type: Number},
    availability: [{ dayOfWeek: Number, startTime: String, endTime: String }],
    profileType: { type: String, enum: ['patient', 'medico', 'admin'], required: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('DoctorProfile', doctorProfileSchema);