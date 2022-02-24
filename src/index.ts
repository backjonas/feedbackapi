import app from './app';
import http from 'http';
import {createConnection} from 'typeorm';

const server = http.createServer(app);

const PORT = process.env.API_PORT || 5000;
createConnection().then(() => {
  server.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
  });
}).catch((error => {
  console.log(`Error starting the server: ${error}`);
}));
