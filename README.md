# Listings Dashboard

## Overview

The **Listings Dashboard** is a web application built with React.js, featuring a sidebar with navigation options to view and manage listings, user information, and other essential details. The app includes a responsive design with a smooth experience on both desktop and mobile devices. It allows users to manage listings, view the "About" page, and log out of their session.

## Features

- **Responsive Design**: The app adapts to both desktop and mobile screens.
- **Sidebar Navigation**: A sidebar is provided to navigate between different pages like the listings, about page, and logout.
- **Tabs for Content**: Content on the main screen is displayed in tabs, with active tabs changing based on user interactions.
- **Logout Functionality**: Users can log out of the application, resetting their credentials.
- **Mobile-First**: The app includes a mobile-friendly version with a hamburger menu for easy access to the sidebar.
- **ShadCN UI Integration**: The app uses ShadCN UI for various user interface components, offering a sleek and modern design system.
- **Session Management**: The app uses **SessionStorage** to manage user sessions persistently while the user is active in the app.
- **React Context**: **React Context** is used for centralized state management of user authentication, allowing for easier tracking and management of user data throughout the app.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Lucide Icons, ShadCN UI
- **State Management**: React Context API
- **UI Components**: Custom button, tabs, layout components, and UI elements from ShadCN UI
- **Authentication**: Simple user session management using React Context and session storage

## Authentication

To log in, use the following credentials:

- **Email**: `eve.holt@reqres.in`
- **Password**: `cityslicka`

Upon successful login, the app stores the user's session in **SessionStorage** to persist the session data across page reloads but clears it once the browser tab is closed. The user's authentication state is also stored using **React Context**.

### SessionStorage

- **SessionStorage** allows you to store data in the browser for the duration of the page session. The data stored in SessionStorage is cleared once the browser tab or window is closed. This means that session data (like user authentication tokens or user details) is maintained as long as the tab is open, but the data is lost when the tab is closed or the user navigates away from the page.

### React Context

- **React Context** is used in the Listings Dashboard for managing global state, specifically for user authentication details. React Context allows you to pass data through the component tree without having to pass props down manually at every level.



## Deployment

You can view the deployed version of the app at:

[Listings Dashboard - Live](https://userlist-static-site.onrender.com/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    https://github.com/kesari99/kesari99-global-group-assignment-userlist.git
    ```

2. Navigate to the project directory:
    ```bash
    cd client
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the app:
    ```bash
    npm run dev
    ```

5. Open the browser and visit:
    ```
    http://localhost:5173
    ```

## Usage

After starting the app, you can:

- View the **Get List** page to manage listings.
- Navigate to the **About** page for project information.
- Click the **Logout** button to log out of the app.

On mobile devices, the sidebar menu will collapse into a hamburger menu that can be toggled.




