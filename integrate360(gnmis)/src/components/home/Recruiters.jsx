import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recruiters = [
    { name: "Comet", logo: "/comet.png" },
    { name: "Zudio", logo: "/zudio.png" },
    { name: "Datamatics", logo: "/datamatics.png" },
    { name: "Kotak Life", logo: "/kotak.png" },
    { name: "DC Consulting", logo: "/dc.png" },
    { name: "Bond Bazaar", logo: "/bond.png" },
    { name: "IndiaMart", logo: "/indiamart.png" },
    { name: "Hallmark", logo: "/hallmark.png" },
    { name: "", logo: "/un.png" },
    { name: "NEC", logo: "/nec.png" },
    { name: "Jaro Education", logo: "/jaro.png" },
    { name: "Sutherland", logo: "/southerland.png" },
    { name: "Wipro", logo: "/wipro.png" },
    { name: "Carwale", logo: "/carwale.png" },
];

const students = [
    {
        name: "Inti Savaria",
        package: "₹4 LPA",
        image: "/inti.png",
        company: "Zudio",
    },
    {
        name: "Purav Jha",
        package: "₹5 LPA",
        image: "/purav.png",
        company: "Zudio",
    },
    {
        name: "Mukesh Kumar",
        package: "₹10 LPA",
        image: "/mukesh.png",
        company: "Zudio",
    },
    {
        name: "Rajesh Mishra",
        package: "₹6 LPA",
        image: "/rajesh.png",
        company: "Zudio",
    },
];

const Recruiters = () => {
    const recruitersContainerRef = useRef(null);
    const scrollSpeed = 1; // Adjust speed as needed
    let animationFrameId;
    let isScrolling = true;

    useEffect(() => {
        const container = recruitersContainerRef.current;
        if (!container) return;

        // Only enable auto-scroll on desktop
        const handleResize = () => {
            isScrolling = window.innerWidth > 768; // 768px is typical breakpoint for mobile
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const scrollContent = () => {
            if (!isScrolling || !container) {
                animationFrameId = requestAnimationFrame(scrollContent);
                return;
            }

            // Check if we've scrolled to the end
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                // Reset to start for infinite loop
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += scrollSpeed;
            }

            animationFrameId = requestAnimationFrame(scrollContent);
        };

        animationFrameId = requestAnimationFrame(scrollContent);

        // Pause on hover
        const pauseScroll = () => {
            isScrolling = false;
        };
        const resumeScroll = () => {
            isScrolling = window.innerWidth > 768;
        };

        container.addEventListener('mouseenter', pauseScroll);
        container.addEventListener('mouseleave', resumeScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            container.removeEventListener('mouseenter', pauseScroll);
            container.removeEventListener('mouseleave', resumeScroll);
        };
    }, []);

    return (
        <>
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center text-[#0e3c60] mb-12">
                    Our Recruiter
                </h2>
                <div 
                    ref={recruitersContainerRef}
                    className="flex overflow-x-auto hide-scrollbar gap-6 px-4 py-2"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {recruiters.map((recruiter, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 rounded-xl w-30 h-16 md:w-56 md:h-20 flex items-center justify-center"
                        >
                            <img
                                src={recruiter.logo}
                                alt={recruiter.name}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                    {/* Duplicate items for seamless looping */}
                    {recruiters.map((recruiter, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex-shrink-0 rounded-xl w-30 h-16 md:w-56 md:h-20 flex items-center justify-center"
                            aria-hidden="true"
                        >
                            <img
                                src={recruiter.logo}
                                alt={recruiter.name}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </section>
            <section className="bg-[#FFFFF] py-16 px-4 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0e3c60] mb-24 md:mb-44">
                    Highest Package
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-8 gap-y-30 mx-10 md:mx-32 md:gap-6">
                    {students.map((student, idx) => (
                        <div key={idx} className="rounded-xl bg-[#0d0f12] h-[100px] sm:h-[250px] md:h-[270px] shadow-md text-center relative">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-full h-[144%] object-contain rounded-t-xl"
                                style={{ transform: 'translateY(-40%)' }}
                            />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg grid items-center justify-center text-white p-2 md:p-4 text-center rounded-xl w-24 md:w-64 gap-y-1 md:gap-y-2">
                                <h3 className="text-[10px] md:text-3xl font-bold text-[#0e3c60]">{student.package}</h3>
                                <div className="flex justify-center mt-1">
                                    <div className="flex items-center justify-center">
                                        <div className="h-[2px] md:w-[80px] w-[25px] bg-[#0e3c60] rounded-full mr-1"></div>
                                        <div className="h-[2px] md:w-[30px] w-[15px] bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-[10px] md:text-lg text-black">{student.name}</p>
                                <p className="text-[10px] md:text-lg text-black">{`Got Hired In ${student.company}`}</p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center mt-30 space-x-4">
                    <button className="w-10 h-10 flex items-center justify-center">
                        <img src="/blue2.png" alt="" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center">
                        <img src="/blue1.png" alt="" />
                    </button>
                </div>
            </section>
        </>
    );
};

export default Recruiters;