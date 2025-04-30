import Profile from "../models/Profile.mjs";
import { IRepository } from "../repository/IRepository.mjs";

class ProfileService extends IRepository{
    
    async getAll(){
        try {
            const profiles = await Profile.find();
            return profiles;

        } catch (error) {
            throw new Error(`Error al listar perfiles: ${error.message}`);
        }
    }
    
    async create(data){
        try {

            const existingProfile = await Profile.findOne({userId: data.userId});
            if (existingProfile) {
                throw new Error("El perfil para este usuario ya existe.");
            }

            const profile = new Profile(data);
            await profile.save();

            return profile;

        } catch (error) {
            throw new Error(`Error al crear el perfil: ${error.message}`);
        }
    }

    async getFindById(id){
        try {
            const profile = await Profile.findById(id)
            
            if (!profile) {
                throw new Error("Perfil no encontrado");
            }

            return profile;

        } catch (error) {
            throw new Error(`Error al obtener el perfil: ${error.message}`);
        }
    }

    async update(id, data){
        try {
            const profile = await Profile.findByIdAndUpdate(id, {...data, updatedAt: Date.now() }, {new: true})
            
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
            
            const profile = await Profile.findByIdAndDelete(id)
            
            if (!profile) {
                throw new Error("Perfil no encontrado para eliminar.");
            }

            return profile;
        } catch (error) {
            throw new Error(`Error al eliminar el perfil: ${error.message}`); 
        }
    }
}

export default new ProfileService();