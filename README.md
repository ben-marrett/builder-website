# Construction Company Website

A modern, responsive website for a construction company built with React, TypeScript, and Tailwind CSS. The site showcases the company's services, projects, and team members with a focus on visual appeal, accessibility, and user experience.

**Live Site:** [Builder Website Example](https://builder-website-example.netlify.app)

![Construction Company Website](https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Type-Safe**: Fully typed with TypeScript for improved reliability
- **Accessible**: ARIA-compliant with semantic HTML and proper keyboard navigation
- **Before/After Gallery**: Interactive before/after image comparison for renovation projects
- **Service Showcase**: Detailed presentation of construction and renovation services
- **Team Profiles**: Section highlighting the company's team members
- **Testimonials**: Customer reviews and feedback
- **Contact Form**: Interactive form with animations and validation
- **Performance Optimized**: Fast loading times with optimized images
- **SEO Ready**: Proper meta tags and semantic structure

## Project Structure

```
src/
├── assets/         # Static assets like icons and images
├── components/     # Reusable UI components
├── data/          # Centralized data files (images, projects, services, etc.)
├── pages/         # Page components for each route
├── types/         # TypeScript type definitions
├── __mocks__/     # Mock files for testing
├── App.tsx        # Main application component
├── index.tsx      # Application entry point
└── setupTests.ts  # Test configuration
```

## Key Components

- **Button**: Reusable button component with multiple variants and routing capabilities
- **SEO**: Centralized SEO component for managing meta tags
- **HomePage**: Landing page with hero section, featured projects, and services
- **ServicesPage**: Detailed information about offered services
- **GalleryPage**: Project showcase with before/after image comparison and category filtering
- **AboutPage**: Company story and team member profiles
- **ContactPage**: Contact form and information
- **BeforeAfterModal**: Interactive component for comparing before/after renovation images

## Technologies Used

- **React 18**: Modern UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth transitions and effects
- **React Router**: For client-side routing
- **React Helmet Async**: For managing document head and meta tags
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

## Development Status

See [CHANGELOG.md](./CHANGELOG.md) for recent updates and improvements.

### Current Focus Areas

1. **Accessibility**
   - Enhanced ARIA attributes
   - Semantic HTML structure
   - Keyboard navigation improvements

2. **Performance**
   - Image optimization
   - Lazy loading implementation
   - Loading states for interactive elements

3. **SEO**
   - Meta tags implementation
   - Structured data
   - Sitemap generation

## Deployment

This project is deployed on Netlify at [https://builder-website-example.netlify.app](https://builder-website-example.netlify.app).

### Netlify Forms Integration

To do: enable the contact form with Netlify Forms

1. Add the `data-netlify="true"` attribute to form element
2. Include a hidden input field with name="form-name" and value equal to form's name
3. Ensure all form fields have name attributes

Example:
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* Your form fields here */}
</form>
```

Netlify will automatically detect and process form submissions without requiring any backend code.

## Image Credits

All images are sourced from [Unsplash](https://unsplash.com) and are used with appropriate attribution.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
