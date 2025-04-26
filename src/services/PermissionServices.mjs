import Permission from "../models/Permission.mjs";
import { IRepository } from "../repository/IRepository.mjs";

class PermissionServices extends IRepository {

    async create(data) {
        try {
            const permission = new Permission(data);
            await permission.save();
            return permission;
        } catch (error) {
            throw new Error(`Error al crear el permiso: ${error.message}`);
        }
    }

    async update(id, data) {
        try {
            const updatedPermission = await Permission.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            });
            if (!updatedPermission) {
                throw new Error("Permiso no encontrado");
            }
            return updatedPermission;
        } catch (error) {
            throw new Error(`Error al actualizar el permiso: ${error.message}`);
        }
    }

    async deleteById(id) {
        try {
            const deletedPermission = await Permission.findByIdAndDelete(id);
            if (!deletedPermission) {
                throw new Error("Permiso no encontrado");
            }
            return deletedPermission;
        } catch (error) {
            throw new Error(`Error al eliminar el permiso: ${error.message}`);
        }
    }
}

export default new PermissionServices();
