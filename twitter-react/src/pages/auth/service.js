// Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.
import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../api/client'; 
import storage from '../../utils/storage';


export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
    return client  
        .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
        .then(({ accessToken }) => {
            setAuthorizationHeader(accessToken);
            storage.set('auth', accessToken) // llamaremos a la clave auth o token o lo que quieras
        }); 
};

export const logout = () => {
    return Promise.resolve().then(() => {
        removeAuthorizationHeader(); 
        storage.remove("auth");
    });
}
