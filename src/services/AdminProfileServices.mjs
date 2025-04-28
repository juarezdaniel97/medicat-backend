import AdminProfile from "../models/AdminProfile.mjs";
import { IRepository } from "../repository/IRepository.mjs";


class AdminProfileSercives extends IRepository{
    
    async create(data){
        const existingProfile = await AdminProfile.findOne({ profileId: data.profileId });

        if (existingProfile) {
            throw new Error("Ya existe un perfil de administrador para este usuario.");
            
        }

        const admin = new AdminProfile(data);
        return await admin.save();
    }

    async update(id, data){
        const updatedAdminProfile = await AdminProfile.findByIdAndUpdate(
            id, 
            { ...data, updatedAt: Date.now() }, 
            { new: true }
        );
        if (!updatedAdminProfile) {
            throw new Error("Perfil de administrador no encontrado");
        }
        return updatedAdminProfile;
    }

    async deleteById(id){
        const deletedAdminProfile = await AdminProfile.findByIdAndDelete(id);

        if (!deletedAdminProfile) {
            throw new Error("Perfil de administrador no encontrado para eliminar");
        }
        return deletedAdminProfile;
    }

    async getFindById(id){
        const adminProfile = await AdminProfile.findById(id).populate('profileId');

        if (!adminProfile) {
            throw new Error("Perfil de administrador no encontrado");
        }
        return adminProfile;
    }

    async getAll(){
        return await AdminProfile.find().populate('profileId');
    }
}

export default new AdminProfileSercives();