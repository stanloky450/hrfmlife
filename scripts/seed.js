// JavaScript version of seed file for easy execution
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

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

// Define User Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['superuser', 'admin', 'editor'],
      default: 'editor',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seedDatabase() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    console.log('URI:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')); // Hide password in log
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB\n');

    // Clear existing users
    console.log('Clearing existing users...');
    const deleteResult = await User.deleteMany({});
    console.log(`✓ Cleared ${deleteResult.deletedCount} existing users\n`);

    // Create users with hashed passwords
    console.log('Creating users...');
    for (const userData of users) {
      const hashedPassword = await bcrypt.hash(userData.password, 12);

      const user = await User.create({
        ...userData,
        password: hashedPassword,
      });

      console.log(`✓ Created ${user.role}: ${user.email}`);
    }

    console.log('\n' + '='.repeat(60));
    console.log('🎉 SEED COMPLETED SUCCESSFULLY!');
    console.log('='.repeat(60) + '\n');

    console.log('You can now login with any of the following credentials:\n');

    users.forEach((user) => {
      console.log(`┌─ ${user.role.toUpperCase()} ${'─'.repeat(50 - user.role.length)}`);
      console.log(`│  Email:    ${user.email}`);
      console.log(`│  Password: ${user.password}`);
      console.log(`└${'─'.repeat(58)}\n`);
    });

    console.log('⚠️  IMPORTANT: Change these passwords in production!\n');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
}

seedDatabase();
