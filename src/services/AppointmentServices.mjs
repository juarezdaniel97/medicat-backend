import Appointment from "../models/Appointment.mjs"
import { IRepository } from "../repository/IRepository.mjs"


class AppointmentServices extends IRepository{

    async create(data){
        const appointment = new Appointment(data);
        return await appointment.save();
    }

    async update(id, data){
        return await Appointment.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteById(id){
        return await Appointment.findByIdAndDelete(id);
    }

    async getFindById(id){
        return await Appointment.findById(id)
            .populate('doctorId')
            .populate('patientId');
    }

    async getAll(){
        return await Appointment.find()
            .populate('doctorId')
            .populate('patientId');
    }
}

export default new AppointmentServices();