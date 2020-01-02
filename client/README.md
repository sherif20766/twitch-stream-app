This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Twitch Stream App

To install run `npm install` in the client, api & rtmpserver folders respectively.

Navigate to the client folder and Run app in developer mode `npm start` then access by navigating to http://localhost:3000/ from your web browser.

Next, navigate to the api folder and start up the JSON-server (CRUD) with `npm-start`. Finally from the rtmpserver folder, `npm start` to run the Node Media Server (RTMP).

Please note that it is necessary for all three servers to be up and running for the application to fully function.

## What does it do?

Twitch clone full stack live streaming application with Google OAuth 2.0 sign in.

The application allows a user to browse and view created streams.

Signing in grants the user the ability to create, edit, delete as well as broadcast live streaming videos, using Open Broadcast Software (OBS) and an RTMP server, to viewers in the browser.

The application makes use of a JSON-server for CRUD Operations.

## App Goals

-   To master CRUD (Create, Read, Update, Destroy) Operations.
-   Stream video from desktop to the browser using OBS

## Tech Used

-   React
-   Redux
-   Redux Form
-   Redux Thunk
-   React Router
-   JSON Server (CRUD)
-   Node Media Server (RTMP)
-   Semantic UI
-   Open Broadcast Software
