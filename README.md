# Lil' ns8 user / event server

This is was from a starter typescript/node project https://github.com/JalpeshVadgama/minimum-nodejs-typescript-express" because that's not fun to do. My philosophy is only do what you need to do at least for this scenario and no db is needed as you already indicated so the data dies when the server dies.

- mocha was not added because this was not a requirement

## How to run this project:

To run this project first you need to run following command

```sh
    npm install          <= install all the npm Dependencies
    npm start            <= It will run on port 3000 if PORT not defined
```

## Routes

* /users (post) creates a user
* /events (post) creates event
* /events (get) list events

## License

???

## Future considerations

- Obviously this is a toy
- needs ssl
- should have some token-based auth (passport?)
- could have signing urls etc etc
- needs some db and using async calls etc
- pretty much depends on requirement but currently there isn't much there