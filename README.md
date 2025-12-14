# LuanRoger / next-open-forge

**A lite production-grade Turborepo template for Next.js apps. Using only open-source tools.**

## Overview

[next-open-forge](https://github.com/LuanRoger/next-open-forge) is a fork of [next-forge](https://www.next-forge.com) that replaces proprietary services with open-source alternatives and removing some specific services to cover simpler use-cases. It's designed to be a comprehensive starting point for building SaaS applications, providing a solid, opinionated foundation with minimal configuration required.

Built on a decade of experience building web applications, next-forge balances speed and quality to help you ship thoroughly-built products faster.

### Philosophy

next-forge is built around five core principles:

- **Fast** — Quick to build, run, deploy, and iterate on
- **Cheap** — Free to start with services that scale with you
- **Opinionated** — Integrated tooling designed to work together
- **Modern** — Latest stable features with healthy community support
- **Safe** — End-to-end type safety and robust security posture

## Features

next-open-forge comes with batteries included:

### Apps

- **Web** — Marketing website with landing pages
- **App** — Main application with authentication and database integration
- **Docs** — Documentation site powered by Mintlify
- **Storybook** — Component development environment

### Packages

- **Authentication** — Powered by [Better Auth](https://www.better-auth.com)
- **Database** — Type-safe ORM with migrations. Powered by [Drizzle ORM](https://drizzle.team)
- **Design System** — Comprehensive component library with dark mode
- **Analytics** — Web ([Google Analytics](https://developers.google.com/analytics)) and product ([Posthog](https://posthog.com))
- **SEO** — Metadata management, sitemaps, and JSON-LD
- **Internationalization** — Multi-language support

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io) (or npm/yarn/bun)
- [Stripe CLI](https://docs.stripe.com/stripe-cli) for local webhook testing

### Setup

1. Configure your environment variables
2. Set up required service accounts (Clerk, Stripe, Resend, etc.)
3. Run the development server

For detailed setup instructions, read the [documentation](https://www.next-forge.com/docs).

## Structure

next-forge uses a monorepo structure managed by Turborepo:

```
next-forge/
├── apps/           # Deployable applications
│   ├── web/        # Marketing website (port 3001)
│   ├── app/        # Main application (port 3000)
│   ├── api/        # API server
│   ├── docs/       # Documentation
│   ├── email/      # Email templates
│   └── storybook/  # Component library
└── packages/       # Shared packages
    ├── design-system/
    ├── database/
    ├── auth/
    └── ...
```

Each app is self-contained and independently deployable. Packages are shared across apps for consistency and maintainability.

## Documentation

Full documentation is available at [next-forge.com/docs](https://www.next-forge.com/docs), including:

- Detailed setup guides
- Package documentation
- Migration guides for swapping providers
- Deployment instructions
- Examples and recipes

## Contributing

We welcome contributions! See the [contributing guide](https://github.com/vercel/next-forge/blob/main/.github/CONTRIBUTING.md) for details.

## License

MIT
