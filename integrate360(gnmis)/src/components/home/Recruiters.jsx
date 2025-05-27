import React from "react";
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
    return (
        <>
            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-center text-[#0e3c60] mb-12">
                    Our Recruiter
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
                    {recruiters.map((recruiter, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-4 w-30 h-16 md:w-40 md:h-20 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={recruiter.logo}
                                alt={recruiter.name}
                                className="max-h-12 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#FFFFF] py-16 px-4 text-white">
                <h2 className="text-3xl font-bold text-center text-[#0e3c60] mb-32">
                    Highest Package
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 gap-y-60 md:gap-6">
                    {students.map((student, idx) => (
                        <div key={idx} className="rounded-xl bg-[#0d0f12] h-[200px] sm:h-[310px] md:h-[330px] shadow-md text-center relative">
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-full object-cover rounded-t-xl"
                                style={{ transform: 'translateY(-40%)' }}
                            />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg grid items-center justify-center text-white p-4 sm:px-28 py-8 md:py-15 md:px-14 text-center rounded-xl w-32 md:w-52 gap-y-1 md:gap-y-2">
                                <h3 className="text-xl font-bold text-[#0e3c60]">{student.package}</h3>
                                <div className="flex justify-center mt-1">
                                    <div className="w-16 relative">
                                        <div className="h-[1.5px] bg-[#0e3c60] w-full"></div>
                                        <div className="absolute w-4 h-[1.5px] bg-red-500 right-0 top-0"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{student.name}</p>
                                <p className="text-sm text-gray-600">{`Got Hired In ${student.company}`}</p>
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
