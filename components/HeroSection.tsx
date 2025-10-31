"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPrayingHands, FaBook, FaHeart } from "react-icons/fa";

const HeroSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const floatingAnimation = {
		y: [0, -20, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [90, 0, 90],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
				/>
			</div>

			<div className="container mx-auto px-4 py-20 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center max-w-5xl mx-auto"
				>
					{/* Main Heading */}
					<motion.div variants={itemVariants} className="mb-6">
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
							Healing Rain Falling
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
								Ministries
							</span>
						</h1>
					</motion.div>

					{/* Subtitle */}
					<motion.p
						variants={itemVariants}
						className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
					>
						An International Prayer and Deliverance Ministry Beyond the Four
						Walls
					</motion.p>

					{/* Bible Verse */}
					<motion.div
						variants={itemVariants}
						className="mb-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-2xl mx-auto"
					>
						<p className="text-lg text-gray-100 italic">
							&quot;The Spirit of the Lord GOD is upon me; because the LORD hath
							anointed me to preach good tidings unto the meek...&quot;
						</p>
						<p className="text-sm text-blue-300 mt-2">- Isaiah 61:1-5 KJV</p>
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
					>
						<Link
							href="/prayer-request"
							className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
						>
							<FaPrayingHands className="group-hover:rotate-12 transition-transform" />
							<span>Submit Prayer Request</span>
						</Link>
						<Link
							href="/about"
							className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
						>
							<FaBook />
							<span>Learn More</span>
						</Link>
					</motion.div>

					{/* Feature Cards */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
					>
						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
						>
							<motion.div animate={floatingAnimation} className="mb-4">
								<FaPrayingHands className="text-4xl text-blue-400 mx-auto" />
							</motion.div>
							<h3 className="text-xl font-bold text-white mb-2">
								Prayer Lines
							</h3>
							<p className="text-gray-300 text-sm">
								Every Friday Night Conference Call
							</p>
							<p className="text-blue-300 font-medium mt-2">1-701-801-9911</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
						>
							<motion.div
								animate={{
									...floatingAnimation,
									transition: { ...floatingAnimation.transition, delay: 0.5 },
								}}
								className="mb-4"
							>
								<FaBook className="text-4xl text-purple-400 mx-auto" />
							</motion.div>
							<h3 className="text-xl font-bold text-white mb-2">Bible Study</h3>
							<p className="text-gray-300 text-sm">
								Every Wednesday via Conference Line
							</p>
							<p className="text-purple-300 font-medium mt-2">Join Us</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
						>
							<motion.div
								animate={{
									...floatingAnimation,
									transition: { ...floatingAnimation.transition, delay: 1 },
								}}
								className="mb-4"
							>
								<FaHeart className="text-4xl text-pink-400 mx-auto" />
							</motion.div>
							<h3 className="text-xl font-bold text-white mb-2">Outreach</h3>
							<p className="text-gray-300 text-sm">
								Divine Apparel Program & Acts of Kindness
							</p>
							<p className="text-pink-300 font-medium mt-2">Get Involved</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
					<motion.div
						animate={{
							y: [0, 12, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="w-1.5 h-3 bg-white rounded-full mt-2"
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
