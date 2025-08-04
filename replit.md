# FutureSync CRM Landing Page

## Overview

This is a modern, AI-powered CRM landing page application built with React, TypeScript, and Express.js. The application features a sleek, futuristic design with glassmorphism effects, animated sections, and responsive navigation. It's structured as a full-stack application with a React frontend and Express backend, designed to showcase CRM features and capture leads through contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with custom theming and glassmorphism effects
- **UI Components**: Radix UI components with shadcn/ui styling
- **Database**: PostgreSQL with Drizzle ORM (schema defined but minimal usage)
- **Session Management**: Express sessions with PostgreSQL session store

## Key Components

### Frontend Architecture
- **Component-based React**: Modular components for different landing page sections
- **Custom UI Library**: Based on shadcn/ui with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animation**: Framer Motion for smooth transitions and scroll animations
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter as a lightweight React router

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **TypeScript**: Full type safety across the server
- **Development Features**: Hot reloading with Vite integration in development
- **Error Handling**: Centralized error handling middleware

### Landing Page Sections
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Animated background with CTA buttons
3. **Features Section**: AI-powered CRM features showcase
4. **Dashboard Showcase**: Product demonstration section
5. **Testimonials**: Customer success stories
6. **Pricing**: Tiered pricing plans
7. **Integrations**: Third-party service connections
8. **CTA Section**: Final conversion section
9. **Footer**: Links and company information

## Data Flow

### Contact Form Processing
1. User submits contact form through React frontend
2. Form data validated using Zod schema on the server
3. Server logs submission (placeholder for database/email integration)
4. Success/error response sent back to client
5. Client displays toast notification to user

### Demo Scheduling
1. Similar flow to contact forms but with additional company field requirement
2. Schema validation ensures all required fields are present
3. Server-side processing ready for calendar integration

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animation**: Framer Motion (implied from landing page design)
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database serverless
- **Session Management**: express-session with connect-pg-simple
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript configuration with path mapping
- **Code Quality**: ESLint configuration (implied)
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Vite handles asset optimization and bundling

### Environment Configuration
- **Development**: Uses tsx for server execution with Vite middleware
- **Production**: Serves built static files from Express server
- **Database**: Configured for PostgreSQL with environment variable

### Production Considerations
- Server configured to serve static files in production
- Error handling middleware catches and formats API errors
- Session storage uses PostgreSQL for persistence
- CORS and security headers should be added for production deployment

### Database Schema
Currently minimal with just a users table including:
- UUID primary keys
- Username/password fields
- Prepared for expansion with additional CRM entities

The application is ready for deployment on platforms like Replit, Vercel, or traditional hosting providers with PostgreSQL support.