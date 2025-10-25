# 🚀 Referral Frontend

A modern **Referral System Frontend** built with **Next.js 15**, **TypeScript**, **React Query**, **Zustand**, and **Tailwind CSS**.  
Users can register, log in, refer others, make purchases, and compete on a leaderboard — all within a responsive, elegant UI.

---

## 🧩 Tech Stack

| Category | Tools & Libraries |
|-----------|-------------------|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router + Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Forms** | React Hook Form + Zod |
| **State Management** | Zustand |
| **Data Fetching** | React Query |
| **HTTP Client** | Xior |
| **Icons** | Lucide React |
| **Notifications** | React Hot Toast |
| **Error Handling** | React Error Boundary |
| **Code Quality** | Biome (Formatter + Linter) |

---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites
Ensure you have **pnpm** installed globally:

```bash
npm install -g pnpm
```

### 2️⃣ Clone the Project
```bash
git clone git@github.com:abdullaalfahad/referral-frontend.git
cd referral-frontend
```

### 3️⃣ Install Dependencies
```bash
pnpm install
```

---

## 💻 Development

Run the local development server:

```bash
pnpm dev
```

Your app will be available at 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🏗️ Build for Production

Build the optimized production version:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 🧭 Folder Structure

```bash
referral-frontend/
├── app/
│   ├── (auth)/              # Authentication routes (login, register)
│   ├── (dashboard)/         # Protected app layout & sub-routes
│   │   ├── dashboard/       # User dashboard
│   │   ├── referrals/       # Referral management page
│   │   ├── purchase/        # Purchase simulation page
│   │   └── leaderboard/     # Top referrers leaderboard
│   └── layout.tsx           # Root layout
├── components/              # Shared UI components
│   ├── layout/              # AppLayout, Sidebar, Header
│   └── ui/                  # Smaller reusable UI elements
├── hooks/                   # Custom React hooks
├── lib/                     # API client & utilities
├── schemas/                 # Zod validation schemas
├── store/                   # Zustand global store
├── middleware.ts            # Route protection middleware
└── README.md
```

---

## 🧑‍💻 Scripts

| Command | Description |
|----------|-------------|
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build for production (Turbopack) |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome lint checks |
| `pnpm format` | Auto-format all files |

---

## ✨ Features

✅ User Registration & Login  
✅ Referral-based Registration via `?ref=` link  
✅ Middleware-protected private routes  
✅ Purchase simulation and credit rewards  
✅ Dynamic leaderboard of top referrers  
✅ Clean responsive dashboard UI  
✅ Global toast notifications  
✅ Biome formatting & linting

---

## 🌐 API Connection

The frontend connects to the backend API hosted at:  
👉 **https://referral-backend-69kc.onrender.com**

Live Demo: **[https://referral-frontend-nextjs.vercel.app](https://referral-frontend-nextjs.vercel.app)**

---

## 👨‍💻 Author

**Abdulla Al Fahad**  
*Software Engineer*
