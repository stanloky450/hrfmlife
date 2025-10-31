'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-red-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          <FaExclamationTriangle className="text-6xl text-red-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Unauthorized Access</h1>
          <p className="text-gray-600 mb-8">
            You don't have permission to access this area. Only administrators and superusers can
            access the admin dashboard.
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Go to Homepage
            </Link>
            <Link
              href="/auth/login"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Try Another Account
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
