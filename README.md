# express-api-base

This project includes the boilerplate for a basic rest-api made in Node.JS with Express.

## Basic Requirements

1. Install Node.js (lts-version v12.18.3)
2. Install required dependencies by `yarn`

## Some scripts

Run `yarn build` to build js from typescript source.

Run `yarn test` to run tests.

Run `yarn start:prod` to start the server from the compiled folder.

Run `yarn start:dev` to start and automatically detect any source-code changes, restarting the server as well.

## App scaffolding

This is the suggested scaffolding for this project. You can take a look at:

```bash
.
├── public
│   └── index.html
├── src
│   ├── __tests__
│   │   └── acceptance
│   │       └── ...
│   ├── controllers
│   │   └── ...
│   ├── entities
│   │   └── ...
│   ├── application.ts    (App root and is where the application will be configured.)
│   ├── server.ts         (The starting point of your microservice)
├── DEVELOPING.md
├── README.md
├── package-lock.json
├── package.json          (Your application’s package manifest)
├── tsconfig.json         (The TypeScript project configuration)
└── tsconfig.tsbuildinfo
```

## Dependencies

- [winston](https://www.npmjs.com/package/winston) - Library used for logging with support for multiple transports.

## Deployment with docker

Work in progress ...

## Docs

[Express documentation](https://expressjs.com/es/)

## Credits

**Express API Base** is maintained by [Rootstrap](http://www.rootstrap.com) with the help of our [contributors](https://github.com/rootstrap/express-api-base/graphs/contributors).

[<img src="https://s3-us-west-1.amazonaws.com/rootstrap.com/img/rs.png" width="100"/>](http://www.rootstrap.com)