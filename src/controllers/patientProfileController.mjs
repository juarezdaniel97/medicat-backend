import PatientProfileServices from "../services/PatientProfileServices.mjs"


export const createPatient = async (req, res) => {
    try {
        const data = req.body;
        const patient = await PatientProfileServices.create(data);
        res.status(201).json(patient);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await PatientProfileServices.update(id, req.body);
        res.status(200).json(updated);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await PatientProfileServices.deleteById(id);
        res.status(200).json({ message: "Perfil de paciente eliminado", deleted });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getPatient = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await PatientProfileServices.getFindById(id);
        res.status(200).json(profile);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const listPatient = async (req, res) => {
    try {
        const list = await PatientProfileServices.getAll();
        res.status(200).json(list);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}