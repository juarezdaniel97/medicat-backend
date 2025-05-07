import { IRepository } from "../repository/IRepository.mjs";
import DoctorProfile from "../models/DoctorProfile.mjs";

class MedicoProfileServices extends IRepository{

    async create(data){
        
        const existingProfile = await DoctorProfile.findOne({ userId: data.userId });

        if (existingProfile) {
            throw new Error("Ya existe un perfil de doctor para este usuario.");
        }
        const doctorProfile = new DoctorProfile(data);
        return await doctorProfile.save();
    }

    async update(id, data){
        
        //const doctorProfile = await  DoctorProfile.findByIdAndUpdate(id, data, { new: true });
        const doctorProfile = await DoctorProfile.findOneAndUpdate({ userId: id }, { ...data, updatedAt: Date.now() }, { new: true });
        
        if (!doctorProfile) {
            throw new Error("Perfil de médico no encontrado");
        }
        return doctorProfile
    }

    async deleteById(id){
        //const deleted = await DoctorProfile.findByIdAndDelete(id)
        const deleted = await DoctorProfile.findOneAndDelete({ userId: id });
        if (!deleted) {
            throw new Error("Perfil de médico no encontrado");
        }

        return deleted
    }

    async getFindById(id){
        //const perfilCompleto = await DoctorProfile.findById(id).populate('profileId')
        const profile = await DoctorProfile.findOne({ userId: id }).populate('userId', 'username email');

        if (!profile) {
            throw new Error("Perfil de medico no encontrado");
        }
        return profile;
    }

    async getAll(){
        //return await DoctorProfile.find().populate('profileId');
        return await DoctorProfile.find().populate('userId', 'email');
    }

}

export default new MedicoProfileServices();