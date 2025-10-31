'use client';

import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { FaCalendar, FaClock, FaPhone } from 'react-icons/fa';

export default function EventsPage() {
  // Sample events data
  const events = [
    {
      id: '1',
      title: 'Friday Night Prayer Conference',
      excerpt: 'Join us every Friday night for powerful prayer, worship, and the word of God. Open to all believers seeking spiritual growth and fellowship.',
      eventDate: new Date('2024-11-01T19:00:00'),
      eventLocation: 'Conference Call: 1-701-801-9911',
      featured: true,
    },
    {
      id: '2',
      title: 'Wednesday Bible Study',
      excerpt: 'Deep dive into the scriptures with our international community of believers. Experience transformative teaching and discussion.',
      eventDate: new Date('2024-10-30T18:00:00'),
      eventLocation: 'Conference Call: 1-701-801-9911',
      featured: true,
    },
    {
      id: '3',
      title: 'Annual All Night Service 2025',
      excerpt: 'Join us for our annual all-night service filled with worship, prayer, testimonies, and celebration of God\'s faithfulness.',
      eventDate: new Date('2025-01-15T19:00:00'),
      eventLocation: 'Location TBA - Check back for updates',
      featured: true,
    },
    {
      id: '4',
      title: 'Divine Apparel Program - Chicago',
      excerpt: 'Join us as we distribute clothing, food, and essentials to underserved communities in Chicago.',
      eventDate: new Date('2024-11-10T10:00:00'),
      eventLocation: 'Chicago, IL - Contact for exact location',
    },
    {
      id: '5',
      title: 'Youth Prayer & Worship Night',
      excerpt: 'Special prayer and worship service for young people seeking God\'s direction and purpose.',
      eventDate: new Date('2024-11-20T19:00:00'),
      eventLocation: 'Conference Call: 1-701-801-9911',
    },
    {
      id: '6',
      title: 'Community Outreach - Jamaica',
      excerpt: 'Acts of Kindness outreach program serving communities in Kingston and Spanish Town.',
      eventDate: new Date('2024-12-01T09:00:00'),
      eventLocation: 'Kingston & Spanish Town, Jamaica',
    },
  ];

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
            <FaCalendar className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join us for prayer, worship, fellowship, and service opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recurring Events Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Regular Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-3xl text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Friday Nights</h3>
                  </div>
                  <p className="text-gray-700 mb-3">Prayer Conference & Worship</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <FaPhone className="mr-2" />
                    <span>1-701-801-9911</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Open to all who desire the word of God, prayer, encouragement, and deliverance
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-3xl text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Wednesdays</h3>
                  </div>
                  <p className="text-gray-700 mb-3">Bible Study via Conference Line</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <FaPhone className="mr-2" />
                    <span>1-701-801-9911</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Deep scriptural teaching and group discussion for spiritual growth
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our community through prayer meetings, outreach programs, and special services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-200 mb-8">
                Don't miss out on our upcoming events and programs. Subscribe to our updates or follow
                us on social media to stay connected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="https://www.facebook.com/HRFMLIFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
