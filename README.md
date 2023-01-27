![picture](src/assets/logo/logo.svg)

# SportSee - Analytics Dashboard with React

The goal of this app is to show analytics from users using the SportSee app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author

Anthony COLAS

## Technologies

- [![React-v_18.2](https://img.shields.io/badge/React-v_18.2-blue)](https://fr.reactjs.org/)
- [![React-Router-v_6.4](https://img.shields.io/badge/React_Router-v_6.4-blue)](https://reactrouter.com/docs/en/v6)
- [![Styled-Components-v_5.3.5](https://img.shields.io/badge/Styled_Components-v_5.3.5-orange)](https://styled-components.com/)
- [![Recharts-v_2.1.14](https://img.shields.io/badge/Recharts-v_2.1.9-yellow)](https://recharts.org/)
- [![D3-v_7.6.1](https://img.shields.io/badge/D3-v_7.6.1-yellow)](https://d3js.org/)

## Preview

![picture](src/assets/img/preview.png)

## Installation

### Prerequisites

App made for 1024x780px resolution.

- npm
- yarn
- Node.js

### How to install?

#### Install the backend

Clone the backend repository of SportSee
`https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`

Go inside the installed repository and install dependencies:
`yarn install`

Launch the backend on port 3000 (by default):
`yarn dev`

#### Install the frontend

Clone the frontend repository of SportSee
`https://github.com/ToDestiny/SportSee---Analytics-Dashboard-with-React`

Go inside the app repository
`cd sportsee-front`

Install dependencies:
`npm install`

Launch the backend on port 3000 (by default):
`npm run start`

#### Accessing the website

Frontend is now rendered at URL `http://localhost:3000/user/12`

#### Mocked Data or API

In order to change between the two modes, you need to change the variable:
`const isMockedData = false;`

Located inside src/api/api/js l11

By default is it false.
