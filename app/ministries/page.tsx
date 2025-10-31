"use client";

import { motion } from "framer-motion";
import MinistryCard from "@/components/MinistryCard";
import {
	FaChurch,
	FaTshirt,
	FaHandsHelping,
	FaPrayingHands,
	FaBook,
	FaGlobeAmericas,
	FaHeart,
	FaUsers,
} from "react-icons/fa";

export default function MinistriesPage() {
	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<div className="pt-20">
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
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
						animate="visible"
						variants={fadeInUpVariants}
						className="max-w-4xl mx-auto text-center"
					>
						<h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
							Our Ministries
						</h1>
						<p className="text-xl text-gray-200 leading-relaxed">
							Serving communities worldwide through prayer, education, and
							humanitarian aid
						</p>
					</motion.div>
				</div>
			</section>

			{/* Main Ministries */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Core Ministry Programs
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Each ministry is designed to fulfill our mission of spreading
							God&apos;s love and meeting people&apos;s needs
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						<MinistryCard
							icon={<FaChurch />}
							title="Prayer & Deliverance"
							description="International prayer ministry beyond the four walls of a building, reaching souls wherever they may be."
							features={[
								"Friday Night Prayer Conference",
								"Wednesday Bible Study",
								"Annual All Night Service",
								"Individual Prayer Support",
								"24/7 Intercessory Prayer",
							]}
						/>

						<MinistryCard
							icon={<FaTshirt />}
							title="Divine Apparel Program (DAP)"
							description="Providing basic necessities for the survival of underserved and homeless populations in target communities."
							features={[
								"Clothing Distribution",
								"Food & Water Provision",
								"Serving Multiple Countries",
								"Year-round Support",
								"Community Partnerships",
							]}
						/>

						<MinistryCard
							icon={<FaHandsHelping />}
							title="Acts of Kindness"
							description="Humanitarian help through intercessory prayers, free life coaching, mentoring, and charity work."
							features={[
								"Free Life Coaching",
								"Free Mentoring Programs",
								"Community Outreach",
								"International Missions",
								"Disaster Relief",
							]}
						/>

						<MinistryCard
							icon={<FaBook />}
							title="Bible Study & Teaching"
							description="Deep scriptural understanding through regular Bible study sessions and teaching ministries."
							features={[
								"Weekly Bible Study",
								"Scripture Teaching",
								"Study Materials",
								"Online Resources",
								"Group Discussions",
							]}
						/>

						<MinistryCard
							icon={<FaPrayingHands />}
							title="Prayer Lines"
							description="Conference prayer lines open to all who need prayer, encouragement, and deliverance from sin."
							features={[
								"Friday Conference Calls",
								"Praise & Worship",
								"Collective Prayer",
								"Testimony Sharing",
								"Spiritual Support",
							]}
						/>

						<MinistryCard
							icon={<FaGlobeAmericas />}
							title="International Outreach"
							description="Serving underserved communities across USA, Jamaica, Trinidad, Ghana, and Nigeria."
							features={[
								"Multi-Country Presence",
								"Cultural Sensitivity",
								"Local Partnerships",
								"Sustainable Impact",
								"Community Development",
							]}
						/>
					</div>
				</div>
			</section>

			{/* Service Locations */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUpVariants}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Where We Serve
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Our ministry spans multiple countries, touching lives across
							continents
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								country: "United States",
								locations: ["Chicago, IL", "Joliet, IL", "New York"],
								icon: "🇺🇸",
							},
							{
								country: "Jamaica",
								locations: [
									"Kingston",
									"Spanish Town",
									"St Mary",
									"St Thomas",
									"Manchester",
								],
								icon: "🇯🇲",
							},
							{
								country: "Bahamas",
								locations: ["Nassau", "Community Outreach"],
								icon: "🇧🇸",
							},
							{
								country: "Canada",
								locations: ["Ministry Partners", "Prayer Support"],
								icon: "🇨🇦",
							},
							{
								country: "Ghana",
								locations: ["Humanitarian Aid", "Acts of Kindness"],
								icon: "🇬🇭",
							},
							{
								country: "Trinidad & Tobago",
								locations: ["Outreach Programs", "Community Support"],
								icon: "🇹🇹",
							},
						].map((location, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white rounded-2xl shadow-lg p-6"
							>
								<div className="text-5xl mb-4 text-center">{location.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
									{location.country}
								</h3>
								<ul className="space-y-2">
									{location.locations.map((loc, i) => (
										<li
											key={i}
											className="text-gray-600 text-sm flex items-center"
										>
											<span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
											{loc}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Get Involved */}
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
							<FaHeart className="text-6xl mx-auto mb-6" />
							<h2 className="text-4xl font-bold mb-6">Get Involved</h2>
							<p className="text-xl text-gray-200 mb-8 leading-relaxed">
								Whether through prayer, volunteering, or financial support,
								there are many ways to join our mission and make a difference in
								people&apos;s lives.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="/contact"
									className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
								>
									Contact Us
								</a>
								<a
									href="/support"
									className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
								>
									Support Our Work
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
