
import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';
import Layout from '../../components/layout/Layout';



function TweetsPage(props) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then( tweets => setTweets( tweets )).catch(error => {
      // Añade aquí el manejo de errores
      console.error("Error fetching tweets:", error);

      return function () {
        console.log('Exit');
      };
    });

  }, []); // El array de dependencias vacío indica que el efecto solo se ejecuta en el montaje
  
    return (
      <Layout title="What´s going on ..." {...props}>
        <div className="TweetPage">
          {tweets.length ? <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
                              {tweets.map(tweet => (
                                <li key={tweet.id}>
                                  <span>{tweet.message}</span>
                                </li>
                              ))}
                            </ul> : <Button $variant="primary">Be the firts one...</Button>
          }
        </div>
      </Layout>
    );
}

// lo exporto
export default TweetsPage;