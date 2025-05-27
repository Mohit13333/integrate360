import React from "react";

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
        description: "",
        showDescription: false,
    },
    {
        icon: "/mca.png",
        title: "MCA",
        description: "",
        showDescription: false,
    },
    {
        icon: "/pgdm.png",
        title: "PGDM",
        description: "",
        showDescription: false,
    },
];

const Programs = () => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 -mt-32 px-4">
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] mx-auto hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <img src={programs[0].icon} alt={programs[0].title} className="h-10 w-10 mr-3" />
                        <h3 className="text-xl font-bold text-[#0e3c60] mb-0">
                            {programs[0].title}
                            <span className="block w-16 h-[1.5px] bg-[#0e3c60] relative mt-1">
                                <span className="absolute w-4 h-[1.5px] bg-red-500 right-0 top-0"></span>
                            </span>
                        </h3>
                    </div>

                    {programs[0].showDescription && (
                        <>
                            <p className="text-sm text-gray-700 mb-2">{programs[0].description}</p>
                            <a
                                href="#"
                                className="text-[#0e3c60] font-semibold text-sm underline hover:text-red-600"
                            >
                                Read More...
                            </a>
                        </>
                    )}
                </div>

                {programs.slice(1).map((program, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 w-full max-w-[280px] mx-auto text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex justify-center space-y-6 mb-3">
                            <img src={program.icon} alt={program.title} className="h-10 w-10 lg:w-16 lg:h-16" />
                        </div>
                        <h3 className="text-xl lg:text-4xl font-bold mt-11 text-[#0e3c60] mb-2 text-center">
                            {program.title}
                            <span className="block mx-auto mt-1 w-22 h-[1.8px] bg-[#0e3c60] relative">
                                <span className="absolute w-6 h-[1.8px] bg-red-500 right-0 top-0"></span>
                            </span>
                        </h3>
                        {program.showDescription && (
                            <>
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
                ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
                <button className="w-10 h-10 rounded-full text-white transition duration-300">
                    <img src="/leftar.png" alt="" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-[#d94740] transition duration-300">
                    <img src="/rightar.png" alt="" />
                </button>
            </div>
        </div>
    </div>
</section>
    );
};

export default Programs;
