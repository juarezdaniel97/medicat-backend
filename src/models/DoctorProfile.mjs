import mongoose from "mongoose";

const doctorProfileSchema = new mongoose.Schema({

    profileId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: true },
    specialtyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
    licenseNumber: {type: String, unique: true},
    consultationFee: {type: Number},
    availability: [{ dayOfWeek: Number, startTime: String, endTime: String }],
    rating: { average: {type: Number, default: 0}, count: {type: Number, default: 0} },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('DoctorProfile', doctorProfileSchema);