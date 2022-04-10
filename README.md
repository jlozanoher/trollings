# Example APP using React.js, Node.js, Express and Socket.io

This application is a simple video game, in which users are notified with different missions to complete. These missions are generated on the server, as well as the villains to overthrow. When a mission is successful or unsuccessful, it is the server who notifies, and proposes a new mission.

## Installation, Run and Test

Nodejs (tested in v16.14.0) is required in order to run and build the project.

** For changing the server address, modify the `.env` file **

- `yarn install`
- `yarn start`
- `yarn test`

### Running The Server

The server has been developed with Node.js and Expresss, you can find it here [https://github.com/jlozanoher/trollings-server](https://github.com/jlozanoher/trollings-server).

Follow the instructions in order to run the server.

### Tools and technologies

- Typescript: main language used
- React.js: The javaScript library for building the interface
- useState and Provider for State management
- Styled components: Styling the app
- Socket.io for communicating with server via web sockets

### Testing

It was used @testing-library/react for testing purposes. The principal features were tested using integration tests, where a group of functionalities were tested together, like timer time waiting, clicks on buttons, etc.

for running tests:

- `yarn test`

### Continuous integration

Github actions is used for building and testing using different nodejs versions every time a new commit is made.
