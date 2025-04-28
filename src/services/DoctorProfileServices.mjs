import DoctorProfile from "../models/DoctorProfile.mjs";
import { IRepository } from "../repository/IRepository.mjs";

class DoctorProfileServices extends IRepository{

    async create(data){
        
        const existingProfile = await DoctorProfile.findOne({ profileId: data.profileId });
        
        if (existingProfile) {
            throw new Error("Ya existe un perfil de doctor para este usuario.");
        }
        const doctorProfile = new DoctorProfile(data);
        return await doctorProfile.save();
    }

    async update(id, data){
        const doctorProfile = await  DoctorProfile.findByIdAndUpdate(id, data, { new: true });
        if (!doctorProfile) {
            throw new Error("Perfil de doctor no encontrado");
        }
        return doctorProfile
    }

    async deleteById(id){
        const deleted = await DoctorProfile.findByIdAndDelete(id)
        
        if (!deleted) {
            throw new Error("Perfil de doctor no encontrado");
        }

        return deleted
    }

    async getFindById(id){
        const perfilCompleto = await DoctorProfile.findById(id).populate('profileId')  //findById(id) //.populate('profileId'); //userId - profileId
        
        if (!perfilCompleto) {
            throw new Error("Perfil de doctor no encontrado");
        }
        return perfilCompleto;
    }

    async getAll(){
        return await DoctorProfile.find().populate('profileId');
    }

}

export default new DoctorProfileServices();