import React from "react";

const testimonials = [
    {
        name: "Prathamesh Mahagaonkar",
        title: "Brand and Media manager",
        company: "Lagu Bandhu Jewellers",
        message:
            "This is Prathamesh Mahagaonkar from batch MMS 2016-18. Currently I am working at Lagu Bandhu Jewellers as a Brand and Media manager. Gnims business school has been the cornerstone of,",
        image: "/user1.png",
    },
    {
        name: "Rutuja Patil",
        title: "Senior Associate",
        company: "SSN and C Technologies Inc",
        message:
            "Hello this is Rutuja Patil from batch 2016-18. Currently I am working at SSN and C Technologies Inc as a Senior Associate. I am proud to say that the teaching quality was very good at GNIMS.",
        image: "/user2.png",
    },
    {
        name: "Pooja Sharma",
        title: "",
        company: "IPSA Pvt Ltd",
        message:
            "This is Pooja Sharma from batch 2016-18. Currently I am running my own business. I am proud to say that the experience at GNIMS was exceptional, providing me with a strong foundation.",
        image: "/user3.png",
    },
];

const TestimonialSection = () => {
    return (
        <div className="relative w-full mt-20 mb-10 md:mb-40">
            <div className="absolute inset-0 flex md:h-[120%] -top-10"> {/* Increased height here */}
                <div className="w-1/2 bg-[#D3413F] rounded-tr-xl rounded-br-xl"></div>
                <div className="w-1/2 bg-white"></div>
            </div>

            {/* Content container */}
            <div className="relative z-1 mx-2 px-4 py-14">
                <h2 className="text-[20px] md:text-4xl lg:ml-30 font-semibold mb-28 text-white">Testimonials</h2>

                <div className="flex gap-30 lg:ml-30 pb-4 relative">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 bg-white text-black rounded-xl shadow-md p-6 border transition-all duration-300 ${i === 0 ? "md:scale-y-125 text-sm w-[350px] md:w-[420px] z-10" : "w-full max-w-md"
                                }`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className={`rounded-full ${i === 0 ? "w-14 h-11" : "w-12 h-12 "
                                }`}
                                />
                                <div>
                                    <h3 className="font-semibold">{t.name}</h3>
                                    <p className="text-sm">
                                        {t.title} {t.title && t.company && ":"} {t.company}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm">
                                {t.message}{" "}
                                <span className="text-[#D3413F] font-semibold cursor-pointer">
                                    Read More....
                                </span>
                            </p>
                        </div>
                    ))}

                </div>
                
                <div className="flex space-x-4 lg:ml-30 mt-16">
                    <button className="w-14 h-14 rounded-full text-lg">
                        <img src="/leftar.png" alt="" className="w-14 h-14" />
                    </button>
                    <button className="w-14 h-14 rounded-full text-lg">
                        <img src="/rightar.png" alt="" className="w-14 h-14" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;