'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts
  const posts = [
    {
      id: '1',
      title: 'The Power of Prayer and Fasting',
      excerpt: 'Discover how prayer and fasting can transform your spiritual life and bring breakthrough in difficult situations. Learn biblical principles and practical applications.',
      author: 'HRFM Team',
      createdAt: new Date('2024-10-15'),
      category: 'blog',
    },
    {
      id: '2',
      title: 'Divine Apparel Program Reaches New Communities',
      excerpt: 'Our outreach continues to expand, providing essential items to underserved communities across multiple countries. Read about our latest initiatives and impact.',
      author: 'Outreach Team',
      createdAt: new Date('2024-10-10'),
      category: 'announcement',
    },
    {
      id: '3',
      title: 'Testimony: Healing Through Faith',
      excerpt: 'Read about miraculous healing testimonies from our prayer line participants and how God continues to move in powerful ways in people\'s lives.',
      author: 'Community',
      createdAt: new Date('2024-10-05'),
      category: 'testimony',
    },
    {
      id: '4',
      title: 'Understanding Isaiah 61: Our Ministry Foundation',
      excerpt: 'Dive deep into the scriptures that form the foundation of our ministry calling and learn how these verses apply to our modern-day service.',
      author: 'Pastor John',
      createdAt: new Date('2024-09-28'),
      category: 'blog',
    },
    {
      id: '5',
      title: 'Join Us for Annual All Night Service 2025',
      excerpt: 'Mark your calendars for our upcoming annual all-night service. Details about the event, schedule, and how to participate.',
      author: 'Events Team',
      createdAt: new Date('2024-09-20'),
      category: 'event',
    },
    {
      id: '6',
      title: 'Overcoming Spiritual Warfare Through Prayer',
      excerpt: 'Practical insights on recognizing and overcoming spiritual battles in your daily life through prayer, fasting, and scriptural meditation.',
      author: 'HRFM Team',
      createdAt: new Date('2024-09-15'),
      category: 'blog',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'blog', label: 'Blog' },
    { id: 'announcement', label: 'Announcements' },
    { id: 'event', label: 'Events' },
    { id: 'testimony', label: 'Testimonies' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Blog & Updates
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay connected with our ministry through teachings, testimonies, and announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl text-gray-200 mb-8">
                Follow us on social media to receive the latest updates, teachings, and prayer requests
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.facebook.com/HRFMLIFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Follow on Facebook
                </a>
                <a
                  href="/prayer-request"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
                >
                  Submit Prayer Request
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
