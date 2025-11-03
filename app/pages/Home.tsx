// app/page.tsx
"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader";



export default function HomePage() {
   const [jobs, setJobs] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Fetch jobs once
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/fetchJobs");
        const data = await res.json();
        setJobs(data.results || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setTimeout(() => setLoading(false), 1500); // show loader at least 1.5s
      }
    }
    fetchJobs();
  }, []);

  const handleShowMore = () => setVisibleCount(prev => prev + 6);

  if (loading) return <Loader />;
  return (
    
    <motion.main

      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.8 }}
    >
      <main className="min-h-screen flex flex-col items-center">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-linear-to-b from-blue-600 to-indigo-200 text-white text-center py-40 px-6 ">
            <h1 className="text-5xl font-extrabold mb-4 ">Find Your Dream Job</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
            Discover curated opportunities for developers, designers, and tech professionals Easier and more Faster!
            </p>
            <Link
            href="#jobs"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
            Explore Jobs
            </Link>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl text-center py-30 px-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">About JobFinder</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
            JobFinder is a modern <strong>career blog</strong> that connects readers with the latest insights, advice, and
            curated job opportunities from trusted platforms. Whether you’re aiming to boost your frontend career or break into
            the creative industry, we guide you through the journey with practical knowledge and real opportunities.
            </p>
        </section>

        {/* Job Listings Section */}
        <section id="jobs" className="w-full bg-gray-50 py-20 px-6" data-aos="fade-up">
            <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Latest Jobs</h2>

            <div className="grid md:grid-cols-2 gap-6">
            {jobs.length > 0 ? (
            jobs.slice(0, visibleCount).map((job) => (
                <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition "
                data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">
                    {job.company?.display_name || "Unknown Company"} —{" "}
                    {job.location?.display_name || "Location not specified"}
                </p>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {job.description}
                </p>
                <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Apply Now →
                </a>
                </div>
            ))
            ) : (
            <p className="text-center text-gray-500">No jobs available right now.</p>
            )}
        </div>

        {/* Show More Button */}
        {visibleCount < jobs.length && (
            <div className="text-center mt-10">
            <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
                Show More
            </button>
            </div>
        )}
            </div>
        </section>
        </main>  
    </motion.main>
    
  );
}
