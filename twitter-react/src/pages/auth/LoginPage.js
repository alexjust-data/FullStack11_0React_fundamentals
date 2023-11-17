import Button from '../../components/Button'
import { login } from './service';


function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });
    };


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <br/>
            <input type="password" name="password"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage