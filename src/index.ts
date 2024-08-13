import axios from 'axios';
import 'dotenv/config';
import express from 'express';
import HttpStatus from 'http-status-codes';
import localtunnel from 'localtunnel';

const PORT = process.env.SERVER_PORT ?? 7777;
const SUBDOMAIN = process.env.SUBDOMAIN;

const app = express();

app.get('/', (_req, res) => {
  return res.json({
    status: HttpStatus.OK,
    message: 'Hello from Localtunnel!',
  });
});

async function getMyPublicIp() {
  try {
    const response = await axios.get('https://loca.lt/mytunnelpassword');
    return response.data;
  } catch (error) {
    console.error('Error fetching public IP:', error);
  }
}

app.listen(PORT, async () => {
  console.info(`Server is up and running at http://localhost:${PORT}`);
  try {
    const tunnel = await localtunnel({
      port: Number(PORT),
      subdomain: SUBDOMAIN,
    });
    console.info(`Tunnel URL: ${tunnel.url}`);
    const publicIp = await getMyPublicIp();
    console.info(`Tunnel Password and Public IP:\n${publicIp}`);
    tunnel.on('close', () => {
      console.info('Tunnel closed');
    });
  } catch (error) {
    console.error('Error creating tunnel:', error);
  }
});
