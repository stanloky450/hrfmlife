# Authentication Guide

This project uses NextAuth v5 for authentication with role-based access control.

## 🔐 User Roles

The system supports three user roles:

1. **SuperUser** - Full access to all features and can manage other admins
2. **Admin** - Can manage content, posts, and prayer requests
3. **Editor** - Limited access (currently same as admin, but can be customized)

Only **SuperUser** and **Admin** roles can access the admin dashboard.

## 🚀 Quick Start

### 1. Set Up Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Generate a secure NextAuth secret:
```bash
openssl rand -base64 32
```

Update `.env` with your MongoDB URI and the generated secret:
```env
MONGODB_URI=mongodb://localhost:27017/hrfm-church
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000
```

### 2. Start MongoDB

Make sure MongoDB is running:
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

### 3. Seed the Database

Run the seed script to create initial users:
```bash
npm run seed
```

This will create three users:

| Role | Email | Password |
|------|-------|----------|
| SuperUser | superadmin@hrfmlife.com | SuperAdmin123! |
| Admin | admin@hrfmlife.com | Admin123! |
| Editor | editor@hrfmlife.com | Editor123! |

⚠️ **IMPORTANT**: Change these passwords in production!

### 4. Start the Application

```bash
npm run dev
```

### 5. Login

Navigate to: http://localhost:3000/auth/login

Use any of the credentials above to login.

## 📝 Using the Admin Dashboard

After logging in, you'll have access to:

- **Dashboard**: Overview of stats and recent activity
- **Post Management**: Create, edit, publish, and delete posts
- **Prayer Requests**: View and manage prayer requests with status tracking

### Creating Posts

1. Go to `/admin/posts/new`
2. Fill in the post details:
   - Title (required)
   - Excerpt (required, max 300 chars)
   - Content (required)
   - Author (required)
   - Category (blog, announcement, event, testimony)
   - Image URL (optional)
   - Event details (if category is "event")
3. Choose to publish immediately or save as draft
4. Click "Create Post"

### Managing Prayer Requests

1. Go to `/admin/prayer-requests`
2. View all submitted prayer requests
3. Update status:
   - **Pending**: Just received
   - **Praying**: Currently being prayed for
   - **Answered**: Prayer has been answered
4. Filter by status to organize workflow

## 🔒 Security Features

### Route Protection

Admin routes (`/admin/*`) are protected by middleware:
- Redirects unauthenticated users to login page
- Checks user role (only admin/superuser can access)
- Redirects unauthorized users to `/auth/unauthorized`

### Password Security

- Passwords are hashed using bcrypt with 12 salt rounds
- Never stored in plain text
- Secure comparison during authentication

### Session Management

- JWT-based sessions
- Secure cookie storage
- Automatic session expiration

## 🛠 Customization

### Adding New Users

You can add users in two ways:

#### Option 1: Using MongoDB Directly

```javascript
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash('YourPassword123!', 12);

// Insert into MongoDB
db.users.insertOne({
  name: "New Admin",
  email: "newadmin@hrfmlife.com",
  password: hashedPassword,
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
});
```

#### Option 2: Create a User Management API

Create an API route at `/app/api/users/route.ts` (superuser only):

```typescript
import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const session = await auth();

  if (!session || session.user.role !== 'superuser') {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, email, password, role } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return Response.json({ success: true, user });
}
```

### Changing User Roles

To change what roles can access the admin panel, edit `middleware.ts`:

```typescript
// Allow all authenticated users
if (!session) {
  return NextResponse.redirect(new URL('/auth/login', request.url));
}

// Or be more specific
const allowedRoles = ['superuser', 'admin', 'moderator'];
if (!allowedRoles.includes(session.user?.role)) {
  return NextResponse.redirect(new URL('/auth/unauthorized', request.url));
}
```

## 🐛 Troubleshooting

### "Invalid email or password"

- Check that the seed script ran successfully
- Verify MongoDB is running
- Check the email and password are correct
- Look at MongoDB to confirm users exist

### "Unauthorized Access"

- Your user role is not admin or superuser
- Login with a different account
- Check the user's role in MongoDB

### Session Not Persisting

- Check `NEXTAUTH_SECRET` is set in `.env`
- Make sure cookies are enabled in your browser
- Clear cookies and try logging in again

### Cannot Connect to MongoDB

- Verify MongoDB is running
- Check `MONGODB_URI` in `.env`
- Test connection: `mongosh mongodb://localhost:27017/hrfm-church`

## 🚀 Production Deployment

### Environment Variables

Set these in your hosting platform:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/hrfm-church
NEXTAUTH_SECRET=<generate-a-secure-random-string>
NEXTAUTH_URL=https://yourdomain.com
```

### Security Checklist

- [ ] Change all default passwords
- [ ] Use MongoDB Atlas or secure MongoDB instance
- [ ] Generate strong NEXTAUTH_SECRET
- [ ] Enable HTTPS
- [ ] Set up rate limiting
- [ ] Monitor authentication logs
- [ ] Regular security audits
- [ ] Enable 2FA (future enhancement)

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Security Checklist](https://www.mongodb.com/docs/manual/administration/security-checklist/)
- [Next.js Authentication](https://nextjs.org/docs/authentication)

## 🤝 Support

For authentication issues or questions:
- Check the logs: Look at browser console and terminal output
- Review this documentation
- Contact the development team
