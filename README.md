# Wallet Linker

Lambda allows link wallet with additional information, like email. The project focused on the security of the process and data storage

## Requirements

* Docker - for local development required services
* NodeJS - check the version in `package.json`

## First Start Guide

Follow the guide in each app for setup correct `.env` configuration

Start all service by:

```bash
docker-compose up -d
```

Now all services running and ready for work,
you can change the code and they will be restarted automatically.

Install dependencies

```bash
npm i
```

Start development server

```bash
npm run dev
```

Open GraphQl Playground on [http://localhost:4000/](http://localhost:4000/?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAKIAeAhnAA4A2CAiroUcADpJFEwDO%2BPrDlyIBLMESFcoeBBRQIwAQRSSiCOBRG1VAMxF4eKAHJUEq2hUMnEq6hEMD2nYURQiU9VVwBGEMAVUAX0lgpFCOOBgUOREITgBVPjwACgASMDkKdCJE-ABhGTkEAEkkaiiAQgBKQWdpWXkAeSQEXJSM6Oz0zJqnFz0DY1MvdU1tZy4LK2HnUMCQABoQADcKPBEKb3oeDBA%2BiXBMtgxal2PRrWPs4-lDAAEKAHMKADooCDhjha9jgembE7HCi0agACwoXx%2BICmQwB1xA3gQ0WOIQ480CQA)

## Test

Run tests

```bash
npm run test
```

## Deployment

To deploy, you need [install flyctl](https://fly.io/docs/hands-on/install-flyctl/) and login using `fly auth login`

To deploy this project run

```bash
  yarn deploy
```

### Next steps

* Run `fly status` - show the status of the application instances.
* Run `fly apps open` - open your browser and direct it to your app.

## Made by Eonian

[Eonian](https://www.github.com/octokatherine) internal project. We trying to be as transparent as possible with our users, as part of this practice we publishing this project.
You can also use it for own development. Any contributions and suggestions are welcome!

## Contributing

Contributions are always welcome!

Create new issues or contact us in [Discord](https://discord.gg/8mcUPPYJmj) for any questions!

## Architecture

We have two routes in graphql
- requires authnentication - see which emails linked for your wallet, and add or remove existing links
- guest route - check if wallet have linked email, get preview "aaa****@g***l.com". Received only wallet address

### Authnetication

Works like JWT, but based on signature.

* Client signs payload with private key
* Client sends signature and payload to the server
* Server verifies the signature and check payload and signature expiration and wallet address
* If all checks passed, request allowed

Signature for each request is required, and it contains
* Action (ex. `link_wallet for eonian with email "aaz@b.com"`)
* wallet address
* time of creation (valid for 5 minutes)
