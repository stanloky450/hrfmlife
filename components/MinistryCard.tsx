'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MinistryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const MinistryCard = ({ icon, title, description, features }: MinistryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 card-hover"
    >
      <div className="relative h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl z-10"
        >
          {icon}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <svg
                className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MinistryCard;
