import { IRepository } from "../repository/IRepository.mjs";
import MedicoProfile from "../models/MedicoProfile.mjs";

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
        const profile = await MedicoProfile.findOne({ userId: id }).populate('userId', 'username email');

        if (!profile) {
            throw new Error("Perfil de medico no encontrado");
        }
        return profile;
    }

    async getAll(){
        return await MedicoProfile.find().populate('userId', 'email');
    }

}

export default new MedicoProfileServices();