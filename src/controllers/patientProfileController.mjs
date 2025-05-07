import PatientProfileServices from "../services/PatientProfileServices.mjs";


export const getProfile = async (req, res) =>{
    try {
        const { id } = req.params;
                
        const profile  = await PatientProfileServices.getFindById(id);
        res.status(200).json(profile);

    } catch (error) {

        if (error.message.includes("Perfil no encontrado")) {
            return  res.status(404).json({ message: error.message });
        }

        res.status(500).json({ message: error.message });
    }
}

export const createProfile = async (req, res) =>{
    try {
        
        const { id } = req.user //saco el id del token
        const data = req.body; // datos desde front

        const datosUser = { userId: id,  ...data}
        
        const profile = await PatientProfileServices.create(datosUser);
        res.status(201).json(profile);

    } catch (error) {

         //Si el error es por duplicación de perfil
        if (error.message.includes("El perfil para este usuario ya existe.")) {
            return res.status(409).json({ message: error.message }); 
        }

        res.status(500).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) =>{
    try {
        const { id } = req.params;
        const updateProfile = await PatientProfileServices.update(id, req.body);
        res.status(200).json(updateProfile);

    } catch (error) {
        if (error.message.includes("Perfil no encontrado para actualizar")) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}

export const deleteProfile = async (req, res) =>{
    try {
        const { id } = req.params;
        const deleteProfile = await PatientProfileServices.deleteById(id);
        res.status(200).json({message: "Perfil Eliminado", deleteProfile});

    } catch (error) {
        
        if (error.message.includes("Perfil no encontrado para eliminar")) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}

export const listProfile = async (req, res) =>{
    try {
        const profiles = await PatientProfileServices.getAll();
        res.status(200).json(profiles);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAppointmentByPatient = async (req, res) =>{
    try {
        const { id } = req.params;
        const appointment = await PatientProfileServices.appointmentByPatientId(id);

        res.status(200).json(appointment);

    } catch (error) {
        if (error.message.includes("No hay citas para este paciente")) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
}
