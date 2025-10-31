'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaPrayingHands, FaSignOutAlt, FaUser } from 'react-icons/fa';

export default function AdminHeader() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <FaPrayingHands className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">HRFM Admin</h1>
            </div>
          </Link>

          {/* User Info & Actions */}
          {session?.user && (
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <FaUser className="text-gray-500" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{session.user.name}</p>
                  <p className="text-gray-500 capitalize">{session.user.role}</p>
                </div>
              </div>

              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                View Site
              </Link>

              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
