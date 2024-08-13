# LocalTunnel API Demo

This repository demonstrates how to expose a local `Express.js` server to the internet using the localtunnel API. This is useful for sharing a locally running application for testing, demos, or remote access.

## Installation

```bash
pnpm install
```

## Running the application server

```bash
# production
pnpm start

# watch mode
pnpm start:dev
```

### Accessing the Server

After running the server, you should see a message in the console that looks like this:

```bash
Server is up and running at http://localhost:<YOUR_PORT>
Tunnel URL: https://some-random-subdomain.loca.lt
Tunnel Password and Public IP:
<YOUR_PUBLIC_IP>
```

You can access the server using the Tunnel URL provided by localtunnel. This URL can be shared with others, and they will be able to access your local server through it.

**_The tunnel password is the public IP of the computer running the localtunnel client (or your vpn's public IP if you're connected to one)._**

## LocalTunnel Quick Guide

_NOTE: The sections from here and below are not specific to this repository. They are solely focused on the general usage of the localtunnel CLI._

As it says on the official docs:
**_"Localtunnel exposes your localhost to the world for easy testing and sharing. No need to mess with DNS or deploy just to have others test out your changes."_**

One of the best things about localtunnel is the fact that it allows you to request and use a custom subdomain (using the `--subdomain` argument). And if the subdomain you have specified is not occupied, you will be able to use it.

### Running localtunnel without installation

```bash
npx localtunnel --port <YOUR_PORT>
```

### Global Installation

```bash
npm install -g localtunnel
```

### Basic Usage

```bash
lt --port <YOUR_PORT>
```

This will connect to the tunnel server, setup the tunnel, and tell you what URL to use for your testing. This URL will remain active for the duration of your session. You can restart your local server all you want, localtunnel is smart enough to detect this and reconnect once it is back.

### Arguments

- --subdomain
  request a named subdomain on the localtunnel server (default is random characters)

- --local-host
  proxy to a hostname other than localhost

### Using env variables

You can specify arguments via env variables like this:

```bash
PORT=3000 lt
```

#### Examples:

```bash
lt --subdomain mero-shop --port 3000

#Output:
#your url is: https://mero-shop.loca.lt
```

#### Important Notes:

The tunnel password is the public IP of the computer running the localtunnel client (or your vpn's public IP if you're connected to one).

You can check your Public IP at:
https://loca.lt/mytunnelpassword
OR
https://whatismyipaddress.com/

If you're running the localtunnel client on a remote computer, SSH into the remote computer and run one of the following:

```bash
curl https://loca.lt/mytunnelpassword
```

```bash
wget -q -O - https://loca.lt/mytunnelpassword
```
