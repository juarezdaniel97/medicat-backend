import authServices from "../services/AuthServices.mjs";
import {renderMessageCRUD} from '../view/responseView.mjs'

export const registerUser = async (req, res) => {
    try {        
        const data = req.body; 
        
        const newUser = await authServices.register(data); 

        res.status(201).send(renderMessageCRUD('Usuario registrado exitosamente', newUser));

    } catch (error) {
        res.status(400).json({message: "Error al registrar el usuario", error: error.message})
    }

}

export const loginUser = async ( req, res) =>{
    try {
        const {email, password} = req.body

        const user = await authServices.login(email, password);
        res.json(user);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

export const getUser = async ( req, res) => {
    try {
        const { id } = req.params;
        
        const user = await authServices.getFindById(id);
        res.status(200).json(user);

    } catch (error) {

        if (error.message.includes("Usuario no encontrado")) {
            return  res.status(404).json({ message: error.message });
        }

        res.status(500).json({ message: error.message });
    }
}