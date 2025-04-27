import DoctorProfile from "../models/DoctorProfile.mjs";
import { IRepository } from "../repository/IRepository.mjs";

class DoctorProfileServices extends IRepository{

    async getAll(){
        return await DoctorProfile.find().populate('profileId');
    }

    async getFindById(id){
        const perfilCompleto = await DoctorProfile.findById(id).populate('profileId')  //findById(id) //.populate('profileId'); //userId - profileId
        return perfilCompleto;
    }

    async create(data){
        const doctorProfile = new DoctorProfile(data);
        return await doctorProfile.save();
    }

    async update(id, data){
        return await DoctorProfile.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteById(id){
        return await DoctorProfile.findByIdAndDelete(id);
    }
}

export default new DoctorProfileServices();