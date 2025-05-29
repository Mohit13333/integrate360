import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#073763] text-white pt-28 mt-30 md:mt-56 relative">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-white text-center shadow-lg rounded-lg p-6 md:p-10">
                <h2 className="text-3xl lg:text-5xl font-semibold text-[#073763] mb-4">
                    Subscribe For Newsletter
                </h2>
                <div className="flex flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address..."
                        className="p-2 w-[50%] border border-black rounded-md text-gray-700 text-base lg:text-lg"
                    />
                    <button className="bg-[#D3413F] text-white px-4 py-2  rounded-md text-base lg:text-lg">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="px-6 mx-0 ml-0 md:px-12 md:mx-10 md:ml-24 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="mr-6 col-span-2 md:col-span-1">
                    <img
                        src="/genesis.png"
                        alt="GNIMS logo"
                        className="mb-4 w-48 md:w-56 lg:w-64"
                    />
                    <p className="text-sm md:text-base lg:text-md">
                        Guru Nanak Institute of Management Studies, GNIMS was
                        established in 2002 as a part of Shiromani
                    </p>
                    <div className="flex gap-4 mt-4 text-white text-xl">
                        <div className="flex space-x-10">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                                <img src="/facebook.png" alt="Facebook" class="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                                <img src="/twitter.png" alt="Twitter" class="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                                <img src="/linkedin.png" alt="LinkedIn" class="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
                                <img src="/instagram.png" alt="Instagram" class="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                        </div>

                    </div>
                </div>
                <div>
                    <h4 className="text-[#D3413F] text-xl md:text-3xl font-semibold mb-3">Student Help</h4>
                    <ul className="space-y-2 text-base md:text-lg">
                        <li>Careers</li>
                        <li>Admission</li>
                        <li>Scholarship</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#D3413F] text-xl md:text-3xl font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-base md:text-lg">
                        <li>Courses</li>
                        <li>Students Bodies</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#D3413F] text-xl md:text-3xl font-semibold mb-3">Get In Touch</h4>
                    <ul className="space-y-2 text-base md:text-lg">
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