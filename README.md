# recruitment-forms

Static Export & Deployment

This project is configured for static export using Next.js 15.5.4 with the new output: "export" setting.
That means you don't need to run next export anymore — just next build will handle everything.

Build Instructions
    Install dependencies
    - npm install
    Build the project
    - npm run build

This will automatically generate a static export in the out/ directory.

Verify the output

/out
  ├── index.html
  ├── apply/
  ├── _next/
  └── ...

Deploy
Upload the contents of the /out folder to your target directory:
    e.g.("/copyparty/u/johnpaul.olimpo/recruitmentform")

Config Notes

Your next.config.ts is already configured for static export:

    const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    };

output: "export"                -> enables static site generation
images.unoptimized: true        -> disables image optimization (since it's static)
basePath and assetPrefix        -> ensure paths work correctly on Copyparty
Scripts Reference
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}

npm run dev — start development server
npm run build — build & static export
npm start — serve the production build locally (for testing)
npm run lint — check code style