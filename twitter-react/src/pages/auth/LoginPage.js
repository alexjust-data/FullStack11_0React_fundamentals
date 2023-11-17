import Button from '../../components/Button'
import { login } from './service';
import { useState } from 'react';


function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('Alex');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });

        onLogin();
    };

    const handleUsernameChange = (event) => {
        // vemos que tiene
        //console.log(event.target.value);
        setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

    // cada vez que el estado ambia y pasa por esta linea se está recalculando el estado
    const disabled = !(username && password);


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                onChange={handleUsernameChange} 
                value={username}/>
            <br/>
            <input 
                type="password" 
                name="password"
                onChange={handlePasswordChange}
                value={password}/>
            <br/>
            <Button type="sumbit" $variant="primary" disabled={disabled}>
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage