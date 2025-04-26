import ProfileServices from "../services/ProfileServices.mjs"


export const getProfile = async (req, res) =>{
    try {
        const { id } = req.params;
                
        const profile  = await ProfileServices.getFindById(id);
        res.status(200).json(profile);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createProfile = async (req, res) =>{
    try {
        const data = req.body;
        const profile = await ProfileServices.create(data);
        res.status(201).json(profile);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) =>{
    try {
        const { id } = req.params;
        const updateProfile = await ProfileServices.update(id, req.body);
        res.status(200).json(updateProfile);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProfile = async (req, res) =>{
    try {
        const { id } = req.params;
        const deleteProfile = await ProfileServices.deleteById(id);
        res.status(200).json({message: "Perfil Eliminado", deleteProfile});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const listProfile = async (req, res) =>{
    try {
        const profiles = await ProfileServices.getAll();
        res.status(200).json(profiles);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
