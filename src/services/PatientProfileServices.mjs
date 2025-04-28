import PatientProfile from "../models/PatientProfile.mjs";
import { IRepository } from "../repository/IRepository.mjs";


class PatientProfileServices extends IRepository{

    async create(data){
        const existingProfile = await PatientProfile.findOne({ profileId: data.profileId });
        if (existingProfile) {
            throw new Error("Ya existe un perfil de paciente para este usuario.");
        }

        const patientProfile = new PatientProfile(data);
        return await patientProfile.save();
    }

    async update(id, data) {
        const updatedProfile = await PatientProfile.findByIdAndUpdate(id, data, { new: true });

        if (!updatedProfile) {
            throw new Error("Perfil de paciente no encontrado");
        }
        return updatedProfile;
    }

    async deleteById(id){
        const deleted = await PatientProfile.findByIdAndDelete(id);
        if (!deleted) {
            throw new Error("Perfil de paciente no encontrado");
        }
        return deleted;
    }

    async getFindById(id){

        const profile = await PatientProfile.findById(id).populate('profileId');;
        if (!profile) {
            throw new Error("Perfil de paciente no encontrado");
        }
        return profile;
    }

    async getAll(){
        const profiles = await PatientProfile.find().populate('profileId');

        if (!profiles) {
            throw new Error("Lista de pacientes vacias");
        }
        return profiles
    }
}

export default new PatientProfileServices();