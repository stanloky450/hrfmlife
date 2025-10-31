'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaDollarSign, FaHandsHelping, FaPrayingHands } from 'react-icons/fa';

export default function SupportPage() {
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
            <FaHeart className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Support Our Ministry
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your generous support helps us continue our mission of prayer, deliverance, and serving underserved communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to partner with us in ministry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaDollarSign className="text-5xl" />,
                title: 'Financial Support',
                description: 'Your financial gifts enable us to expand our outreach programs and serve more communities.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: <FaHandsHelping className="text-5xl" />,
                title: 'Volunteer',
                description: 'Join our team in serving through Divine Apparel Program and Acts of Kindness initiatives.',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: <FaPrayingHands className="text-5xl" />,
                title: 'Prayer Support',
                description: 'Commit to praying regularly for our ministry, our team, and those we serve.',
                color: 'from-pink-500 to-pink-600',
              },
            ].map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${way.color} text-white mb-6`}>
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                <p className="text-gray-600 leading-relaxed">{way.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-white rounded-3xl shadow-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to Give</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">501(c)(3) Tax-Deductible</h3>
                  <p className="text-gray-700">
                    Healing Rain Falling Ministries is a registered 501(c)(3) nonprofit organization.
                    All donations are tax-deductible to the full extent allowed by law.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us for Donation Details</h3>
                  <p className="text-gray-700 mb-4">
                    For information about making a donation or to discuss partnership opportunities, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Phone:</span> 1-701-801-9911</p>
                    <p><span className="font-semibold">Email:</span> info@hrfmlife.com</p>
                    <p><span className="font-semibold">Address:</span> 1658 North Milwaukee Avenue, Chicago, IL</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us to Give
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your support makes a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '8+', label: 'Years of Ministry' },
              { number: '6', label: 'Countries Served' },
              { number: '1000+', label: 'Lives Touched' },
              { number: '100%', label: 'Committed to Service' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Partner With Us Today</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Together, we can make a lasting impact in communities around the world through prayer,
              service, and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/prayer-request"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                Request Prayer
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
