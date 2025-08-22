# Next App

This is a **Next.js** project with authentication (Google & credentials), product management, and a responsive dashboard using **DaisyUI**. Users can log in, view products, and add products if logged in.

---

## Live Site
[Live Demo on Vercel](https://next-app-sujan.vercel.app/)

---

## GitHub Repository
[https://github.com/your-username/next-app](https://github.com/sujanchakma1/next-app)

---

## Project Description

- Built with **Next.js 15**, **React**, **Tailwind CSS**, **DaisyUI**.
- Authentication via **NextAuth.js** (Google + Credentials).
- Products stored in **MongoDB**.
- Dashboard for managing products (protected route).
- Responsive layout with sidebar and drawer for mobile devices.
- Loading spinner during data fetch.

---

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/sujanchakma1/next-app
cd next-app
2. Features Section

Authentication: Credentials

Products: Add/View/Manage

Dashboard: Protected routes, responsive layout

Responsive design: Sidebar + mobile drawer

Loading states for API calls

MongoDB integration

3. Installation & Setup

Node.js version

Dependencies (npm install)

Environment variables

Run commands (npm run dev, npm run build)

4. Route Summary (Already included)

/ → Home

/login → Login page

/products → All products

/dashboard → Dashboard overview

/dashboard/addProduct → Add Products

Optional: You can add more specific API routes:

Route	Method	Description
/api/products	GET	Fetch all products
/api/products/latest	GET	Fetch latest 5 products
/api/products/add	POST	Add a new product (authenticated)

5. Environment Variables

GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET

NEXTAUTH_SECRET

MONGODB_URI

6. Technologies / Stack

Next.js, React, Tailwind CSS, DaisyUI, NextAuth.js, MongoDB, Vercel
