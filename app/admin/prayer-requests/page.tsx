'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPrayingHands, FaCheck, FaHeart } from 'react-icons/fa';

interface PrayerRequest {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  message: string;
  status: 'pending' | 'praying' | 'answered';
  isPrivate: boolean;
  createdAt: string;
}

export default function AdminPrayerRequestsPage() {
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/prayer-requests');
      const data = await response.json();
      if (data.success) {
        setRequests(data.data);
      }
    } catch (error) {
      console.error('Error fetching prayer requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/prayer-requests/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setRequests(
          requests.map((req) =>
            req._id === id ? { ...req, status: newStatus as any } : req
          )
        );
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredRequests =
    filter === 'all' ? requests : requests.filter((req) => req.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'praying':
        return 'bg-blue-100 text-blue-800';
      case 'answered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Prayer Requests</h1>
          <p className="text-gray-600">
            Manage and pray over requests from the community
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Total Requests',
              value: requests.length,
              color: 'from-blue-500 to-blue-600',
            },
            {
              label: 'Pending',
              value: requests.filter((r) => r.status === 'pending').length,
              color: 'from-yellow-500 to-yellow-600',
            },
            {
              label: 'Praying',
              value: requests.filter((r) => r.status === 'praying').length,
              color: 'from-purple-500 to-purple-600',
            },
            {
              label: 'Answered',
              value: requests.filter((r) => r.status === 'answered').length,
              color: 'from-green-500 to-green-600',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white text-2xl mb-4`}
              >
                <FaPrayingHands />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { id: 'all', label: 'All Requests' },
            { id: 'pending', label: 'Pending' },
            { id: 'praying', label: 'Praying' },
            { id: 'answered', label: 'Answered' },
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Prayer Requests List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <motion.div
                key={request._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{request.name}</h3>
                      {request.isPrivate && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          Private
                        </span>
                      )}
                    </div>
                    {request.email && (
                      <p className="text-sm text-gray-600">Email: {request.email}</p>
                    )}
                    {request.phone && (
                      <p className="text-sm text-gray-600">Phone: {request.phone}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(request.createdAt).toLocaleDateString()} at{' '}
                      {new Date(request.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(
                      request.status
                    )}`}
                  >
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 leading-relaxed">{request.message}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {request.status === 'pending' && (
                    <button
                      onClick={() => updateStatus(request._id, 'praying')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <FaPrayingHands />
                      <span>Start Praying</span>
                    </button>
                  )}
                  {request.status === 'praying' && (
                    <button
                      onClick={() => updateStatus(request._id, 'answered')}
                      className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
                    >
                      <FaCheck />
                      <span>Mark as Answered</span>
                    </button>
                  )}
                  {request.status === 'answered' && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <FaHeart />
                      <span className="text-sm font-medium">Prayer Answered</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <FaPrayingHands className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No prayer requests found</p>
          </div>
        )}
      </div>
    </div>
  );
}
