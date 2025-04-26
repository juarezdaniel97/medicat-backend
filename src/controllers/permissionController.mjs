import permissionServices from "../services/PermissionServices.mjs";


export const createPermission = async (req, res) => {
    try {
        const permission = await permissionServices.create(req.body);
        res.status(201).json(permission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await permissionServices.update(id, req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await permissionServices.deleteById(id);
        res.status(200).json({ message: "Permiso eliminado", deleted });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
