# RVIT ERP

This repository contains the foundation for the RVIT Enterprise Resource Planning System, including a separate Next.js frontend and Express.js + Prisma backend, designed for role-based academic and administrative management.

## Current status

This repository is currently in the initial foundation phase. The project structure, environment configuration, and base app scaffolding have been laid down so the next phases can add the role-specific dashboards and modules.

## Architecture

- Frontend: Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Express.js + TypeScript + Prisma ORM + PostgreSQL
- Authentication: JWT + refresh tokens + HTTP-only cookies
- Permissions: Role-based access control (RBAC)
- Deployment: Docker-ready with environment-based configuration

## Repository structure

```text
/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── lib/
│   ├── services/
│   ├── types/
│   └── utils/
├── backend/
│   ├── prisma/
│   ├── src/
│   └── tests/
├── docs/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
└── ...
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example environment file and update values:

```bash
cp .env.example .env
```

### 3. Start services

```bash
docker compose up -d postgres
npm run dev:backend
npm run dev:frontend
```

## Planned phases

1. Project audit and foundation setup
2. Authentication and RBAC
3. Super Admin management
4. Admin operations
5. Facility workflows
6. Student workflows
7. Attendance, payments, materials, and announcements
8. Reporting, analytics, audit logs, and testing
9. Production hardening and deployment preparation

## Notes

This repository intentionally starts with a clean monorepo scaffold and does not include production data or mock-only user flows. The implementation will be expanded incrementally by module.
