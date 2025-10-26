# recruitment-forms

## Overview

Recruitment Forms is a dynamic, server-rendered Next.js 15.5.4 application designed to streamline job application collection and management. It features real-time form submission, data validation, and MongoDB integration for secure data storage.

## Tech Stack

**Framework:** Next.js 15.5.4 (App Router)  
**Frontend:** React, TypeScript, Tailwind CSS, ShadCN UI  
**Database:** MongoDB (via Mongoose / direct API connection)  
**Form Validation:** Zod schema validation  
**UI Enhancements:** Responsive design, local data persistence (via localStorage), client-side error handling, toast notifications  
**Deployment:** Node.js runtime (supports dynamic routes and server functions)

## Build & Run Instructions

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Start the server
npm run start
```

This runs the Next.js server in production mode, serving dynamic routes and MongoDB-backed APIs.

## Environment Variables

```bash
# Create a .env.local file in the root directory and include:
MONGODB_URI=<your_mongodb_connection_string>
```

## Directory Overview

```bash
/src
  ├── app/
  │   ├── apply/            # Main application form pages
  │   ├── api/              # Dynamic API routes for form submission
  ├── components/           # Reusable UI components (InfoContainer, Buttons, etc.)
  ├── lib/                  # Schemas, validation, and utility logic
  └── hooks/                # Custom hooks (useToast, form persistence)
```

## Key Features

```bash
- Multi-step Form Workflow: User-friendly form progression with client-side validation
- Local Data Persistence: Automatically saves progress in localStorage
- MongoDB Integration: Securely stores all submissions in a NoSQL database
- Responsive UI: Built with Tailwind CSS and ShadCN UI for consistency
- Real-time Validation: Ensures data accuracy using Zod
- Toast Feedback System: Provides instant user feedback on submission success or error
```

## Scripts

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

## Usage

```bash
npm run dev     # start the development server
npm run build   # compile for production
npm run start   # run the production build dynamically
npm run lint    # check for code style and errors
```
