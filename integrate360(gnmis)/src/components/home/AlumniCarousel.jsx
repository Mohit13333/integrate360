import { PlayCircle } from "lucide-react";

const alumniData = [
  {
    name: "Mr. Stevenson",
    designation: "Assistant Vice President, IDFC First Bank",
    batch: "MMS (BATCH 2014-16)",
    img: "/al1.png",
  },
  {
    name: "Mr. Hitesh Sharma",
    designation: "Branch Manager at Axis Bank",
    batch: "MMS (BATCH 2014-16)",
    img: "/al2.png",
  },
  {
    name: "Mr. Ramandeep Singh Arora",
    designation: "Deputy Manager at the Citi Bank, Mumbai",
    batch: "PGDM (BATCH 2011-13)",
    img: "/al3.png",
  },
  {
    name: "Ms. Rakshi Bhatia",
    designation: "Analyst, Tata Capital Limited",
    batch: "MMS (BATCH 2016-18)",
    img: "/al4.png",
  },
  {
    name: "Ms. Ankita Kedar",
    designation: "HR Executive, Blue Jet Healthcare Ltd",
    batch: "MMS (BATCH 2016-18)",
    img: "/al5.png",
  },
];

export default function AlumniTestimonials() {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Video Testimonials</h2>
      <div className="flex overflow-x-auto space-x-6 px-4">
        {alumniData.map((alum, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative h-44">
              <img
                src={alum.img}
                alt={alum.name}
                className="w-full h-full object-cover"
              />
              {/* Show play icon on the third card only */}
              {index === 2 && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <PlayCircle className="text-white w-14 h-14" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-blue-900 font-semibold text-sm uppercase tracking-widest">
                ALUMNI INTERACTION
              </h3>
              <p className="text-lg font-bold text-gray-900 mt-2">{alum.name}</p>
              <p className="text-sm text-gray-700 italic">{alum.designation}</p>
              <p className="text-sm text-blue-700 font-semibold mt-2">{alum.batch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
