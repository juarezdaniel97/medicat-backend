import { IRepository } from "../repository/IRepository.mjs";
import MedicoProfile from "../models/MedicoProfile.mjs";
import Appointment from "../models/Appointment.mjs";

class MedicoProfileServices extends IRepository{

    async create(data){
        
        const existingProfile = await MedicoProfile.findOne({ userId: data.userId });

        if (existingProfile) {
            throw new Error("Ya existe un perfil de médico para este usuario.");
        }
        const doctorProfile = new MedicoProfile(data);
        return await doctorProfile.save();
    }

    async update(id, data){;
        const doctorProfile = await MedicoProfile.findOneAndUpdate({ userId: id }, { ...data, updatedAt: Date.now() }, { new: true });
        
        if (!doctorProfile) {
            throw new Error("Perfil de médico no encontrado");
        }
        return doctorProfile
    }

    async deleteById(id){
        const deleted = await MedicoProfile.findOneAndDelete({ userId: id });
        if (!deleted) {
            throw new Error("Perfil de médico no encontrado");
        }

        return deleted
    }

    async getFindById(id){

        try {
            const profile = await MedicoProfile.findOne({ userId: id }).populate('userId', 'email');

                if (!profile) {
                    throw new Error("Perfil de medico no encontrado");
                }
            return {profileUser: profile};
        } catch (error) {
            throw new Error(`Error al obtener el perfil: ${error.message}`);
        }
        
    }

    async getAll(){
        return await MedicoProfile.find().populate('userId', 'email');
    }

    async getAppointmentByPatient(id){
        const appointment = await Appointment.find({ medicoId: id }).populate({path: 'patientId', populate: {path: 'userId', select: 'email'}});
        
        if (!appointment) {
            throw new Error("No tienes turnos designados.");
        }

        const datosSimplificados = appointment.map(cita => ({
            turnoId: cita._id,
            fecha: cita.appointmentDate,
            estado: cita.status,
            motivo: cita.reason,
            paciente: {
                nombreCompleto: `${cita.patientId.firstName} ${cita.patientId.lastName}`,
                email: cita.patientId.userId.email,
                telefono: cita.patientId.phoneNumber,
                fechaNacimiento: cita.patientId.dateOfBirth,
                direccion: cita.patientId.address,
                genero: cita.patientId.gender
            }
        }));
        return datosSimplificados;
    }

}

export default new MedicoProfileServices();