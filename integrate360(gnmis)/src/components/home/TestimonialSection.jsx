import React from "react";

const testimonials = [
    {
        name: "Prathamesh Mahagaonkar",
        title: "Brand and Media manager",
        company: "Lagu Bandhu Jewellers",
        message:
            "This is Prathamesh Mahagaonkar from batch MMS 2016-18. Currently I am working at Lagu Bandhu Jewellers as a Brand and Media manager. Gnims business school has been the cornerstone of,",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Rutuja Patil",
        title: "Senior Associate",
        company: "SSN and C Technologies Inc",
        message:
            "Hello this is Rutuja Patil from batch 2016-18. Currently I am working at SSN and C Technologies Inc as a Senior Associate. I am proud to say that the teaching quality was very good at GNIMS.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        name: "Pooja Sharma",
        title: "",
        company: "IPSA Pvt Ltd",
        message:
            "This is Pooja Sharma from batch 2016-18. Currently I am running my own business. I am proud to say that the experience at GNIMS was exceptional, providing me with a strong foundation.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
];

const TestimonialSection = () => {
    return (
        <div className="relative w-full mb-40">
            {/* Background containers */}
            <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-[#D3413F]"></div>
                <div className="w-1/2 bg-white"></div>
            </div>

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 py-10">
                <h2 className="text-4xl font-semibold mb-10 text-white">Testimonials</h2>

                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 bg-white text-black rounded-xl shadow-md p-6 w-full max-w-md border"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full border-2 border-yellow-400"
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
                                <span className="text-red-600 font-semibold cursor-pointer">
                                    Read More....
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-shrink-0 flex flex-col justify-center items-center space-y-4 pl-4">
                <button className="w-10 h-10 rounded-full border border-white text-white text-lg">
                    &lt;
                </button>
                <button className="w-10 h-10 rounded-full border border-white text-white text-lg">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TestimonialSection;