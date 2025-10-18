//funcion que conecte al backend, debe ser anonima

export const obtenerUsuarios = async () => { //debe ser asincrona para usar await
    
    try{
        //fetch solicitud rest a una url
        const data = await fetch("https://demo5015098.mockable.io/api/v1/users/all") //le decimos a la funcion que espere al fetch y mientras tanto siga corriendo el codigo

        if (!data.ok) throw new Error("Error al obtener el data del backend") //si la respuesta no es ok, lanza un error

        const usuarios = await data.json() //cuerpo del mensaje, se le pone await para que espere

        return usuarios //retorna los usuarios
    } catch (err) {
    
        console.log(err) //muestra el error en la consola

        return {total_users: 0, users: []} //retorna un objeto vacio en caso de error

    }
}