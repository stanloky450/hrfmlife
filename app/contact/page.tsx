'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
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
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: <FaPhone className="text-4xl" />,
                title: 'Phone',
                info: ['1-701-801-9911', 'Available during service times'],
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: <FaEnvelope className="text-4xl" />,
                title: 'Email',
                info: ['info@hrfmlife.com', 'We reply within 24 hours'],
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: <FaMapMarkerAlt className="text-4xl" />,
                title: 'Address',
                info: ['1658 North Milwaukee Avenue', 'Chicago, IL, United States'],
                color: 'from-pink-500 to-pink-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-transparent hover:border-blue-600 transition-all"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                {item.info.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Service Times */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <FaClock className="text-4xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Service Times</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Friday Night</h3>
                <p className="text-gray-700 mb-2">Prayer Conference & Worship</p>
                <p className="text-blue-600 font-medium">Conference Line: 1-701-801-9911</p>
                <p className="text-sm text-gray-500 mt-2">Open to all who desire the word of God</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wednesday</h3>
                <p className="text-gray-700 mb-2">Bible Study</p>
                <p className="text-blue-600 font-medium">Conference Line: 1-701-801-9911</p>
                <p className="text-sm text-gray-500 mt-2">Deep dive into scriptures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow us on social media to stay updated with our latest events and messages
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/HRFMLIFE"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg">
                  <FaFacebook className="text-3xl text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <FaInstagram className="text-3xl text-white" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/90 to-purple-900/90">
            <div className="text-center text-white">
              <FaMapMarkerAlt className="text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
              <p className="text-lg">1658 North Milwaukee Avenue</p>
              <p className="text-lg">Chicago, IL, United States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
