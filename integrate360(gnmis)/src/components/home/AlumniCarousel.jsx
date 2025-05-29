// import React, { useState, useRef, useEffect } from "react";

// const alumniData = [
//     {
//         id: 1,
//         name: "Mr. Stevenson",
//         title: "Assistant Vice President",
//         batch: "MMS (BATCH 2016-18)",
//         video: "/video1.mp4",
//         thumbnail: "/al1.png"
//     },
//     {
//         id: 2,
//         name: "Mr. Hitesh",
//         title: "Branch Manager",
//         batch: "MMS (BATCH 2016-18)",
//         video: "/video2.mp4",
//         thumbnail: "/al2.png"
//     },
//     {
//         id: 3,
//         name: "Mr. Ramandeep Singh Arora",
//         title: "Deputy Manager at the Citi Bank, Mumbai",
//         batch: "PGDM (BATCH 2011-13)",
//         video: "/video3.mp4",
//         thumbnail: "/al3.png",
//         featured: true
//     },
//     {
//         id: 4,
//         name: "Ms. Sakshi Bhatia",
//         title: "Executive",
//         batch: "MMS (BATCH 2016-18)",
//         video: "/video4.mp4",
//         thumbnail: "/al4.png"
//     },
//     {
//         id: 5,
//         name: "Ms. Kavita Kedar",
//         title: "Executive, Blue Jet Airways Ltd",
//         batch: "MMS (BATCH 2016-18)",
//         video: "/video5.mp4",
//         thumbnail: "/al5.png"
//     }
// ];

// const AlumniCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(2); // Center card is default
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRefs = useRef([]);
//     const containerRef = useRef(null);
//     const [startX, setStartX] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);

//     const handlePlay = (index) => {
//         // Pause all other videos
//         videoRefs.current.forEach((ref, i) => {
//             if (ref && i !== index) {
//                 ref.pause();
//             }
//         });
//         setIsPlaying(true);
//     };

//     const handlePause = () => {
//         setIsPlaying(false);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev < alumniData.length - 1 ? prev + 1 : prev));
//     };

//     // Touch event handlers for swipe
//     const handleTouchStart = (e) => {
//         setStartX(e.touches[0].clientX);
//         setIsDragging(true);
//     };

//     const handleTouchMove = (e) => {
//         if (!isDragging) return;
//         const currentX = e.touches[0].clientX;
//         const diff = startX - currentX;
        
//         // If swipe is significant enough, change card
//         if (diff > 50) {
//             handleNext();
//             setIsDragging(false);
//         } else if (diff < -50) {
//             handlePrev();
//             setIsDragging(false);
//         }
//     };

//     const handleTouchEnd = () => {
//         setIsDragging(false);
//     };

//     // Keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.key === 'ArrowLeft') {
//                 handlePrev();
//             } else if (e.key === 'ArrowRight') {
//                 handleNext();
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, []);

//     return (
//         <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-bold text-blue-900 mb-26">Video Testimonials</h2>
//             <div 
//                 className="relative flex items-end justify-center h-[420px] sm:h-[420px]"
//                 ref={containerRef}
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//             >
//                 {alumniData.map((alumni, index) => {
//                     const offset = (index - currentIndex) * (window.innerWidth < 640 ? 100 : 180);
//                     const zIndex = index === currentIndex ? 50 : 40 - Math.abs(index - currentIndex);
//                     const scale = index === currentIndex ? "scale-110" : "scale-100";
                    
//                     return (
//                         <div
//                             key={index}
//                             className={`absolute transition-transform duration-300 w-64 sm:w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${scale}`}
//                             style={{ transform: `translateX(${offset}px)`, zIndex }}
//                         >
//                             <h1 className="border border-[#073763] mt-3"></h1>
//                             <div className="text-[#073763] text-xl sm:text-2xl font-bold py-2 text-center">
//                                 ALUMNI INTERACTION
//                             </div>
//                             <div className="relative h-60 sm:h-76 w-full bg-gray-200">
//                                 {isPlaying && index === currentIndex ? (
//                                     <video
//                                         ref={el => videoRefs.current[index] = el}
//                                         src={alumni.video}
//                                         controls
//                                         className="w-full h-full object-cover"
//                                         onPlay={() => handlePlay(index)}
//                                         onPause={handlePause}
//                                         autoPlay
//                                     />
//                                 ) : (
//                                     <>
//                                         <img
//                                             src={alumni.thumbnail}
//                                             alt={alumni.name}
//                                             className="w-full h-full object-cover"
//                                         />
//                                         <div className="absolute inset-0 flex justify-center items-center">
//                                             <button 
//                                                 className="bg-white/70 rounded-full flex p-3 sm:p-5 shadow-md"
//                                                 onClick={() => handlePlay(index)}
//                                             >
//                                                 <img src="/play.png" alt="Play" className="w-6 h-6 sm:w-8 sm:h-8" />
//                                             </button>
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                             <div className="p-4 text-center">
//                                 <p className="font-semibold text-[#073763] text-sm sm:text-base">{alumni.name}</p>
//                                 <p className="text-xs sm:text-sm font-poppins font-semibold text-black">({alumni.title})</p>
//                                 <p className="font-semibold text-[#073763] mt-1 text-sm sm:text-base">{alumni.batch}</p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
            
//             {/* Navigation buttons */}
//             <div className="flex justify-center mt-8 space-x-4">
//                 <button 
//                     onClick={handlePrev}
//                     disabled={currentIndex === 0}
//                     className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-300' : 'bg-blue-900 text-white'}`}
//                 >
//                     &larr; Prev
//                 </button>
//                 <button 
//                     onClick={handleNext}
//                     disabled={currentIndex === alumniData.length - 1}
//                     className={`p-2 rounded-full ${currentIndex === alumniData.length - 1 ? 'bg-gray-300' : 'bg-blue-900 text-white'}`}
//                 >
//                     Next &rarr;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AlumniCarousel;

import React, { useState, useRef, useEffect } from "react";

const alumniData = [
    {
        id: 1,
        name: "Mr. Stevenson",
        title: "Assistant Vice President",
        batch: "MMS (BATCH 2016-18)",
        video: "/video1.mp4",
        thumbnail: "/al1.png"
    },
    {
        id: 2,
        name: "Mr. Hitesh",
        title: "Branch Manager",
        batch: "MMS (BATCH 2016-18)",
        video: "/video2.mp4",
        thumbnail: "/al2.png"
    },
    {
        id: 3,
        name: "Mr. Ramandeep Singh Arora",
        title: "Deputy Manager at the Citi Bank, Mumbai",
        batch: "PGDM (BATCH 2011-13)",
        video: "/video3.mp4",
        thumbnail: "/al3.png",
        featured: true
    },
    {
        id: 4,
        name: "Ms. Sakshi Bhatia",
        title: "Executive",
        batch: "MMS (BATCH 2016-18)",
        video: "/video4.mp4",
        thumbnail: "/al4.png"
    },
    {
        id: 5,
        name: "Ms. Kavita Kedar",
        title: "Executive, Blue Jet Airways Ltd",
        batch: "MMS (BATCH 2016-18)",
        video: "/video5.mp4",
        thumbnail: "/al5.png"
    }
];

const AlumniCarousel = () => {
    const [startIndex, setStartIndex] = useState(0); // Starting index for the visible 5 cards
    const [isPlaying, setIsPlaying] = useState(false);
    const [playingIndex, setPlayingIndex] = useState(-1); // Which card position is playing
    const videoRefs = useRef([]);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // Get 5 cards to display based on startIndex
    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < 5; i++) {
            const dataIndex = (startIndex + i) % alumniData.length;
            cards.push(alumniData[dataIndex]);
        }
        return cards;
    };

    const handlePlay = (cardPosition) => {
        // Pause all other videos
        videoRefs.current.forEach((ref, i) => {
            if (ref && i !== cardPosition) {
                ref.pause();
            }
        });
        setIsPlaying(true);
        setPlayingIndex(cardPosition);
    };

    const handlePause = () => {
        setIsPlaying(false);
        setPlayingIndex(-1);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev > 0 ? prev - 1 : alumniData.length - 1));
        setIsPlaying(false);
        setPlayingIndex(-1);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % alumniData.length);
        setIsPlaying(false);
        setPlayingIndex(-1);
    };

    // Touch event handlers for swipe
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        
        // If swipe is significant enough, change card
        if (diff > 50) {
            handleNext();
            setIsDragging(false);
        } else if (diff < -50) {
            handlePrev();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const visibleCards = getVisibleCards();

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-26">Video Testimonials</h2>
            <div 
                className="relative flex items-end justify-center h-[420px] sm:h-[420px]"
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {visibleCards.map((alumni, cardPosition) => {
                    // Card positions: 0=far left, 1=left, 2=center, 3=right, 4=far right
                    const offset = (cardPosition - 2) * (window.innerWidth < 640 ? 100 : 180);
                    const isCenter = cardPosition === 2;
                    const scale = isCenter ? "scale-110" : "scale-100";
                    const zIndex = isCenter ? 50 : 40 - Math.abs(cardPosition - 2);
                    
                    return (
                        <div
                            key={`${alumni.id}-${cardPosition}`} // Key includes position to force re-render
                            className={`absolute transition-transform duration-300 w-64 sm:w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 ${scale}`}
                            style={{ transform: `translateX(${offset}px)`, zIndex }}
                        >
                            <h1 className="border border-[#073763] mt-3"></h1>
                            <div className="text-[#073763] text-xl sm:text-2xl font-bold py-2 text-center">
                                ALUMNI INTERACTION
                            </div>
                            <div className="relative h-60 sm:h-76 w-full bg-gray-200">
                                {isPlaying && playingIndex === cardPosition ? (
                                    <video
                                        ref={el => videoRefs.current[cardPosition] = el}
                                        src={alumni.video}
                                        controls
                                        className="w-full h-full object-cover"
                                        onPlay={() => handlePlay(cardPosition)}
                                        onPause={handlePause}
                                        autoPlay
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={alumni.thumbnail}
                                            alt={alumni.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center">
                                            <button 
                                                className="bg-white/70 rounded-full flex p-3 sm:p-5 shadow-md"
                                                onClick={() => handlePlay(cardPosition)}
                                            >
                                                <img src="/play.png" alt="Play" className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="p-4 text-center">
                                <p className="font-semibold text-[#073763] text-sm sm:text-base">{alumni.name}</p>
                                <p className="text-xs sm:text-sm font-poppins font-semibold text-black">({alumni.title})</p>
                                <p className="font-semibold text-[#073763] mt-1 text-sm sm:text-base">{alumni.batch}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
                <button 
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-blue-900 text-white"
                >
                    &larr; Prev
                </button>
                <button 
                    onClick={handleNext}
                    className="p-2 rounded-full bg-blue-900 text-white"
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

export default AlumniCarousel;