
import { IRepository } from "../repository/IRepository.mjs";
import PatientProfile from "../models/PatientProfile.mjs";
import Appointment from "../models/Appointment.mjs";

class PatientProfileService extends IRepository{
    
    async getAll(){
        try {
            const profiles = await PatientProfile.find();
            return profiles;

        } catch (error) {
            throw new Error(`Error al listar perfiles: ${error.message}`);
        }
    }
    
    async create(data){
        try {

            const existingProfile = await PatientProfile.findOne({userId: data.userId});
            if (existingProfile) {
                throw new Error("El perfil para este usuario ya existe.");
            }

            const profile = new PatientProfile(data);
            return await profile.save();

        } catch (error) {
            throw new Error(`Error al crear el perfil: ${error.message}`);
        }
    }

    async getFindById(id){
        try {
            const profile = await PatientProfile.findOne({ userId: id }).populate('userId', 'email');
            if (!profile) {
                throw new Error("Perfil no encontrado");
            }

            return {profileUser: profile};

        } catch (error) {
            throw new Error(`Error al obtener el perfil: ${error.message}`);
        }
    }

    async update(id, data){
        try {
            //const profile = await Profile.findByIdAndUpdate(id, {...data, updatedAt: Date.now() }, {new: true})
            const profile = await PatientProfile.findOneAndUpdate({ userId: id }, { ...data, updatedAt: Date.now() }, { new: true });
            if (!profile) {
                throw new Error('Perfil no encontrado para actualizar.');
            }

            return profile;

        } catch (error) {
            throw new Error(`Error al actualizar el perfil: ${error.message}`);
        }
    }

    async deleteById(id){

        try {
            
            //const profile = await PatientProfile.findByIdAndDelete(id) //Modificar para eliminar por userId
            const profile = await PatientProfile.findOneAndDelete({ userId: id });
            if (!profile) {
                throw new Error("Perfil no encontrado para eliminar.");
            }

            return profile;
        } catch (error) {
            throw new Error(`Error al eliminar el perfil: ${error.message}`); 
        }
    }

    async appointmentByPatientId(id){
         //Pacientes pueden ver sus citas
        const appointment = await Appointment.find({ patientId: id }).populate('medicoId');
        
        if (!appointment) {
            throw new Error("No hay citas para este paciente.");
        } 

        const datosSimplificados = appointment.map((app) => ({
            id: app._id,
            medico: app.medicoId.firstName + " " + app.medicoId.lastName,
            especialidad: app.medicoId.specialty,
            precio: app.medicoId.consultationFee,
            fecha: app.appointmentDate,
            estado: app.status,
        }));

        return datosSimplificados;
    }
}

export default new PatientProfileService();