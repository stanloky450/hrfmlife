import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hrfm-church';

const users = [
  {
    name: 'Super Administrator',
    email: 'superadmin@hrfmlife.com',
    password: 'SuperAdmin123!',
    role: 'superuser',
  },
  {
    name: 'Admin User',
    email: 'admin@hrfmlife.com',
    password: 'Admin123!',
    role: 'admin',
  },
  {
    name: 'Editor User',
    email: 'editor@hrfmlife.com',
    password: 'Editor123!',
    role: 'editor',
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing users (optional - comment out if you want to keep existing users)
    console.log('\nClearing existing users...');
    await User.deleteMany({});
    console.log('Existing users cleared');

    // Create users with hashed passwords
    console.log('\nCreating users...');
    for (const userData of users) {
      const hashedPassword = await bcrypt.hash(userData.password, 12);

      const user = await User.create({
        ...userData,
        password: hashedPassword,
      });

      console.log(`✓ Created ${user.role}: ${user.email}`);
      console.log(`  Password: ${userData.password}`);
    }

    console.log('\n=== Seed completed successfully! ===\n');
    console.log('You can now login with any of the following credentials:\n');

    users.forEach((user) => {
      console.log(`${user.role.toUpperCase()}:`);
      console.log(`  Email: ${user.email}`);
      console.log(`  Password: ${user.password}\n`);
    });

    console.log('⚠️  IMPORTANT: Change these passwords in production!\n');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
}

seedDatabase();
