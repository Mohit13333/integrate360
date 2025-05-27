import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#073763] text-white pt-28 relative">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-gray-100 text-center shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e3c60] mb-4">
                    Subscribe For Newsletter
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address..."
                        className="w-full md:w-2/3 p-3 border border-gray-300 rounded-md text-gray-700"
                    />
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img
                        src="/genesis.png"
                        alt="GNIMS logo"
                        className="mb-4 w-48"
                    />
                    <p className="text-sm">
                        Guru Nanak Institute of Management Studies, GNIMS was
                        established in 2002 as a part of Shiromani
                    </p>
                    <div className="flex gap-4 mt-4 text-white text-xl">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-x-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <div>
                    <h4 className="text-red-400 font-semibold mb-3">Student Help</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Careers</li>
                        <li>Admission</li>
                        <li>Scholarship</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-red-400 font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Courses</li>
                        <li>Students Bodies</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-red-400 font-semibold mb-3">Get In Touch</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Faculty Directory</li>
                        <li>Announcements & Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="text-center py-4 bg-white text-[#073763] border-t border-white/10 text-sm">
                Copyright 2023 © GNIMS, Mumbai - All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
