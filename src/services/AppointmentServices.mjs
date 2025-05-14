import Appointment from "../models/Appointment.mjs"
import { IRepository } from "../repository/IRepository.mjs"


class AppointmentServices extends IRepository{

    async create(data){
        //Los pacientes pueden crear citas sin tener un perfil de administrador
        const appointment = new Appointment(data);
        return await appointment.save();
    }

    async update(id, data){
        //Admin y Medico pueden actualizar citas
        return await Appointment.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteById(id){
        //Admin eliminar citas
        return await Appointment.findByIdAndDelete(id);
    }

    async getFindById(id){
        //Pacientes pueden ver sus citas
        //Medicos pueden ver sus citas
        return await Appointment.findById(id);
    }

    async getAll(){
        //Admin pueden ver todas las citas
        return await Appointment.find();
    }

    
    //esto iria en medicoProfile
    async appointmentByMedicoId(medicoId){
        //Medicos pueden ver sus citas
        return await Appointment.find({ medicoId }).populate('doctorId').populate('patientId');
    }
}

export default new AppointmentServices();