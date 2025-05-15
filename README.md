# Medicat API

Medicat API es una REST API diseñada para gestionar consultas médicas de manera eficiente. Permite:

- 📅 A los **pacientes**, solicitar turnos médicos.
- 🩺 A los **médicos**, consultar y gestionar sus turnos.
- 🛠️ Al **administrador**, acceder a todas las funcionalidades del sistema: gestionar usuarios, turnos y más.

El backend está desarrollado con Node.js y Express, utilizando MongoDB como base de datos, y Twilio para el envío de notificaciones.

## 🚀 Tecnologías utilizadas

Medicat API está construida con el siguiente stack tecnológico:

### 🔧 Backend
- **Node.js** – Entorno de ejecución JavaScript del lado del servidor.
- **Express.js** – Framework minimalista para construir la API REST.
- **MongoDB (Atlas)** – Base de datos NoSQL en la nube para almacenar la información médica.
- **Mongoose** – ODM (Object Data Modeling) para interactuar con MongoDB usando objetos JavaScript.

### 🔐 Seguridad y autenticación
- **bcryptjs** – Para encriptar contraseñas.
- **jsonwebtoken (JWT)** – Para autenticar y autorizar usuarios mediante tokens.

### 🌐 Comunicación y restricciones
- **cors** – Middleware para habilitar solicitudes desde dominios permitidos.
- **dotenv** – Para manejar variables de entorno de forma segura.

### 📲 Notificaciones
- **Twilio** – Para el envío de mensajes SMS relacionados con los turnos médicos.



## 📁 Estructura del proyecto
![image](https://github.com/user-attachments/assets/1080d890-94f1-40a4-8f40-5c1430e447e1)

> 📝 *Esta estructura modular permite mantener el código limpio y organizado, separando los distintos componentes del backend en directorios específicos.*


## 🔐 Variables de entorno (.env)

Para que Medicat API funcione correctamente, es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Conexión a MongoDB Atlas
MONGODB_URI=tu_string_de_conexion

# Clave secreta para firmar los tokens JWT
JWT_SECRET=tu_clave_secreta

# Dominios permitidos para CORS (separados por comas)
ALLOWED_ORIGINS=http://localhost:3000,https://tu-frontend.com

# Configuración de Twilio para envío de SMS
TWILIO_ACCOUNT_SID=tu_account_sid
TWILIO_AUTH_TOKEN=tu_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

## 🛠️ Instalación y ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/medicat-api.git
cd medicat-api
```

### 2. Instalar las dependencias
```bash
npm install
```
### 3.  Crear y configurar el archivo .env
```bash
Asegurate de crear un archivo .env en la raíz del proyecto con las variables de entorno mencionadas anteriormente.
```

### 4.  Iniciar el servidor
```bash
cd src
node app.mjs
```

## 👨‍💻 Autoría y contexto académico

Este proyecto fue desarrollado por **Daniel Juárez** como **Trabajo Final** de la **Diplomatura en Desarrollo Full Stack**.

📍 La diplomatura fue dictada por el **Nodo Tecnológico de Catamarca** en conjunto con la **Facultad de Ciencias Exactas y Tecnologías** de la **Universidad Nacional de Catamarca (UNCA)**.

> 🎓 El propósito de este proyecto es demostrar los conocimientos adquiridos durante la formación, aplicando tecnologías modernas de desarrollo backend en un caso de uso real: la gestión de turnos médicos.

