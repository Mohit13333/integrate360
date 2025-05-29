import React from 'react';

const ImgLayout = () => {
    return (
        <div>
            <div className="relative w-full max-h-[650px] overflow-hidden">
                <img
                    src="/Home.jpg"
                    alt="Banner"
                    className="w-full h-[450px] sm:h-[550px] object-cover"
                />
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                >
                    <img src="/leftar.png" alt="" />
                </button>

                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                >
                    <img src="/rightar.png" alt="" />
                </button>
            </div>
            <div className="bg-[#073763] text-white text-sm px-4 py-2 truncate w-full overflow-hidden">
<div className="overflow-hidden whitespace-nowrap">
  <div className="animate-marquee inline-block">
    <span className="px-3">
      State of the Art infrastructure in Heart of Mumbai City | 100% Placement & Startup Assistance |
      International Placements Opportunities & Entrepreneurship Guidance | Project Based Learning |
      Intensive International Internships | Live hands-on experiential learning | Complete Mentoring Program |
      PhD Center | Being Strong GYM | Massive Sports Ground |
    </span>
    <span className="px-3">
      State of the Art infrastructure in Heart of Mumbai City | 100% Placement & Startup Assistance |
      International Placements Opportunities & Entrepreneurship Guidance | Project Based Learning |
      Intensive International Internships | Live hands-on experiential learning | Complete Mentoring Program |
      PhD Center | Being Strong GYM | Massive Sports Ground |
    </span>
  </div>
</div>

            </div>
        </div>
    );
};

export default ImgLayout;
