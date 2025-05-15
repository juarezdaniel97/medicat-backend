import TwilioServices from "../services/TwilioServices.mjs";

export const enviarSMS = async (req, res) =>{
    try {
        const {to, body } = req.body;
        
        const result = await TwilioServices.sendSMS(to,body);

        if (result.success) {

            return res.status(200).json(result);

        }else{

            return res.status(500).json(result);

        }
    } catch (error) {
        console.error('Error en el controlador sendSMS:', error);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor',
                error: error.message
            });
    }
}