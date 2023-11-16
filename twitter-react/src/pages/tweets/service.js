

import client from '../../api/client';

const tweetsUrl = '/api/tweets';

// creo una capita entre el cliente y el componente
// metodo
export const getLatestTweets = () => {
  return client.get(tweetsUrl);
};