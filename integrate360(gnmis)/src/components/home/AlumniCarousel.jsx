import React from "react";

const alumniData = [
    {
        id: 1,
        name: "Mr. Stevenson",
        title: "Assistant Vice President",
        batch: "MMS (BATCH 2016-18)",
        image: "/al1.png"
    },
    {
        id: 2,
        name: "Mr. Hitesh",
        title: "Branch Manager",
        batch: "MMS (BATCH 2016-18)",
        image: "/al2.png"
    },
    {
        id: 3,
        name: "Mr. Ramandeep Singh Arora",
        title: "Deputy Manager at the Citi Bank, Mumbai",
        batch: "PGDM (BATCH 2011-13)",
        image: "/al3.png",
        featured: true
    },
    {
        id: 4,
        name: "Ms. Sakshi Bhatia",
        title: "Executive",
        batch: "MMS (BATCH 2016-18)",
        image: "/al4.png"
    },
    {
        id: 5,
        name: "Ms. Kavita Kedar",
        title: "Executive, Blue Jet Airways Ltd",
        batch: "MMS (BATCH 2016-18)",
        image: "/al5.png"
    }
];

const AlumniCarousel = () => {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-10">Video Testimonials</h2>
            <div className="relative flex items-end justify-center h-[420px]">
                {alumniData.map((alumni, index) => {
                    const offset = (index - 2) * 120;
                    const zIndex = index === 2 ? 50 : 40 - Math.abs(index - 2);
                    const scale = index === 2 ? "scale-110" : "scale-100";
                    return (
                        <div
                            key={index}
                            className={`absolute transition-transform duration-300 w-64 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${scale}`}
                            style={{ transform: `translateX(${offset}px)`, zIndex }}
                        >
                            <h1 className="border border-[#073763] mt-3"></h1>
                            <div className="text-[#073763] text-2xl font-bold py-2 text-center">
                                ALUMNI INTERACTION
                            </div>
                            <div className="relative h-44 w-full bg-gray-200">
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-full h-full object-cover"
                                />
                                {alumni.featured && (
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button class="bg-white/70 rounded-full flex p-5 shadow-md">
                                            <img src="/play.png" alt="Play" class="w-8 h-8" />
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 text-center">
                                <p className="font-semibold text-[#073763]">{alumni.name}</p>
                                <p className="text-sm font-poppins font-semibold text-black">({alumni.title})</p>
                                <p className="font-semibold text-[#073763] mt-1">{alumni.batch}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AlumniCarousel;
