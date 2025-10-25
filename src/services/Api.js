//funcion que conecte al backend, debe ser anonima

export const obtenerUsuarios = async () => { //debe ser asincrona para usar await
    
    try{
        const data = await fetch("https://demo5015098.mockable.io/api/v1/users/all")

        if (!data.ok) throw new Error("Error al obtener el data del backend")

        const usuarios = await data.json()

        return usuarios
    } catch (err) {
    
        console.log(err)

        return {total_users: 0, users: []}

    }
}