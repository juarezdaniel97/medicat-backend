import AdminProfile from "../models/AdminProfile.mjs";
import { IRepository } from "../repository/IRepository.mjs";


class AdminProfileSercives extends IRepository{
    
    async create(data){
        const existingProfile = await AdminProfile.findOne({ userId: data.userId });

        if (existingProfile) {
            throw new Error("Ya existe un perfil de administrador para este usuario.");
        }

        const admin = new AdminProfile(data);
        return await admin.save();
    }

    async update(id, data){
        //const updatedAdminProfile = await AdminProfile.findByIdAndUpdate(id, { ...data, updatedAt: Date.now() },{ new: true });
        const adminProfile = await AdminProfile.findOneAndUpdate({ userId: id }, { ...data, updatedAt: Date.now() },{ new: true });
        
        if (!adminProfile) {
            throw new Error("Perfil de administrador no encontrado");
        }
        return adminProfile;
    }

    async deleteById(id){
        const deleted = await AdminProfile.findOneAndDelete({ userId: id });
        
        if (!deleted) {
            throw new Error("Perfil de administrador no encontrado");
        }
        return deleted;
    }

    async getFindById(id){
        const profile = await AdminProfile.findOne({ userId: id }).populate('userId', 'username email');

        if (!profile) {
            throw new Error("Perfil de administrador no encontrado");
        }
        return profile;
    }

    async getAll(){
        return await AdminProfile.find().populate('userId', 'email');
    }
}

export default new AdminProfileSercives();