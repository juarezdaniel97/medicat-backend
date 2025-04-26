import Role from "../models/Role.mjs";
import { IRepository } from "../repository/IRepository.mjs";

class RoleServices extends IRepository {
    
    // Crear un rol nuevo
    async create(data) {
        try {
            const newRole = new Role(data);
            await newRole.save();
            return newRole;
        } catch (error) {
            throw new Error(`Error al crear el rol: ${error.message}`);
        }
    }

    // Actualizar un rol por ID
    async update(id, data) {
        try {
            const updatedRole = await Role.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            });
            if (!updatedRole) {
                throw new Error("Rol no encontrado");
            }
            return updatedRole;
        } catch (error) {
            throw new Error(`Error al actualizar el rol: ${error.message}`);
        }
    }

    // Eliminar un rol por ID
    async deleteById(id) {
        try {
            const deletedRole = await Role.findByIdAndDelete(id);
            if (!deletedRole) {
                throw new Error("Rol no encontrado");
            }
            return deletedRole;
        } catch (error) {
            throw new Error(`Error al eliminar el rol: ${error.message}`);
        }
    }
}

export default new RoleServices();
