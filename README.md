# Ops Products Management System

A full-stack Product Management System built with **Next.js, Prisma, and PostgreSQL**.  
This application allows teams to manage products, assign product owners, track inventory, and monitor operational status through a clean and responsive admin interface.

---

## Features

### Backend
- RESTful API built with Next.js API Routes
- Prisma ORM integration
- PostgreSQL database
- Product & Product Owner relational schema
- Sorting & pagination support
- Image URL support
- Database seeding
- Migration management

### Frontend
- Next.js App Router
- Bootstrap 5 responsive UI
- Clean modular component structure
- Product listing with:
  - Sorting (name, price, inventory)
  - Pagination
  - Image preview
- Product creation form
- Owner dropdown integration
- Loading states
- Professional UX layout

---

## Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | Next.js 14+ |
| Styling    | Bootstrap 5 |
| Backend    | Next.js API Routes |
| ORM        | Prisma |
| Database   | PostgreSQL |
| Runtime    | Node.js |

---

## Requirements

Make sure the following are installed:

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **PostgreSQL** ≥ 14
- Git

Check versions:

```bash
node -v
```


### Prisma Setup

**Generate Prisma client:**

```bash
npx prisma generate
```

**Run migrations:**

```bash
npx prisma migrate dev
```

**Seed initial data:**

```bash
npx prisma db seed
```

**(Optional) Open Prisma Studio:**

```bash
npx prisma studio
```

---

### Run Development Server

```bash
npm run dev
```

Your application will run at:

```
http://localhost:3000
```


npm -v
psql --version


### Database Schema Overview

#### ProductOwner

- `id`
- `name`
- `email` (unique)
- `products` (relation)

#### Product

- `id`
- `name`
- `sku`
- `price`
- `inventory`
- `status`
- `imageUrl`
- `ownerId` (foreign key)

---

### API Endpoints

#### Products

- `GET /api/products`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

#### Owners

- `GET /api/owners`
### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npx prisma migrate dev` | Run migrations |
| `npx prisma generate` | Generate Prisma client |
| `npx prisma studio` | Open database GUI |
| `npx prisma db seed` | Seed initial data |

---

### Assignment Highlights

- Clean and modular architecture
- Proper state management
- REST API integration
- Responsive admin UI
- Database migrations
- Professional UX standards

---

### Future Improvements

- Authentication & role-based access
- Image upload (Cloudinary/S3)
- Dashboard analytics
- Search & advanced filtering
- Toast notifications
- Dark mode
- Docker support
- CI/CD pipeline

---

### 👨‍💻 Author

Developed as a full-stack assignment project demonstrating:

- Database design
- ORM usage (Prisma)
- API development
- Frontend architecture
- UI/UX implementation
- End-to-end integration
