import React from "react";

const events = [
    {
        name: "Virsa 2025",
        image: "/virsa.jpg",
    },
    {
        name: "Tech Chanakya",
        image: "/techchanakya1.jpg",
    },
    {
        name: "Tech Chanakya",
        image: "/techchanakya2.jpg",
    },
];

const EventsSection = () => {
    return (
        <div className="bg-[#073A69] py-16 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Events
            </h2>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white rounded-xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-72 object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-86 bg-white bg-opacity-50 py-3 mb-4 mx-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-[#073763] p-3 text-center">
                                {event.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;
