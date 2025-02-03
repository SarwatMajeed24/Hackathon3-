Project Overview

This project contains the code base for an e-commerce marketplace developed during a 6-day hackathon. The goal of the project was to create a scalable, feature-rich e-commerce marketplace application using Next.js, sanity and mock API.  Below is the summary of daily activities and achievements.

Day 1: Laying the Foundation

Objective: 
Initiated the project setup and defined foundational elements for the marketplace.

Achievements:

Initialized the Next.js project.

Set up the folder structure and installed necessary dependencies, including Sanity CMS for backend management.

Finalized design and business goals for the marketplace.

Created initial mockups and a project roadmap.

Day 2: Planning the Technical Foundation

Objective: 
Shifted focus from business planning to technical preparation.

Achievements:

Designed the system architecture.

Defined workflows for customer journeys, including product listing, cart functionality, and order processing.

Drafted API endpoints for backend communication:

/products (GET) — Fetch product details.

/categories (GET) — Fetch product categories.

/orders (POST) — Create a new order.

/customer (GET) — Fetch customer information.

/shipment (GET) — Track order status.

Chose Stripe as the payment gateway and Ship Engine for third-party API integration.

Day 3: Frontend Development

Objective:
 Developed the frontend for the marketplace.

Achievements:

Implemented dynamic routing for individual product pages.

Created reusable components for navigation, product cards, and cart summary.

Integrated Sanity CMS for dynamic product content management.

Added client-side state management for cart functionality using Context API.

Day 4: Backend Integration

Objective:
 Integrated backend APIs and ensured smooth interaction between frontend and backend.

Achievements:

Connected the frontend with Sanity CMS to fetch and display product data.

Implemented the /orders endpoint to handle new orders.

Set up Stripe payment gateway for secure transactions.

Integrated Ship Engine API for shipment tracking.

Day 5: Testing, Error Handling, and Refinement

Objective: 
Prepared the application for deployment by testing and refining all components.

Achievements:

Conducted functional testing:

Validated navigation links, product listings, and cart operations.

Added error handling with try-catch blocks and fallback UI components.

Performed performance testing using Lighthouse.

Ensured cross-browser compatibility and mobile responsiveness.

Conducted security tests to safeguard sensitive data.

Day 6: Deployment Preparation

Objective: Deployed the application to a staging environment.

Achievements:

Chose Vercel as the hosting platform.

Secured environment variables using .env files.

Deployed the application to a staging environment and conducted end-to-end tests.

Documented all activities, test cases, and deployment steps.

Prepared the repository for public release with a structured folder hierarchy and README documentation.

Deployment
The application is hosted on Vercel. Visit the live site at your-live-site-url.

Tech Stack

Frontend: Next.js

Backend: Sanity CMS

API Integration: Ship Engine, Stripe

Testing Tools: Cypress, Postman, Lighthouse



