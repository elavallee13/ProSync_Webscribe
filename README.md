# ProSync Webscribe (formerly J.A.T.E)

![ProSync Webscribe Logo](./client/src/images/logo.png)

ProSync Webscribe, also known as Just Another Text Editor (J.A.T.E), is a browser-based text editor designed to provide a simple and convenient platform for text content creation and editing. It features offline functionality, persistent data storage using IndexedDB, and aligns with the principles of Progressive Web Apps (PWAs).

## Table of Contents
- [Introduction](#prosync-webscribe-formerly-jate)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Offline Functionality](#offline-functionality)
- [Data Persistence](#data-persistence)
- [PWA Criteria](#pwa-criteria)
- [Contributing](#contributing)
- [License](#license)

## Features
- Browser-based text editor with syntax highlighting.
- Offline functionality enables users to continue working even without an internet connection.
- Local data is persistently stored using IndexedDB, ensuring user content is saved.
- Meets the criteria of Progressive Web Apps (PWAs), providing an app-like experience on web browsers.

## Getting Started

### Prerequisites
- Node.js (version 16.15.1 or higher)
- npm (Node Package Manager)

### Installation
1. Clone this repository to your local machine.
2. Navigate to the `client` folder and install the client-side dependencies:
   ```bash
   cd client
   npm install
Save to grepper
Similarly, navigate to the server folder and install the server-side dependencies:

cd ../server

npm install

Return to the project's root directory:

cd ..

### Usage
Start the development server:
npm run start:dev
Open your web browser and navigate to http://localhost:3000.
Offline Functionality
ProSync Webscribe is designed to function even when you are offline. It utilizes service workers and caching strategies to store essential assets and content, enabling you to continue using the text editor without an internet connection.

Data Persistence
The application uses IndexedDB, a client-side database, to store your text content. This ensures that your work is saved and available even after you close the browser or refresh the page.

PWA Criteria
ProSync Webscribe meets the criteria of Progressive Web Apps, providing a seamless and app-like experience in modern web browsers. It supports offline access, prompt installation, and smooth performance.

Contributing
Contributions are welcome! If you have suggestions, bug reports, or improvements, please feel free to open an issue or submit a pull request.

License
This project is licensed under the ISC License.

Developed by Eric Lavallee as part of a full-stack development journey.

Feel free to further personalize the README.md to include any additional details you'd like to share about your project.