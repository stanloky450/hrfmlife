'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { format } from 'date-fns';

interface EventCardProps {
  id: string;
  title: string;
  excerpt: string;
  eventDate: Date;
  eventLocation: string;
  imageUrl?: string;
  featured?: boolean;
}

const EventCard = ({
  id,
  title,
  excerpt,
  eventDate,
  eventLocation,
  imageUrl,
  featured,
}: EventCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 card-hover ${
        featured ? 'ring-4 ring-yellow-400' : ''
      }`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaCalendar className="text-white text-6xl opacity-50" />
          </div>
        )}
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative bg-white p-6">
        {/* Date Badge */}
        <div className="absolute -top-8 left-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl px-4 py-3 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold">{format(new Date(eventDate), 'd')}</div>
            <div className="text-xs uppercase">{format(new Date(eventDate), 'MMM')}</div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <FaClock className="mr-2 text-blue-600" />
              <span>{format(new Date(eventDate), 'EEEE, MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="mr-2 text-blue-600" />
              <span>{eventLocation}</span>
            </div>
          </div>

          <Link
            href={`/events/${id}`}
            className="inline-block text-blue-600 font-medium hover:text-purple-600 transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
