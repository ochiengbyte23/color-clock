# Dynamic Color Clock with React

A beautiful, real-time clock application that displays the current date and time with a modern gradient design.

## Description

This project is a dynamic clock built with React and the date-fns library. It showcases real-time updates using React hooks and demonstrates modern CSS styling techniques including gradients, shadows, and backdrop filters. The clock updates every second to display the accurate time and date in a visually appealing format with a purple gradient theme. This project is perfect for learning React state management, side effects with useEffect, and npm package integration.

## Getting Started

### Dependencies

**Node.js** - version 14.0 or higher
**npm** - version 6.0 or higher (comes with Node.js)
**Modern web browser** - Chrome, Firefox, Safari, or Edge
**Operating System** - Windows 10/11, macOS, or Linux
**React** - included in dependencies
**date-fns** - included in dependencies

### 🛠️ Installing

1. Clone or download this project to your local machine.
2. Navigate to the project directory in your terminal:

    ```bash
    cd your-project-folder
    ```

3. Install all required dependencies:

    ```bash
    npm install
    ```

### 💻 Executing

1. Start the development server:

    ```bash
    npm start
    ```

2. The application will automatically open in your default browser at <http://127.0.0.1:5173/>
3. If it doesn't open automatically, manually navigate to:

    <http://127.0.0.1:5173/>

4. The clock should now be running and updating every second
5. To stop the server, press Ctrl + C in the terminal

## Help

### Common issues and solutions

#### Problem: npm install fails

npm cache clean --force
npm install

#### Problem: Clock not updating

Check browser console for errors
Ensure date-fns is properly installed
Verify useEffect hook is running

#### Problem: Styling not showing

Ensure App.css is in the same directory as App.jsx
Check that import './App.css' is at the top of App.jsx
# color-clock
