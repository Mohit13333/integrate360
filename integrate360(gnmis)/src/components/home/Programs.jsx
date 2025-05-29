import React, { useState } from "react";

const programs = [
    {
        icon: "/mms.png",
        title: "MMS",
        description:
            "Candidates seeking admission to Master of Management Studies (MMS) Course should be Graduate of minimum three",
        showDescription: true,
    },
    {
        icon: "/bms.png",
        title: "BMS",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque iste veritatis laborum praesentium sequi possimus nostrum tempore atque ipsam sit, in omnis aliquid illo aspernatur. Commodi veniam maiores quidem?",
        showDescription: true,
    },
    {
        icon: "/mca.png",
        title: "MCA",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque iste veritatis laborum praesentium sequi possimus nostrum tempore atque ipsam sit, in omnis aliquid illo aspernatur. Commodi veniam maiores quidem?",
        showDescription: true,
    },
    {
        icon: "/pgdm.png",
        title: "PGDM",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque iste veritatis laborum praesentium sequi possimus nostrum tempore atque ipsam sit, in omnis aliquid illo aspernatur. Commodi veniam maiores quidem?",
        showDescription: true,
    },
    {
        icon: "/mba.png",
        title: "MBA",
        description: "Master of Business Administration program for aspiring business leaders.",
        showDescription: true,
    },
    {
        icon: "/bca.png",
        title: "BCA",
        description: "Bachelor of Computer Applications program for computer science enthusiasts.",
        showDescription: true,
    },
];

const Programs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsPerPage >= programs.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? programs.length - itemsPerPage : prevIndex - 1
        );
    };

    const visiblePrograms = programs.slice(currentIndex, currentIndex + itemsPerPage);

    // If we're at the end and don't have enough items, take from the beginning
    const remainingItems = itemsPerPage - visiblePrograms.length;
    if (remainingItems > 0) {
        visiblePrograms.push(...programs.slice(0, remainingItems));
    }

    return (
        <section className="relative py-16">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

            <div className="relative z-10">
                <div className="bg-white pb-12 my-10 mb-18">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0e3c60]">
                        Our Programs
                    </h2>
                </div>
                <div className="bg-[#d94740] pt-12 pb-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 -mt-32 px-4">
                        {visiblePrograms.map((program, index) => {
                            const cardIndex = index + 1;
                            const isHovered = hoveredCard === cardIndex;
                            
                            return (
                                <div
                                    key={`${currentIndex}-${index}`}
                                    className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] mx-auto hover:shadow-lg transition-all duration-300"
                                    onMouseEnter={() => setHoveredCard(cardIndex)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {!isHovered ? (
                                        <>
                                            <div className="flex justify-center mb-3">
                                                <img src={program.icon} alt={program.title} className="h-10 w-10 lg:w-16 lg:h-16" />
                                            </div>
                                            <h3 className="text-xl lg:text-4xl font-bold text-[#0e3c60] mb-2 text-center">
                                                {program.title}
                                                <div className="flex items-center justify-center mt-2">
                                                    <div className="h-[2px] w-[70px] bg-[#0e3c60] rounded-full mr-1"></div>
                                                    <div className="h-[2px] w-[30px] bg-red-500 rounded-full"></div>
                                                </div>
                                            </h3>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center mb-3">
                                                <img src={program.icon} alt={program.title} className="h-10 w-10 mr-3" />
                                                <h3 className="text-xl font-bold text-[#0e3c60] mb-0">
                                                    {program.title}
                                                    <div className="flex items-center justify-center mt-1">
                                                        <div className="h-[2px] w-[35px] bg-[#0e3c60] rounded-full mr-1"></div>
                                                        <div className="h-[2px] w-[20px] bg-red-500 rounded-full"></div>
                                                    </div>
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-2">{program.description}</p>
                                            <a
                                                href="#"
                                                className="text-[#0e3c60] font-semibold text-sm underline hover:text-red-600"
                                            >
                                                Read More...
                                            </a>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center mt-8 gap-4">
                        <button 
                            className="w-10 h-10 rounded-full text-white transition duration-300"
                            onClick={prevSlide}
                        >
                            <img src="/leftar.png" alt="Previous" />
                        </button>
                        <button 
                            className="w-10 h-10 rounded-full bg-white text-[#d94740] transition duration-300"
                            onClick={nextSlide}
                        >
                            <img src="/rightar.png" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;