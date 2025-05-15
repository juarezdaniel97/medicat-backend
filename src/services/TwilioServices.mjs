import {config} from 'dotenv';
import twilio from 'twilio';

//dotenv.config();
config({path: '../.env'})

class TwilioServices{
    
    constructor(){
        this.accountSid = process.env.TWILIO_ACCOUNT_SID;
        this.authToken = process.env.TWILIO_AUTH_TOKEN;
        this.phoneNumber = process.env.TWILIO_PHONE_NUMBER;
        console.log('accountSid ->', process.env.TWILIO_ACCOUNT_SID);
        console.log('authToken ->', process.env.TWILIO_AUTH_TOKEN);
        console.log('phoneNumber ->', process.env.TWILIO_PHONE_NUMBER);
        
        // Inicializar el cliente de Twilio
        this.client = twilio(this.accountSid, this.authToken);
    }


    /**
   * Envía un mensaje SMS
   * @param {string} to - Número de teléfono del destinatario (formato: +123456789)
   * @param {string} body - Contenido del mensaje
   * @returns {Promise} - Promesa con el resultado del envío
   */

    async sendSMS(to, body){
        try {
            const message = await this.client.messages.create({
                body: body,
                from: this.phoneNumber,
                to:to
            });

            return{
                success: true,
                messageId: message.sid,
                message: "SMS enviado correctamente"
            }

        } catch (error) {
            console.error('Error al enviar SMS',error);
            return{
                success:false,
                error: error.message
            }
        }
    }
}

export default new TwilioServices();