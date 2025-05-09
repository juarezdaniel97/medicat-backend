import { IRepository } from "../repository/IRepository.mjs";
import User from '../models/User.mjs';
import Role from '../models/Role.mjs'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthServices extends IRepository {
        
        async register(data){
            
            //Validar que el email y username no existan
            // const exitingUser = await User.findOne({  $or: [
            //     { email: data.email },
            //     { username: data.username }
            // ]})

            const exitingUser = await User.findOne({email: data.email});


            if (exitingUser) {
                throw new Error("El email ya existe en el sistema.");
            }
            
            const hashedPassword = await bcrypt.hash(data.password, 10)
            
            //Buscar el rol, si no lo mandan va por defecto el Paciente
            let roleId = data.roleId;            
            
            if (!roleId || roleId === undefined) {
                
                const defaultRole = await Role.findOne({name:"paciente"});
                
                if (!defaultRole) {
                    throw new Error("Rol Paciente no encontrado");
                }
                
                roleId = defaultRole._id;
            }



            const newUser = new User({
                ...data,
                password: hashedPassword,
                role: roleId 
            });
    
            await newUser.save();
    
            const userResponse = newUser.toObject();
    
            delete userResponse.password;
    
            const token = this.generateToken(userResponse);
        
            return {user: userResponse, token}
        }
    
        async login(email, password) {
            
            const user = await User.findOne({email}).populate('role', 'name');
            
            if (!user) {
                throw new Error("Usuario no encontrado");
            }
    
            const isValid = await bcrypt.compare(password, user.password);
    
            if (!isValid) {
                throw new Error("¡El Usuario y/o Contraseña es incorrecto!");
            }
    
            const userResponse = user.toObject();
            delete userResponse.password;
            delete userResponse.role.name
            
            //Generar un nuevo token
            const token = this.generateToken(user);
            return { user: userResponse, token}
        }
    
        async getFindById(id){
            try {
                const user = await User.findById(id).populate('role', 'name');

                if (!user) {
                    throw new Error("Usuario no encontrado");
                }

                const userResponse = user.toObject();
                delete userResponse.password;

                return {user: userResponse};
            } catch (error) {
                throw new Error(`Error al obtener el usuario: ${error.message}`);
            }
        }

        async update(id, data){
            const user = await User.findById(id);

            if (!user) {
                throw new Error("Usuario no encontrado");
            }

            //Actualizar el usuario
            const updatedUser = await User.findByIdAndUpdate(id, {...data, updatedAt: Date.now() }, {new: true});
            
            const userResponse = {
                id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
            }

            return {user: userResponse};
        }


        generateToken(user){
            return jwt.sign({ id: user._id, role: user.role.name}, process.env.JWT_SECRET, {expiresIn: '24h'})
        }
}

export default new AuthServices();