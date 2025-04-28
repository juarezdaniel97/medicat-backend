import AppointmentServices from "../services/AppointmentServices.mjs";

export const createAppointment = async (req, res) => {
    try {
        const data = req.body;
        const appointment = await AppointmentServices.create(data);
        res.status(201).json(appointment);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
} 

export const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updated = await AppointmentServices.update(id,data);
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
} 

export const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AppointmentServices.deleteById(id);
        res.status(200).json({ message: "Perfil de paciente eliminado", deleted });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
} 

export const getAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const appointment = await AppointmentServices.getFindById(id);

        res.status(200).json(appointment);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 

export const listAppointment = async (req, res) => {
    try {
            const list = await AppointmentServices.getAll();
            res.status(200).json(list);
    
    } catch (error) {
            res.status(400).json({ message: error.message });
    }
} 
