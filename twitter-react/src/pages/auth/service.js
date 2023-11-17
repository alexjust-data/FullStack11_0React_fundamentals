import client from '../../api/client';  // Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.


export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
    return client  
        .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
        .then(response => console.log(response));  // En caso de éxito, registra la respuesta en la consola.
}
