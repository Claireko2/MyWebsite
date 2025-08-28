# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase professional work, skills, and experience.

## Features

- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Single Page Application**: Smooth navigation with React Router
- **Authentication**: Secure user authentication with Firebase Auth
- **Database**: Real-time data storage with Firestore
- **Fast Performance**: Built with React 18 and optimized for web vitals
- **Cross-Browser Compatible**: Tested across modern browsers

## Tech Stack

- **Frontend Framework**: React 
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM 
- **Backend Services**: Firebase (Authentication & Firestore)
- **Build Tool**: Create React App
- **CSS Processing**: PostCSS & Autoprefixer

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase configuration:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication and Firestore Database
   - Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Build & Deployment

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder, ready for deployment to any static hosting service.

## Firebase Setup

This portfolio uses Firebase for backend services:

**Authentication Features:**
- User registration and login
- Password reset functionality
- Protected routes and content
- Session management

**Firestore Database:**
- Store portfolio data
- Manage user preferences
- Real-time updates
- Secure data access rules

**Environment Variables:**
Make sure to add your Firebase configuration to the `.env` file (never commit this file to version control).

