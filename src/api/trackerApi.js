import axios from 'axios';

// Run ngrok in the api solution and put the ngrok provided url here
export default axios.create({
  baseURL: 'https://4df9-68-192-53-189.ngrok-free.app',
});
