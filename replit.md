# CodeVerge Business Website

## Overview

This is a full-stack web application for CodeVerge, a technology consulting company specializing in AI solutions, application development, staff augmentation, and Dynamics 365 services. The application features a modern, responsive website with a contact form system and animated UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Data Validation**: Zod schemas for type-safe validation
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Storage**: DatabaseStorage class implementing IStorage interface
- **Session Management**: express-session with connect-pg-simple (configured for PostgreSQL)

### Key Components

#### Frontend Components
- **HeroSlider**: Animated image carousel for the main landing section
- **ServicesGrid**: Showcases the four main service offerings with hover effects
- **TestimonialCarousel**: Rotating customer testimonials
- **ContactForm**: Form submission with validation and success/error handling
- **FeaturedStats**: Animated statistics counters
- **Header/Footer**: Navigation and company information

#### Backend API
- **Contact Endpoints**: 
  - `POST /api/contact` - Submit contact form
  - `GET /api/contacts` - Retrieve all contacts (admin functionality)
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging

#### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, company, service, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with name, email, company, service, and message
   - Form data validated client-side using Zod schema
   - Data sent to `/api/contact` endpoint via TanStack Query mutation
   - Server validates data again and stores in memory storage
   - Success/error feedback shown via toast notifications

2. **Component Rendering**:
   - Single-page application with animated sections
   - Components use Framer Motion for entrance animations and hover effects
   - Responsive design adapts to mobile and desktop viewports

## External Dependencies

### Frontend Libraries
- **UI/UX**: Radix UI primitives, Framer Motion, Lucide React icons
- **Forms**: React Hook Form, Hookform Resolvers
- **HTTP Client**: TanStack Query with fetch API
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Libraries
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Validation**: Zod for schema validation
- **Session**: express-session with PostgreSQL store

### Development Tools
- **Build**: Vite with React plugin and Replit-specific plugins
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Server**: Express server with development middleware
- **Database**: Configured for PostgreSQL (Neon Database) but currently using in-memory storage

### Production Build
- **Frontend**: Vite builds optimized bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Environment**: Production mode serves static files and API from single Express server

### Configuration Notes
- Database connection established using `DATABASE_URL` environment variable
- Application uses PostgreSQL with Drizzle ORM for data persistence
- Session storage configured for PostgreSQL
- All contact form submissions and user data are now stored in the PostgreSQL database
- Database schema automatically synced using `npm run db:push` command

### Replit Integration
- Configured with Replit-specific Vite plugins for development experience
- Cartographer plugin for enhanced debugging in Replit environment
- Runtime error overlay for development feedback