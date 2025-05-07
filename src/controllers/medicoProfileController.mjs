import MedicoProfileServices from "../services/MedicoProfileServices.mjs";


export const getMedico = async (req, res) => {
    try {

        const { id } = req.params;
        const doctorProfile = await MedicoProfileServices.getFindById(id);
        res.status(200).json(doctorProfile);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createMedico = async (req, res) => {
    try {
        const { id } = req.user //saco el id del token
        
        const data = req.body;
        const datosUser = { userId: id, ...data } //agrego el id al body para crear el perfil

        const doctorProfile = await MedicoProfileServices.create(datosUser);
        res.status(201).json(doctorProfile)

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateMedico = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updateDoctor = await MedicoProfileServices.update(id, data);
        res.status(200).json(updateDoctor);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteMedico = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteDoctor = await MedicoProfileServices.deleteById(id);
        res.status(200).json({ message: "Perfil de médico eliminado exitosamente", deleteDoctor });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const listMedico = async (req, res) => {
    try {
        const doctorProfiles = await MedicoProfileServices.getAll()
        res.status(200).json(doctorProfiles);

    } catch (error) {
         //Si el error es por duplicación de perfil
        if (error.message.includes("Ya existe un perfil de médico para este usuario.")) {
            return res.status(409).json({ message: error.message }); // 409 Conflict
        }

        //Otros errores
        res.status(400).json({ message: error.message });
    }
}

export const getAppointmentByPatient = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await MedicoProfileServices.getAppointmentByPatient(id);
        res.status(200).json(appointment);

    } catch (error) {
        if (error.message.includes("No tienes turnos designados")) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}