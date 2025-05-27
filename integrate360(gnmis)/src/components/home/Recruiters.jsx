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
      <div className="grid grid-cols-3 md:grid-cols-7 gap-6 justify-items-center">
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
  <h2 className="text-3xl font-bold text-center text-[#0e3c60] mb-12">
    Highest Package
  </h2>
  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
    {students.map((student, idx) => (
      <div key={idx} className="w-[calc(50%-0.5rem)] md:w-64 rounded-xl bg-[#0d0f12] shadow-md text-center">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="bg-white text-black p-4 rounded-b-xl">
          <h3 className="text-xl font-bold text-[#0e3c60]">
            {student.package}
          </h3>
          <hr className="my-2 border-t-2 border-[#0e3c60] w-16 mx-auto" />
          <p className="text-sm font-semibold">{student.name}</p>
          <p className="text-sm text-gray-600">
            Got Hired In {student.company}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  <div className="flex justify-center items-center mt-10 space-x-4">
    <button className="w-10 h-10 flex items-center justify-center bg-[#0e3c60] text-white rounded-full hover:bg-[#114a7a]">
      <ChevronLeft size={20} />
    </button>
    <button className="w-10 h-10 flex items-center justify-center bg-[#0e3c60] text-white rounded-full hover:bg-[#114a7a]">
      <ChevronRight size={20} />
    </button>
  </div>
</section>
    </>
  );
};

export default Recruiters;
