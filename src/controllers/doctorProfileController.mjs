import DoctorProfileServices from "../services/DoctorProfileServices.mjs";


export const getDoctor = async (req, res) => {
    try {

        const { id } = req.params;
        const doctorProfile = await DoctorProfileServices.getFindById(id);
        res.status(200).json(doctorProfile);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createDoctor = async (req, res) => {
    try {
        const data = req.body;

        const doctorProfile = await DoctorProfileServices.create(data);
        res.status(201).json(doctorProfile)

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatedoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updateDoctor = await DoctorProfileServices.update(id, data);
        res.status(200).json(updateDoctor);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteDoctor = await DoctorProfileServices.deleteById(id);
        res.status(200).json({ message: "Perfil de doctor eliminado", deleteDoctor });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const listDoctor = async (req, res) => {
    try {
        const doctorProfiles = await DoctorProfileServices.getAll()
        res.status(200).json(doctorProfiles);

    } catch (error) {
         //Si el error es por duplicación de perfil
        if (error.message.includes("Ya existe un perfil de doctor")) {
            return res.status(409).json({ message: error.message }); // 409 Conflict
        }

        //Otros errores
        res.status(400).json({ message: error.message });
    }
}