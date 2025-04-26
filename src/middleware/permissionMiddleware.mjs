
export const authorize = (requiredPermissions) => {
    return (req, res, next) => {
        const userPermissions = req.user.role.permissions.map(p => p.name);

        const hasPermission = requiredPermissions.every(p => userPermissions.includes(p));

        if (!hasPermission) {
            return res.status(403).json({ message: "No tienes permisos suficientes" });
        }

        next();
    };
};

// exports.hasPermission = (requiredPermission) => {
//     return async (req, res, next) => {
//         try {
//             if (!req.user) {
//                 return res.status(401).json({ message: 'No autenticado' });
//             }

//             // Obtener usuario con rol y permisos populados
//             const user = await User.findById(req.user.id)
//                 .populate({
//                     path: 'role',
//                     populate: {
//                         path: 'permissions'
//                     }
//                 });
                

//             const hasPermission = user.role.permissions.some(
//                 permission => permission.name === requiredPermission
//             );

//             if (!hasPermission) {
//                 return res.status(403).json({ 
//                     message: 'No tienes permiso para realizar esta acción' 
//                 });
//             }

//             next();
//         } catch (error) {
//             next(error);
//         }
//     };
// };
