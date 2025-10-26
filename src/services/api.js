//funcion que conecta al backend, debe ser anonima

export const obtenerUsuarios = async () => {
    
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