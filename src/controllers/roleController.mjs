import RoleServices from "../services/RoleServices.mjs";

export const createRole = async (req, res) => {
    try {
        const role = await RoleServices.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRole = await RoleServices.update(id, req.body);
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await RoleServices.deleteById(id);
        res.status(200).json({ message: "Rol eliminado", deleted });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
