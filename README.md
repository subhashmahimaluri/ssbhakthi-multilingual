This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


## Local Env Setup

# .env.te (Telugu/English instance):
envDEFAULT_LOCALE=te
SUPPORTED_LOCALES=te,en
PORT=3000
INSTANCE_TYPE=te-en

# .env.hi (Hindi instance):
envDEFAULT_LOCALE=hi
SUPPORTED_LOCALES=hi
PORT=3001
INSTANCE_TYPE=hi

# .env.kn (Kannada instance):
envDEFAULT_LOCALE=kn
SUPPORTED_LOCALES=kn
PORT=3002
INSTANCE_TYPE=kn

# Development
npm run dev:te          # Telugu/English instance (port 3000)
npm run dev:hi          # Hindi instance (port 3001)
npm run dev:kn          # Kannada instance (port 3002)
npm run dev:all         # All instances simultaneously

# Production Build
npm run build:te        # Build Telugu/English
npm run build:hi        # Build Hindi
npm run build:kn        # Build Kannada
npm run build:all       # Build all instances

# Production Start
npm run start:te        # Start Telugu/English (port 3000)
npm run start:hi        # Start Hindi (port 3001)
npm run start:kn        # Start Kannada (port 3002)
npm run start:all       # Start all instances