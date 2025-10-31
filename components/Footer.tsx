'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPrayingHands } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FaPrayingHands className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HRFM Life</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Healing Rain Falling Ministries is an international prayer and deliverance ministry
              dedicated to fulfilling the scriptures of Isaiah 61:1-5 and Matthew 10:8.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors">
                  Our Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  1658 North Milwaukee Avenue<br />
                  Chicago, IL, United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">1-701-801-9911</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@hrfmlife.com</span>
              </li>
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Times</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>
                <span className="font-semibold text-white">Friday Night:</span> Prayer Conference
              </li>
              <li>
                <span className="font-semibold text-white">Wednesday:</span> Bible Study
              </li>
              <li className="text-xs text-gray-400 mt-2">
                Call: 1-701-801-9911
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HRFMLIFE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Healing Rain Falling Ministries. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            A 501(c)(3) Non-Profit Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
