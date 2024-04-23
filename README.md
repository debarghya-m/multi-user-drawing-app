# Multi-User Drawing App

This is a real-time multi-user drawing application built with Angular for the client-side, Node.js for the server-side, Socket.IO for real-time communication, and HTML Canvas for drawing.

## Features

- **Real-Time Collaboration:** Multiple users can draw on the canvas simultaneously in real-time.
- **User Authentication:** Support for user authentication to allow users to join the drawing session.
- **Drawing Tools:** Basic drawing tools such as pencil, eraser, color picker, etc.
- **Canvas Manipulation:** Features for resizing, clearing, and saving the canvas.
- **Chat Integration:** Built-in chat functionality for users to communicate while drawing.

## Technologies Used

- **Angular:** Frontend framework for building single-page applications.
- **Node.js:** JavaScript runtime for building server-side applications.
- **Socket.IO:** Library for real-time web applications using WebSockets.
- **HTML Canvas:** Native drawing capabilities in HTML for rendering graphics.
- **Express:** Web application framework for Node.js for building APIs and handling HTTP requests.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Angular CLI installed globally (`npm install -g @angular/cli`).

### Installation

1. Clone the repository: `https://github.com/debarghya-m/multi_user_drawing_app.git`
2. Navigate to the server directory: `cd server`
3. Install server dependencies: `npm install`
4. Navigate to the client directory: `cd ../client`
5. Install client dependencies: `npm install`

### Usage

1. Start the server: `npm start` or `node server.js` in the server directory.
2. Start the client: `ng serve` in the client directory.
3. Open your browser and visit `http://localhost:4200/`.

## Deployment

You can deploy the application to various platforms such as Heroku, AWS, or Azure. Ensure that you configure your deployment environment to support Node.js and Angular applications.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
