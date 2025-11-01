"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaPrayingHands } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/ministries", label: "Ministries" },
		{ href: "/events", label: "Events" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}

					<Link href="/" className="flex items-center space-x-2">
						<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
							<FaPrayingHands className="text-white text-xl" />
							<Image
								src="/image/HrfmLogo.png"
								alt="HRFM Life logo"
								className="w-12 h-12 rounded-full object-cover"
								width={12}
								height={12}
							/>
						</div>
						<div>
							<h1
								className={`text-xl font-bold ${
									isScrolled ? "text-gray-900" : "text-white"
								}`}
							>
								HRFM Life
							</h1>
							<p
								className={`text-xs ${
									isScrolled ? "text-gray-600" : "text-gray-200"
								}`}
							>
								Healing Rain Falling Ministries
							</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`font-medium transition-colors hover:text-blue-600 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* CTA Button */}
					<div className="hidden md:flex items-center space-x-4">
						<Link
							href="/prayer-request"
							className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
						>
							<FaPrayingHands />
							<span>Prayer Request</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={`md:hidden text-2xl ${
							isScrolled ? "text-gray-900" : "text-white"
						}`}
					>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white shadow-lg"
					>
						<nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
								>
									{link.label}
								</Link>
							))}
							<Link
								href="/prayer-request"
								onClick={() => setIsMobileMenuOpen(false)}
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium text-center flex items-center justify-center space-x-2"
							>
								<FaPrayingHands />
								<span>Prayer Request</span>
							</Link>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
