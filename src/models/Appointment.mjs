import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'DoctorProfile', required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'PatientProfile', required: true },
    appointmentDate: { type: Date, required: true },
    reason: { type: String }, // motivo del turno (opcional)
    status: { 
        type: String, 
        enum: ['scheduled', 'completed', 'cancelled'], 
        default: 'scheduled' 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Appointment', appointmentSchema);
