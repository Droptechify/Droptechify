# DropTechify Website - Replit.md

## Overview

DropTechify is a software development company website built as a React single-page application following the ConciergeLite.fr design inspiration. The project creates a modern, professional website showcasing digital services including website development, WordPress development, video editing, app development, and custom software solutions. The website features a dark hero section with video background, yellow accent colors, smooth scrolling animations, and a comprehensive layout matching the ConciergeLite aesthetic.

## Recent Changes (January 2025)

### Complete ConciergeLite-Style Redesign
- **Architecture**: Rebuilt entire website following ConciergeLite.fr design patterns
- **Styling**: Implemented dark hero sections with yellow (#F5CA3B) accent colors
- **Components**: Created 11 main sections: Header, Hero, ServicesMarquee, WhyChoose, Services, HowItWorks, Sectors, Team, FAQ, Contact, Footer
- **Content**: Adapted content for software development services while maintaining ConciergeLite's professional messaging approach
- **Video Integration**: Added background video support in hero section

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first styling with custom theme extensions
- **Typography**: Inter font family loaded from Google Fonts
- **Icons**: Lucide React for consistent iconography

### Component Structure
- Single-page application with component-based architecture
- Modular components for different sections (Hero, About, Services, etc.)
- Responsive design patterns using Tailwind's mobile-first approach
- Custom CSS animations and transitions for enhanced user experience

### Styling System
- **Primary Color**: Sky blue (#38bdf8) for brand consistency
- **Secondary Color**: Slate dark (#1e293b) for contrast
- **Layout**: Custom container and section padding utilities
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles

### Performance Optimizations
- Vite's hot module replacement for development
- Optimized asset loading and bundling
- Preconnected external font domains
- SEO-optimized meta tags and Open Graph properties

### Development Configuration
- **Server**: Development server on port 5000 with HMR
- **Build Process**: Vite build with React plugin
- **PostCSS**: Tailwind and Autoprefixer integration
- **Module System**: ES modules with modern JavaScript features

## External Dependencies

### Core Dependencies
- **React & React DOM**: Frontend framework for component-based UI
- **Firebase**: Backend services integration for potential data storage and authentication
- **Lucide React**: Icon library for consistent UI elements

### Development Tools
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **TypeScript Types**: Type definitions for React components

### External Services
- **Google Fonts**: Inter font family hosting
- **Netlify**: Planned hosting platform for static site deployment
- **Video Assets**: External video hosting for hero background content

### Build & Deployment
- **Static Site Generation**: Vite build process creates optimized static assets
- **Hosting**: Configured for Netlify deployment with proper routing
- **SEO**: Meta tags, Open Graph, and Twitter Card support for social sharing