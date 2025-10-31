'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUser, FaClock } from 'react-icons/fa';
import { format } from 'date-fns';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: Date;
  imageUrl?: string;
  category: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  author,
  createdAt,
  imageUrl,
  category,
}: BlogCardProps) => {
  const getCategoryColor = (cat: string) => {
    const colors: { [key: string]: string } = {
      announcement: 'bg-blue-500',
      event: 'bg-purple-500',
      testimony: 'bg-green-500',
      blog: 'bg-orange-500',
    };
    return colors[cat] || 'bg-gray-500';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 card-hover"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
            <span className="text-4xl">📝</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span
            className={`${getCategoryColor(
              category
            )} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <FaUser className="mr-1 text-blue-600" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1 text-blue-600" />
            <span>{format(new Date(createdAt), 'MMM d, yyyy')}</span>
          </div>
        </div>

        <Link
          href={`/blog/${id}`}
          className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
