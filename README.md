LobbyApp Frontend
======

[See it live](http://lobbyapp.frontend.foundersfactory.com.s3-website-eu-west-1.amazonaws.com/)

Website for LobbyApp built with react.

## React
The react build is done using webpack.
There is only one webpack.config which handles both development, production and staging.

The default compilation is for dev, which is your local environment.
Apart from different bits in the compilation all the variables that are different for different stages are in app/config

To create the build just type in the console (is going to use local backend from lobbyapp.backend):
`npm start`

To create the build and use the server backend just type in the console:
`npm run design`

## Manual Deployment
Manual Deployment is defined in the gulp file at the root. The ENV variable is already set by the gulpfile.

To deploy for production:
`gulp publish`

## Branches
- master: this is the production code.
- development: use this branch to modify the code.
