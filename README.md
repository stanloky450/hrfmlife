# Healing Rain Falling Ministries Website

A modern, elegant church website built with Next.js 15, featuring beautiful animations with Framer Motion, MongoDB for data management, and a comprehensive admin dashboard.

## 🌟 Features

### Frontend
- **Modern Design**: Clean, elegant interface with gradient backgrounds and smooth animations
- **Framer Motion Animations**: Eye-catching transitions and interactive elements
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Meta tags and structured data for better search visibility

### Pages
- **Home**: Dynamic hero section, ministry cards, upcoming events, and latest posts
- **About**: Ministry history, mission, vision, and core values
- **Ministries**: Detailed information about all ministry programs
- **Events**: Upcoming events and regular service schedules
- **Blog**: Articles, announcements, testimonies, and updates
- **Contact**: Contact information, service times, and social media links
- **Prayer Request**: Form for visitors to submit prayer requests

### Admin Dashboard
- **Secure Authentication**: NextAuth v5 with role-based access control
- **Dashboard Overview**: Statistics and recent activity
- **Post Management**: Create, edit, publish, and delete posts
- **Prayer Request Management**: View, track, and update prayer request statuses
- **Content Categories**: Blog posts, announcements, events, and testimonies
- **Status Management**: Draft/publish posts, track prayer request progress
- **User Roles**: SuperUser, Admin, and Editor roles with different permissions

### Technical Features
- **Next.js 15**: Latest App Router with Server Components
- **TypeScript**: Type-safe code throughout the application
- **MongoDB**: Scalable database for content and prayer requests
- **NextAuth v5**: Secure authentication with JWT and role-based access
- **API Routes**: RESTful API for content management
- **Tailwind CSS**: Utility-first styling with custom theme
- **React Icons**: Beautiful icon library
- **Bcrypt**: Secure password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB instance (local or cloud like MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HRFM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example file and update with your values:
   ```bash
   cp .env.example .env
   ```

   Generate a secure NextAuth secret:
   ```bash
   openssl rand -base64 32
   ```

   Update `.env`:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/hrfm-church

   # NextAuth Configuration
   NEXTAUTH_SECRET=your-generated-secret-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Start MongoDB**

   Make sure MongoDB is running:
   ```bash
   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

5. **Seed the database**

   Create initial admin users:
   ```bash
   npm run seed
   ```

   This creates three users:
   - **SuperUser**: superadmin@hrfmlife.com / SuperAdmin123!
   - **Admin**: admin@hrfmlife.com / Admin123!
   - **Editor**: editor@hrfmlife.com / Editor123!

   ⚠️ **Change these passwords in production!**

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Access the application**

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Login: [http://localhost:3000/auth/login](http://localhost:3000/auth/login)
   - Admin Dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Project Structure

```
HRFM/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── admin/               # Admin dashboard
│   │   ├── posts/          # Post management
│   │   ├── prayer-requests/ # Prayer request management
│   │   └── page.tsx        # Dashboard home
│   ├── api/                 # API routes
│   │   ├── posts/          # Posts API
│   │   └── prayer-requests/ # Prayer requests API
│   ├── blog/               # Blog page
│   ├── contact/            # Contact page
│   ├── events/             # Events page
│   ├── ministries/         # Ministries page
│   ├── prayer-request/     # Prayer request form
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # Reusable components
│   ├── BlogCard.tsx        # Blog post card
│   ├── EventCard.tsx       # Event card
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header/navigation
│   ├── HeroSection.tsx     # Homepage hero
│   └── MinistryCard.tsx    # Ministry card
├── lib/                     # Utility functions
│   └── mongodb.ts          # MongoDB connection
├── models/                  # MongoDB schemas
│   ├── Post.ts             # Post model
│   ├── PrayerRequest.ts    # Prayer request model
│   └── User.ts             # User model (for future auth)
└── public/                  # Static assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Content
Update the content in each page component to match your church's information.

### Images
Place your church logo and images in the `public/` directory and update references in components.

## 🔐 Authentication & Authorization

### User Roles

The system supports three user roles:

1. **SuperUser** - Full access to all features, can manage other admins
2. **Admin** - Can manage content, posts, and prayer requests
3. **Editor** - Limited access (customizable)

Only **SuperUser** and **Admin** roles can access the admin dashboard.

### Logging In

1. Navigate to `/auth/login`
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to the admin dashboard

### Default Credentials

After running the seed script:

| Role | Email | Password |
|------|-------|----------|
| SuperUser | superadmin@hrfmlife.com | SuperAdmin123! |
| Admin | admin@hrfmlife.com | Admin123! |
| Editor | editor@hrfmlife.com | Editor123! |

⚠️ **IMPORTANT**: Change these passwords immediately in production!

For detailed authentication documentation, see [AUTHENTICATION.md](AUTHENTICATION.md)

## 📝 Admin Dashboard Usage

### Accessing the Dashboard
1. Login at `/auth/login`
2. Navigate to `/admin` (you'll be redirected if not authenticated)

### Creating Posts
1. Go to `/admin/posts/new`
2. Fill in the title, content, excerpt, and other details
3. Choose a category (blog, announcement, event, testimony)
4. Check "Publish immediately" or save as draft
5. Click "Create Post"

### Managing Prayer Requests
1. Go to `/admin/prayer-requests`
2. View all submitted prayer requests
3. Update status: Pending → Praying → Answered
4. Track progress and organize prayer teams

## 🔐 Security Features

### Implemented Security

✅ **Authentication**: NextAuth v5 with secure JWT sessions
✅ **Password Hashing**: Bcrypt with 12 salt rounds
✅ **Route Protection**: Middleware protects all admin routes
✅ **Role-Based Access**: Only admin/superuser can access dashboard
✅ **Secure Sessions**: HTTP-only cookies with secure flags

### Production Security Checklist

- [ ] Change all default passwords
- [ ] Use MongoDB Atlas or secure MongoDB instance
- [ ] Generate strong NEXTAUTH_SECRET (`openssl rand -base64 32`)
- [ ] Enable HTTPS in production
- [ ] Set up rate limiting for auth endpoints
- [ ] Monitor authentication logs
- [ ] Regular security audits
- [ ] Never commit `.env` file to version control
- [ ] Use environment variables for all secrets
- [ ] Enable MongoDB authentication and encryption

## 🚢 Deployment

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- **Netlify**: Use Next.js plugin
- **Railway**: Supports Next.js and MongoDB
- **DigitalOcean**: App Platform or Droplet
- **AWS**: Amplify or EC2

## 📱 MongoDB Setup

### Local MongoDB
```bash
# Install MongoDB
brew install mongodb-community@7.0  # macOS
# or download from mongodb.com

# Start MongoDB
brew services start mongodb-community@7.0
```

### MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Add to `.env` file

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created for Healing Rain Falling Ministries.

## 💬 Support

For questions or support:
- **Email**: info@hrfmlife.com
- **Phone**: 1-701-801-9911
- **Address**: 1658 North Milwaukee Avenue, Chicago, IL

## 🙏 About HRFM

Healing Rain Falling Ministries (HRFM) is a non-denomination ministry and 501(c)(3) nonprofit organization. We believe in the power of prayer, fasting, and understanding the scriptures. Our international team spans across the Bahamas, Jamaica, Canada, and the United States, united in fulfilling Isaiah 61:1-5 KJV and Matthew 10:8.

### Regular Services
- **Friday Nights**: Prayer Conference (Call: 1-701-801-9911)
- **Wednesdays**: Bible Study (Call: 1-701-801-9911)

---

Built with ❤️ for Healing Rain Falling Ministries
