// import React from "react";

// const About = () => {
//     return (
//         <div className="relative bg-[url('/bgimg.jpg')] shadow-xl rounded-xl p-6 md:p-18 max-w-7xl bg-cover bg-center mx-auto mt-10">
//             <div className="absolute inset-0 bg-white/80 z-0 rounded-xl"></div>
//             <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
//                 <div className="flex-1 p-10">
//                     <h2 className="text-2xl md:text-3xl font-bold text-[#073763]">
//                         About GNIMS Institute
//                     </h2>
//                     <p className="text-red-600 font-semibold mt-2">
//                         Leading Institute for Post Graduate Courses in Mumbai
//                     </p>
//                     <p className="text-gray-700 mt-4 text-md md:text-2xl leading-relaxed">
//                         Guru Nanak Institute of Management Studies, GNIMS was established in 2002 as a part of Shiromani Gurdwara
//                         Prabandhak Committee (S.G.P.C.) in the Khalsa college campus. The institution offers wide range of
//                         management programs curated for freshers as well as working executives both in the full-time and part time
//                         mode.
//                     </p>
//                 </div>

//                 <div className="flex-shrink-0 grid grid-cols-2 gap-1 md:gap-4 w-full md:w-80">
//                     <img
//                         src="/img1.jpg"
//                         alt="Industry visit"
//                         className="rounded-md border border-gray-300 object-cover h-96 w-44 col-span-1 row-span-2"
//                     />
//                     <img
//                         src="/img2.jpg"
//                         alt="Students"
//                         className="rounded-md border border-gray-300 object-cover h-44"
//                     />
//                     <img
//                         src="/img3.jpg"
//                         alt="Event"
//                         className="rounded-md border border-gray-300 object-cover h-44"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
import React from "react";

const About = () => {
    return (
        <div className="relative bg-[url('/bgimg.jpg')] shadow-xl rounded-xl p-6 max-w-7xl bg-cover bg-center flex md:mx-36 mt-10">
            <div className="absolute inset-0 bg-white/80 z-0 rounded-xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                {/* Text Content */}
                <div className="flex-1 p-6 md:p-10">
                    <h2 className="text-2xl font-bold text-[#073763]">
                        About GNIMS Institute
                    </h2>
                    <p className="text-red-600 font-semibold mt-2">
                        Leading Institute for Post Graduate Courses in Mumbai
                    </p>
                    <p className="text-gray-700 mt-4 text-md md:text-xl leading-relaxed">
                        Guru Nanak Institute of Management Studies, GNIMS was established in 2002 as a part of Shiromani Gurdwara
                        Prabandhak Committee (S.G.P.C.) in the Khalsa college campus. The institution offers wide range of
                        management programs curated for freshers as well as working executives both in the full-time and part time
                        mode.
                    </p>
                </div>

                <div className="w-full md:w-[360px] lg:w-[420px] grid grid-cols-2 gap-2 md:gap-4">
                    <img
                        src="/img1.jpg"
                        alt="Industry visit"
                        className="rounded-md border border-gray-300 object-cover h-96 w-full col-span-1 row-span-2"
                    />
                    <img
                        src="/img2.jpg"
                        alt="Students"
                        className="rounded-md border border-gray-300 object-cover h-44 w-full"
                    />
                    <img
                        src="/img3.jpg"
                        alt="Event"
                        className="rounded-md border border-gray-300 object-cover h-44 w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
