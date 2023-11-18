import Button from '../Button';
import {ReactComponent as Icon} from '../../assets/twitter.svg';



function Header() {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </header>
    );
}

export default Header;

