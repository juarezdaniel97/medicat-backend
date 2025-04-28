import mongoose from "mongoose";

const patientProfileSchema = new mongoose.Schema({
    profileId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: true },
    emergencyContact: { name: String, relationship: String, phoneNumber: String },
    healthInsurance: { provider: String, policyNumber: String },
    medicalHistory: {
        allergies: [String],
        chronicConditions: [String],
        currentMedications: [String]
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model('PatientProfile', patientProfileSchema);