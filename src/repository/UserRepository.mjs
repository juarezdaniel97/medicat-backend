import User from "../models/User.mjs";
import { IRepository } from "./IRepository.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class UserRepository extends IRepository {

    async create(datos){
        try {
            const user = new User(datos);
            await user.save();

        } catch (error) {
            throw new Error("Error al crear un usuario: ", error);   
        }
    }

    async register(data){
        /*
            1. Validaciones de username (validator)
                - Username debe ser un string
                - username debe tener al menos 3 caracteres
                - password debe contener letras y numeros
                - password debe tener al menos 6 caracteres
        */

        const exitingUser = await User.findOne({ username: data.username})
        
        if (exitingUser) {
            throw new Error("El usuario ya existe");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)

        const newUser = new User({
            ...data,
            password: hashedPassword
        });

        await newUser.save();

        const userResponse = newUser.toObject();

        delete userResponse.password;

        const token = this.generateToken(userResponse);
    
        return {user: userResponse, token}
    }

    async login(username, password) {
        const user = await User.findOne({username});
        
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("¡El Usuario y/o Contraseña es incorrecto!");
        }

        const userResponse = user.toObject();
        delete userResponse.password;

        //Generar un nuevo token
        const token = this.generateToken(user);
        return { user: userResponse, token}
    }

    generateToken(user){
        return jwt.sign({ id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '24h'})
    }
}

export default new UserRepository();