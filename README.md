# Hotel Management Platform (Horizon Elite)

**Preview:** [https://dummy-preview-link-hotel.app](https://dummy-preview-link-hotel.app)

A fully responsive, component-based frontend application for a luxury hotel management platform. This project showcases a "Quiet Luxury" design system using deep navies, soft slates, accent golds, and crisp whites.

## Overview

This application is built with **React**, **Vite**, and **Tailwind CSS**. It follows a scalable feature-based architecture and is integrated with a live REST API to dynamically display hotel collections.

## Features

- **Component-based Architecture**: Highly reusable atomic components like `Button`, `Badge`, and `HotelCard`.
- **Responsive Design**: Flawless layout scaling across mobile, tablet, and desktop viewports using Tailwind grids.
- **Client-Side Routing**: Fast page transitions using `react-router-dom`.
- **Live Data Integration**: Custom React hooks to fetch and parse external hotel API data.
- **Modern UI/UX**: "Quiet Luxury" aesthetic utilizing Source Serif 4 for elegant headlines, Hanken Grotesk for readable body text, and ambient shadows.

## API Integration

Data for the featured properties is dynamically fetched from a live endpoint. 

**API Link:** `https://demohotelsapi.pythonanywhere.com/hotels/`

### How it works:
A custom React hook (`src/hooks/useHotels.js`) is responsible for managing the API call. It utilizes the native `fetch` API inside a `useEffect` hook to retrieve the array of hotel objects on component mount. The hook handles loading states, error catching, and JSON parsing before exposing the `hotels` array to the `HotelList` component. The `HotelList` then iterates through this array, passing each hotel's data (images, price, rating, name) down to individual `HotelCard` components.

## Folder Structure

```text
Frontend/
├── public/                # Static assets
├── src/                   # Main source code
│   ├── assets/            # Local images and icons
│   ├── components/        # Generic, reusable UI components (Button, Badge)
│   ├── features/          # Complex, domain-specific components (HotelCard, HotelList)
│   ├── hooks/             # Custom React hooks (useHotels)
│   ├── layouts/           # Structural page wrappers (MainLayout)
│   ├── pages/             # Route-level components (HomePage)
│   ├── App.jsx            # Application root and Router configuration
│   ├── index.css          # Global Tailwind configurations and custom variables
│   └── main.jsx           # React DOM rendering entry point
├── .gitignore
├── eslint.config.js
├── index.html             # HTML entry point (contains Google Fonts)
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration (if applicable)
└── vite.config.js         # Vite bundler configuration
```

## Running Locally

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Build for production**: `npm run build`
