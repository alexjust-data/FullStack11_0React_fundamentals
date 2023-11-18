import clsx from 'clsx';
//import './TweetsPage.css'
import styles from './TweetsPage.module.css'
import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';



function TweetsPage({ dark, onLogout }) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);

  //   const className = clsx('tweetsPage', { dark, light: !dark });
  const className = clsx(styles.tweetsPage, {
    [styles.dark]: dark,
    [styles.light]: !dark,
  });



  useEffect(() => {
    getLatestTweets().then( tweets => setTweets(tweets)).catch(error => {
      // Añade aquí el manejo de errores
      console.error("Error fetching tweets:", error);

      return function () {
        console.log('Exit');
      };

    });


  }, []); // El array de dependencias vacío indica que el efecto solo se ejecuta en el montaje
  
  
  
  const handleLogout = async () => {
    await logout();
    onLogout();
  }
  
    return (
    <div className={className}>
      <Button onClick={handleLogout}>LogOut</Button>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>
                  <span>{tweet.message}</span>
                </li>
                ))
        }
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;