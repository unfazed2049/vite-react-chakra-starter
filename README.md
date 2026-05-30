# Vite React Chakra Starter

<img src="https://og.sznm.dev/api/generate?heading=vite-react-chakra-starter&text=React+vite+template+with+Chakra-UI+and+TypeScript+setup.&template=color&center=true&height=330" />

A production-ready starter template for building React applications with Vite, TypeScript, Chakra UI v3, React Router, and Zustand. This template provides a modern development setup with component-based routing, client and server state management, and comprehensive tooling.

[**Live Demo**](https://vite-react-chakra-starter.sznm.dev/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/agustinusnathaniel/vite-react-chakra-starter) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/agustinusnathaniel/vite-react-chakra-starter)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/agustinusnathaniel/vite-react-chakra-starter)

## Purpose and Scope

This template solves the problem of quickly bootstrapping a new React application with:
- Modern build tooling (Vite with Rolldown)
- Component-based routing (React Router v7)
- Component library (Chakra UI v3)
- Client state management (Zustand)
- Server state management (TanStack Query)
- Development tooling (Biome, Vitest, TypeScript)
- PWA capabilities (optional, disabled by default)

**What this template does not provide:**
- Backend API integration patterns
- Authentication/authorization flows
- Database or data persistence layer
- Deployment pipelines (only configuration files)

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Build Tool | Vite (Rolldown) | Fast dev server and optimized builds |
| Framework | React 19 | UI library |
| Language | TypeScript | Type safety |
| Routing | React Router v7 | Component-based routing |
| UI Library | Chakra UI v3 | Component system |
| Client State | Zustand | Lightweight client state management |
| Server State | TanStack Query | Server state management |
| Testing | Vitest | Unit and integration testing |
| Linting/Formatting | Biome | Code quality and formatting |
| Package Manager | pnpm | Fast, disk-efficient package management |

## Architecture Overview

```mermaid
graph TB
    subgraph "Entry Point"
        A[index.html] --> B[main.tsx]
    end
    
    subgraph "Application Bootstrap"
        B --> C[Provider - Chakra UI Theme]
        C --> D[QueryClientProvider]
        D --> E[RouterProvider - React Router]
    end
    
    subgraph "Routing Layer"
        E --> F[Layout Route]
        F --> G[Home Page /]
        F --> H[404 Catch-all *]
    end
    
    subgraph "Component Architecture"
        F --> I[Layout Component]
        I --> J[Header]
        I --> K[Footer]
        I --> L[Page Content via Outlet]
        L --> M[UI Components]
        M --> N[Chakra UI Primitives]
    end
    
    subgraph "State Management"
        Z[Zustand Store - Client State] --> L
        Q[TanStack Query - Server State] --> L
    end
    
    subgraph "Supporting Systems"
        O[Theme System] --> C
        P[Color Mode Provider] --> C
        S[Query Client] --> D
    end
    
    style A fill:#e1f5ff
    style B fill:#e1f5ff
    style F fill:#fff4e1
    style I fill:#fff4e1
    style O fill:#e8f5e9
    style P fill:#e8f5e9
    style Z fill:#fce4ec
```

## Repository Structure

```
vite-react-chakra-starter/
├── src/
│   ├── main.tsx                 # Application entry point (React Router setup)
│   └── lib/                     # Application code
│       ├── components/          # Reusable UI components
│       │   └── ui/              # Base UI components (button, color-mode, provider)
│       ├── layout/              # Layout components
│       │   ├── index.tsx        # Main layout wrapper
│       │   └── components/      # Header, Footer, Meta
│       ├── pages/               # Page-level components
│       │   ├── home/            # Home page and its components
│       │   └── 404/             # 404 error page
│       ├── services/            # Services and shared constants
│       │   └── constants.ts     # Query client instance
│       ├── stores/              # Zustand state stores
│       │   └── app-store.ts     # Example store with persistence
│       ├── styles/              # Theme configuration
│       │   └── theme/           # Chakra UI theme setup
│       └── utils/               # Utility functions
│           ├── sample.ts        # Example utility
│           └── sample.test.ts   # Example test
├── public/                      # Static assets
├── vite.config.ts               # Vite configuration
├── vitest.config.ts             # Test configuration
├── tsconfig.json                # TypeScript configuration
├── biome.json                   # Linting and formatting rules
└── package.json                 # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js >= 22.0.0
- pnpm 10.24.0

### Installation

```bash
# Clone or use template
npx degit unfazed2049/vite-react-chakra-starter <app_name>
cd <app_name>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The development server runs on `http://localhost:3000` and opens automatically.

## Development Workflows

### Running the Application

```bash
# Development server with hot reload
pnpm dev

# Production build preview
pnpm build
pnpm serve
```

### Code Quality

```bash
# Check code style and linting
pnpm biome:ci

# Auto-fix issues
pnpm ultracite:fix

# Type checking
pnpm type:check

# Run all checks (lint, type, test)
pnpm check:turbo
```

### Testing

```bash
# Run tests once
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Building

```bash
# Production build
pnpm build

# Output directory: build/client
```

## Key Dependencies and Their Roles

### Core Framework

- **react-router**: Component-based routing with `createBrowserRouter` and `RouterProvider`. Routes are defined declaratively in `src/main.tsx` with nested routes, index routes, and a catch-all 404 handler.
- **zustand**: Client state management with a minimalist hook-based API. Stores are defined in `src/lib/stores/` and support the `persist` middleware for automatic localStorage synchronization.
- **@tanstack/react-query**: Server state management. Configured in `src/lib/services/constants.ts`.
- **@chakra-ui/react**: Component library with design tokens. Theme configured in `src/lib/styles/theme/`.

### Development Tools

- **vite-plugin-checker**: TypeScript type checking during development (disabled in production).
- **vite-tsconfig-paths**: Enables TypeScript path aliases (`@/*`) in Vite.

### Build Configuration

- **vite-plus (Rolldown)**: Experimental Vite build using Rolldown (Rust-based bundler) for faster builds.
- **vite-plugin-pwa**: PWA support (currently disabled, see `vite.config.ts`).

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration, plugins, dev server settings |
| `tsconfig.json` | TypeScript compiler options, path aliases |
| `biome.json` | Linting rules, formatting preferences, file patterns |
| `turbo.json` | Task dependencies and caching for CI/CD |

## Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` → `src/*`

Example: `import { Button } from '@/lib/components/ui/button'`

## Deployment

### Build Output

- **Command**: `pnpm build`
- **Output Directory**: `build/client`

### Platform-Specific Configuration

- **Vercel**: `vercel.json` - Build configuration
- **Netlify**: `netlify.toml` - SPA redirect rules, Node.js version
- **Nixpacks**: `nixpacks.toml` - Container build configuration

## Common Development Tasks

### Adding a New Route

1. Open `src/main.tsx`
2. Add a new route object inside `createBrowserRouter([...])`

```tsx
{
  path: '/about',
  lazy: () => import('@/lib/pages/about'),
}
```

Or inline for simpler routes:

```tsx
{
  path: '/about',
  Component: () => <About />,
}
```

> React Router v7 supports both eager and lazy-loaded routes. Use `lazy` for route-level code splitting.

### Adding a New Page Component

1. Create a directory in `src/lib/pages/`
2. Create `index.tsx` with the page component (default export recommended for lazy loading)

### Adding a New Zustand Store

1. Create a file in `src/lib/stores/`
2. Define your state interface and store with Zustand's `create`

```tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    }),
    { name: 'counter-storage' },
  ),
);
```

### Adding a New UI Component

1. Create component in `src/lib/components/ui/` or appropriate subdirectory
2. Follow existing patterns (forwardRef for DOM components, proper TypeScript types)
3. Export from component file

### Modifying Theme

Edit `src/lib/styles/theme/index.ts` to customize Chakra UI tokens, colors, and design system values.

## References

- [Vite Documentation](https://vitejs.dev)
- [Chakra UI Documentation](https://chakra-ui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [TypeScript Documentation](https://www.typescriptlang.org)
