'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaNewspaper, FaPrayingHands, FaUsers, FaChartLine, FaPlus, FaCalendar } from 'react-icons/fa';

export default function AdminDashboard() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { label: 'Total Posts', value: '24', icon: <FaNewspaper />, color: 'from-blue-500 to-blue-600' },
    { label: 'Prayer Requests', value: '156', icon: <FaPrayingHands />, color: 'from-purple-500 to-purple-600' },
    { label: 'Upcoming Events', value: '6', icon: <FaCalendar />, color: 'from-green-500 to-green-600' },
    { label: 'Active Users', value: '1,234', icon: <FaUsers />, color: 'from-orange-500 to-orange-600' },
  ];

  const quickActions = [
    {
      title: 'Create New Post',
      description: 'Write a new blog post, announcement, or testimony',
      href: '/admin/posts/new',
      icon: <FaPlus />,
      color: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Manage Posts',
      description: 'View, edit, or delete existing posts',
      href: '/admin/posts',
      icon: <FaNewspaper />,
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Prayer Requests',
      description: 'View and manage prayer requests from visitors',
      href: '/admin/prayer-requests',
      icon: <FaPrayingHands />,
      color: 'from-green-600 to-teal-600',
    },
    {
      title: 'Analytics',
      description: 'View website statistics and engagement metrics',
      href: '/admin/analytics',
      icon: <FaChartLine />,
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Welcome back! Manage your website content and monitor activity.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white text-2xl mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={action.href} className="block">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${action.color} text-white text-2xl mb-4`}>
                      {action.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-gray-600">{action.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {[
                { action: 'New prayer request submitted', time: '5 minutes ago', type: 'prayer' },
                { action: 'Blog post published: "The Power of Prayer"', time: '2 hours ago', type: 'post' },
                { action: 'Event updated: Friday Night Prayer', time: '1 day ago', type: 'event' },
                { action: 'New testimony received', time: '2 days ago', type: 'testimony' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      activity.type === 'prayer' ? 'bg-purple-500' :
                      activity.type === 'post' ? 'bg-blue-500' :
                      activity.type === 'event' ? 'bg-green-500' :
                      'bg-orange-500'
                    }`} />
                    <span className="text-gray-700">{activity.action}</span>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
  );
}
