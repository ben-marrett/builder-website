# Construction Company Website

A modern, responsive website for a construction company built with React, TypeScript, and Tailwind CSS. The site showcases the company's services, projects, and team members with a focus on visual appeal and user experience.

![Construction Company Website](https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with animations and transitions
- **Before/After Gallery**: Interactive before/after image comparison for renovation projects
- **Service Showcase**: Detailed presentation of construction and renovation services
- **Team Profiles**: Section highlighting the company's team members
- **Testimonials**: Customer reviews and feedback
- **Contact Form**: Ready for integration with Netlify Forms
- **Performance Optimized**: Fast loading times with optimized images
- **Fully Tested**: Component tests using Jest and React Testing Library

## Project Structure

```
src/
├── assets/         # Static assets like icons and images
├── components/     # Reusable UI components
├── data/           # Data files for projects, services, team members, etc.
├── pages/          # Page components for each route
├── __mocks__/      # Mock files for testing
├── App.tsx         # Main application component
├── index.tsx       # Application entry point
└── setupTests.ts   # Test configuration
```

## Key Components

- **HomePage**: Landing page with hero section, featured projects, and services
- **ServicesPage**: Detailed information about offered services
- **GalleryPage**: Project showcase with before/after image comparison
- **AboutPage**: Company story and team member profiles
- **ContactPage**: Contact form and information
- **BeforeAfterModal**: Interactive component for comparing before/after renovation images

## Technologies Used

- **React 18**: Modern UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth transitions and effects
- **React Router**: For client-side routing
- **Jest & React Testing Library**: For component testing
- **Heroicons**: SVG icon collection

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd builder-website
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- **npm start**: Runs the app in development mode
- **npm test**: Launches the test runner
- **npm run test:components**: Runs tests for components only
- **npm run test:pages**: Runs tests for pages only
- **npm run test:coverage**: Runs tests with coverage report
- **npm run build**: Builds the app for production

## Deployment

This project is configured for easy deployment to Netlify. The contact form is designed to work with Netlify Forms for handling submissions.

## Image Credits

All images are sourced from [Unsplash](https://unsplash.com) and are used with appropriate attribution.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
