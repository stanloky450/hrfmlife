"use client";

import HeroSection from "@/components/HeroSection";
import MinistryCard from "@/components/MinistryCard";
import EventCard from "@/components/EventCard";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import {
	FaGlobeAmericas,
	FaTshirt,
	FaHandsHelping,
	FaChurch,
	FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
	// Sample data - In production, this would come from your API
	const upcomingEvents = [
		{
			id: "1",
			title: "Friday Night Prayer Conference",
			excerpt:
				"Join us every Friday night for powerful prayer and worship. Open to all who desire the word of God.",
			eventDate: new Date("2024-11-01T19:00:00"),
			eventLocation: "Conference Call: 1-701-801-9911",
			featured: true,
		},
		{
			id: "2",
			title: "Wednesday Bible Study",
			excerpt:
				"Deep dive into the scriptures with our international community of believers.",
			eventDate: new Date("2024-10-30T18:00:00"),
			eventLocation: "Conference Call: 1-701-801-9911",
		},
		{
			id: "3",
			title: "Annual All Night Service 2025",
			excerpt:
				"Join us for our annual all-night service filled with worship, prayer, and celebration.",
			eventDate: new Date("2025-01-15T19:00:00"),
			eventLocation: "TBA - Check back for updates",
			featured: true,
		},
	];

	const latestPosts = [
		{
			id: "1",
			title: "The Power of Prayer and Fasting",
			excerpt:
				"Discover how prayer and fasting can transform your spiritual life and bring breakthrough in difficult situations.",
			author: "HRFM Team",
			createdAt: new Date("2024-10-15"),
			category: "blog",
		},
		{
			id: "2",
			title: "Divine Apparel Program Reaches New Communities",
			excerpt:
				"Our outreach continues to expand, providing essential items to underserved communities across multiple countries.",
			author: "Outreach Team",
			createdAt: new Date("2024-10-10"),
			category: "announcement",
		},
		{
			id: "3",
			title: "Testimony: Healing Through Faith",
			excerpt:
				"Read about miraculous healing testimonies from our prayer line participants and how God continues to move.",
			author: "Community",
			createdAt: new Date("2024-10-05"),
			category: "testimony",
		},
	];

	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<>
			<HeroSection />

			{/* Mission Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="max-w-4xl mx-auto text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-playfair)]">
							Our{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Mission
							</span>
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							Healing Rain Falling Ministries (HRFM) is a non-denomination
							ministry and a 501(c)(3) nonprofit organization. We believe in the
							power of prayer, fasting, and understanding the scriptures. Our
							international team spans across the Bahamas, Jamaica, Canada, and
							the United States, united in fulfilling Isaiah 61:1-5 KJV and
							Matthew 10:8.
						</p>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
					>
						{[
							{ number: "8+", label: "Years Serving" },
							{ number: "6", label: "Countries Reached" },
							{ number: "1000+", label: "Lives Impacted" },
							{ number: "24/7", label: "Prayer Support" },
						].map((stat, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.05 }}
								className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
							>
								<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600 font-medium">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Ministries Section */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
							Our{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Ministries
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Serving communities worldwide through prayer, education, and
							humanitarian aid
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<MinistryCard
							icon={<FaChurch />}
							title="Prayer & Deliverance"
							description="International prayer ministry beyond the four walls of a building"
							features={[
								"Friday Night Prayer Conference",
								"Wednesday Bible Study",
								"Annual All Night Service",
								"Individual Prayer Support",
							]}
						/>
						<MinistryCard
							icon={<FaTshirt />}
							title="Divine Apparel Program"
							description="Providing basic necessities for the survival of underserved communities"
							features={[
								"Clothing Distribution",
								"Food & Water Provision",
								"Serving USA, Jamaica, Ghana",
								"Year-round Support",
							]}
						/>
						<MinistryCard
							icon={<FaHandsHelping />}
							title="Acts of Kindness"
							description="Humanitarian help through intercessory prayers and charity work"
							features={[
								"Free Life Coaching",
								"Free Mentoring",
								"Community Outreach",
								"International Missions",
							]}
						/>
					</div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mt-12"
					>
						<Link
							href="/ministries"
							className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							<span>Explore All Ministries</span>
							<FaArrowRight />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Upcoming Events */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
							Upcoming{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Events
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Join us for prayer, worship, and fellowship
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{upcomingEvents.map((event, index) => (
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

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center"
					>
						<Link
							href="/events"
							className="inline-flex items-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
						>
							<span>View All Events</span>
							<FaArrowRight />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Latest Posts */}
			<section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mb-12"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
							Latest{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Updates
							</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Stay connected with our community and ministry updates
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{latestPosts.map((post, index) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<BlogCard {...post} />
							</motion.div>
						))}
					</div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center"
					>
						<Link
							href="/blog"
							className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							<span>Read More Posts</span>
							<FaArrowRight />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"radial-gradient(circle, white 1px, transparent 1px)",
							backgroundSize: "30px 30px",
						}}
					/>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
							Join Our Global Community
						</h2>
						<p className="text-xl mb-8 text-gray-200">
							Whether you need prayer, want to volunteer, or wish to support our
							mission, there&apos;s a place for you in the HRFM family.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
							>
								Get In Touch
							</Link>
							<Link
								href="/support"
								className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
							>
								Support Our Mission
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}
