'use client';

import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaPrayingHands, FaHeart, FaBook } from 'react-icons/fa';

export default function AboutPage() {
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
              About Healing Rain Falling Ministries
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              An International Prayer and Deliverance Ministry Beyond the Four Walls
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Healing Rain Falling Ministries (HRFM) is a non-denomination ministry and a 501(c)(3)
                  nonprofit organization. Founded on the principles of prayer, fasting, and deep scriptural
                  understanding, we are dedicated to fulfilling the words of Isaiah 61:1-5 KJV and Matthew 10:8.
                </p>
                <p>
                  Our ministry is composed of believers from various countries including the Bahamas, Jamaica,
                  Canada, and the United States, all united in our common purpose of spreading the Gospel and
                  serving those in need. We are an International Prayer and Deliverance Ministry that operates
                  beyond the four walls of a traditional building, reaching souls wherever they may be.
                </p>
                <p>
                  For the past eight years, we have been serving underserved communities across the USA, Jamaica,
                  Trinidad and Tobago, Ghana, and Nigeria. Through our Divine Apparel Program and Acts of Kindness
                  initiatives, we provide humanitarian help in terms of food, water, clothing, intercessory prayers,
                  free life coaching, free mentoring, and charity work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our ministry and mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaPrayingHands className="text-5xl" />,
                title: 'Prayer',
                description: 'We believe in the transformative power of prayer and maintain constant communication with God.',
              },
              {
                icon: <FaBook className="text-5xl" />,
                title: 'Scripture',
                description: 'Understanding and living by God\'s Word is central to our faith and ministry.',
              },
              {
                icon: <FaHeart className="text-5xl" />,
                title: 'Compassion',
                description: 'We serve with love and compassion, meeting both spiritual and physical needs.',
              },
              {
                icon: <FaGlobeAmericas className="text-5xl" />,
                title: 'Unity',
                description: 'We unite believers from all nations in our common mission to serve God.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To fulfill Isaiah 61:1-5 KJV and Matthew 10:8 by bringing the good news to the meek,
                binding up the brokenhearted, proclaiming liberty to the captives, and opening the
                prison to those who are bound.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We freely give as we have freely received, ministering healing, raising the dead,
                cleansing the lepers, and casting out devils through the power of prayer and faith.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To build an international community of believers who are empowered through prayer,
                fasting, and the Word of God to transform lives and communities around the world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where no one suffers alone, where prayer chains span continents,
                and where the love of Christ is demonstrated through both spiritual ministry and
                practical acts of kindness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture Foundation */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Scriptural Foundation</h2>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Isaiah 61:1-5 KJV</h3>
                <p className="text-gray-200 leading-relaxed italic">
                  "The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach
                  good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim
                  liberty to the captives, and the opening of the prison to them that are bound..."
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Matthew 10:8 KJV</h3>
                <p className="text-gray-200 leading-relaxed italic">
                  "Heal the sick, cleanse the lepers, raise the dead, cast out devils: freely ye have
                  received, freely give."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
