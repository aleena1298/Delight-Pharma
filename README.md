# Delight Pharma

A redesigned full-stack skincare storefront built with React, Express, and MongoDB. Customers can browse and filter products, keep a persistent cart, create an account, check out, track orders, cancel eligible orders, and contact the business.

## Requirements

- Node.js 20 or newer
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

1. Copy `.env.example` to `.env` and update `MONGODB_URI` and `JWT_SECRET`.
2. From the project root, run `npm install`, then `npm run install:all`.
3. Add initial products with `npm run seed --prefix server`.
4. Start both applications with `npm run dev`.
5. Open `http://localhost:5173`.

The API runs at `http://localhost:5000`. The health check is `GET /api/health`.

## Production

Run `npm run build`, set `NODE_ENV=production`, and run `npm start`. Express serves the compiled React app. Never commit `.env`.

## Admin account

The seed script reads optional `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment values. Change the fallback password immediately. Product and global order management APIs require an admin token.

