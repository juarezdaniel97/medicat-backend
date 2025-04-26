export class IRepository{

    getFindById(id){
        throw new Error("Método 'getFindById()' no implementado");
    }

    getAll(){
        throw new Error("Método 'getAll()' no implementado");
    }

    create(){
        throw new Error("Método 'create()' no implementado");
    }

    register(username, password){
        throw new Error("Método 'register()' no implementado");
    }

    login(username, password){
        throw new Error("Método 'register()' no implementado");
    }

    deleteById(){
        throw new Error("Método 'delete()' no implementado");
    }
    
    deleteByName(){
        throw new Error("Método 'delete()' no implementado");
    }

    update(id, data){
        throw new Error("Método 'update()' no implementado");
    }



}