import AdminProfileSercives from "../services/AdminProfileServices.mjs";


export const createAdmin = async (req, res) => {
    try {
        const { id } = req.user;
        const data = req.body;
        const datosUser = { userId: id, ...data } //agrego el id al body para crear el perfil

        const admin = await AdminProfileSercives.create(datosUser)
        res.status(201).json(admin);

    } catch (error) {
        
        if (error.message.includes("Ya existe un perfil de administrador")) {
            return res.status(409).json({ message: error.message }); // 409 Conflict
        }

        //Otros errores
        res.status(400).json({ message: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updated = await AdminProfileSercives.update(id, data);
        res.status(200).json(updated);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteAdmin = async (req, res) => {
    try {
            const { id } = req.params;
            const deleted = await AdminProfileSercives.deleteById(id);
            
            res.status(200).json({ message: "Perfil de administrador eliminado", deleted });
    
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}

export const getAdmin = async (req, res) => {
    try {
            const { id } = req.params;
            const profile = await AdminProfileSercives.getFindById(id);
            res.status(200).json(profile);
    
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
}

export const listAdmin = async (req, res) => {
    try {
            const list = await AdminProfileSercives.getAll();
            res.status(200).json(list);
    
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}