# MERN Stack Blog Application

## Overview

This is a full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The frontend is styled using Tailwind CSS with the Flowbite theme.

## Built with:

![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB")![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![ExpressJS](	https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![MongoDB](	https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![JSON Webtokens](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

- **Frontend**: ReactJS, TailwindCSS, Flowbite
- **Server/Hosting**: 
- **ODM**: Mongoose
- **Backend**: ExpressJS, MongoDB, Firebase
- **Misc**: Redux, JSON Web Tokens, React Quill

## Features



## Prerequisites

- Node.js and npm installed.
- MongoDB installed and running locally



## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Change .env files:**

    Update the details in the `.env` files located in the main directory and the client directory.

    In the main directory `.env` file, set the following variables:

    ```plaintext
    MONGO='<YOUR MONGODB ADDRESS >'
    JWT_SECRET='<YOUR JWT TOKEN SECRET>'
    ```

    In the client directory `.env` file, set the following variable:

    ```plaintext
    VITE_FIREBASE_API_KEY="<YOUR FIREBASE KEY>"
    ```

3. **Install dependencies:**

    First, navigate to the `<repository_name>` folder and install dependencies:

    ```bash
    npm install
    ```

    Then, navigate to the `api` folder and install its dependencies:

    ```bash
    cd ../api
    npm install
    ```

4. **Run the development servers:**

    In one terminal window, run the client development server:

    ```bash
    cd ../client
    npm run dev
    ```

    In another terminal window, run the API development server:

    ```bash
    cd ../api
    npm run dev
    ```


Now, you should have both the client and API servers up and running.Follow the link shown in client side terminal to view the website
