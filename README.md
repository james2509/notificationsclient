## Notifications Basic Client (React)
The Notifications microservice manages user notifications. It responds to system wide events and depending on the type of event it will generate a new user notification and store it in its store.

When a user logs in, the user will fetch all of their notifications. A socket is opened between the notifications service and the user’s browser, which allows the notifications service to push new notifications to a user during their session.

## Setup
The Notifications Basic Client was built with VS Code and boostrapped with Create React App. 

If the Notifications Micro service project is running in debug from Visual Studio using the settings stored in the project folder it will be running on URL http://localhost:50506. If this has been changed or deployed then the URL for the socket connection will need to be changed in Components/NotificationsPage.js before running the client.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
