import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const VideoTestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Stevenson",
      title: "Assistant Vice President",
      company: "MMS (BATCH 2016-18)",
      image: "/al1.png"
    },
    {
      id: 2,
      name: "Mr. Hitesh",
      title: "Branch Manager",
      company: "MMS (BATCH 2016-18)",
      image: "/al2.png"
    },
    {
      id: 3,
      name: "Mr. Ramandeep Singh Arora",
      title: "Deputy Manager at the Citi Bank, Mumbai",
      company: "PGDM (BATCH 2011-13)",
      image: "/al3.png"
    },
    {
      id: 4,
      name: "Ms. Sakshi Bhatia",
      title: "Executive",
      company: "MMS (BATCH 2016-18)",
      image: "/al4.png"
    },
    {
      id: 5,
      name: "Ms. Kavita Kedar",
      title: "Executive, Blue Jet Airways Ltd",
      company: "MMS (BATCH 2016-18)",
      image: "/al5.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Video Testimonials</h2>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="mx-12 relative h-96">
          <div className="flex justify-center items-center h-full">
            {getVisibleTestimonials().map((testimonial, index) => {
              const getCardConfig = () => {
                switch(index) {
                  case 0:
                    return {
                      width: '140px',
                      height: '200px',
                      imageHeight: '100px',
                      transform: 'translate-x-0 translate-y-12',
                      zIndex: 'z-0',
                      left: '8%',
                      textSize: 'text-xs',
                      playButton: 'w-4 h-4'
                    };
                  case 1:
                    return {
                      width: '170px',
                      height: '230px',
                      imageHeight: '120px',
                      transform: 'translate-x-0 translate-y-6',
                      zIndex: 'z-10',
                      left: '22%',
                      textSize: 'text-sm',
                      playButton: 'w-5 h-5'
                    };
                  case 2:
                    return {
                      width: '200px',
                      height: '260px',
                      imageHeight: '140px',
                      transform: 'translate-x-0 translate-y-0',
                      zIndex: 'z-20',
                      left: '40%',
                      textSize: 'text-base',
                      playButton: 'w-6 h-6'
                    };
                  case 3: 
                    return {
                      width: '170px',
                      height: '230px',
                      imageHeight: '120px',
                      transform: 'translate-x-0 translate-y-6',
                      zIndex: 'z-10',
                      left: '62%',
                      textSize: 'text-sm',
                      playButton: 'w-5 h-5'
                    };
                  case 4: 
                    return {
                      width: '140px',
                      height: '200px',
                      imageHeight: '100px',
                      transform: 'translate-x-0 translate-y-12',
                      zIndex: 'z-0',
                      left: '80%',
                      textSize: 'text-xs',
                      playButton: 'w-4 h-4'
                    };
                  default:
                    return {
                      width: '170px',
                      height: '230px',
                      imageHeight: '120px',
                      transform: 'translate-x-0',
                      zIndex: 'z-0',
                      left: '50%',
                      textSize: 'text-sm',
                      playButton: 'w-5 h-5'
                    };
                }
              };
              
              const config = getCardConfig();

              return (
                <div 
                  key={`${testimonial.id}-${currentSlide}} 
                  className={absolute transform ${config.transform} ${config.zIndex} group`}
                  style={{
                    left: config.left,
                    width: config.width,
                    height: config.height
                  }}
                >
                  <div className="bg-blue-900 text-white text-center py-2 px-2 text-xs font-semibold rounded-t-lg">
                    ALUMNI INTERACTION
                  </div>
                  
                  <div className="relative bg-white rounded-b-lg shadow-xl overflow-hidden border border-gray-200 h-full">
                    <div 
                      className="relative bg-gray-200"
                      style={{ height: config.imageHeight }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-200">
                        <div className="bg-white bg-opacity-90 rounded-full p-2 group-hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <Play className={`${config.playButton} text-blue-900 ml-0.5`} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-2 text-center">
                      <h4 className={`font-bold text-gray-900 ${config.textSize} mb-1 leading-tight`}>
                        {testimonial.name}
                      </h4>
                      <p className={`${index === 2 ? 'text-xs' : 'text-xs'} text-gray-600 mb-1 leading-tight`}>
                        {testimonial.title}
                      </p>
                      <p className={`${index === 2 ? 'text-xs' : 'text-xs'} text-blue-700 font-semibold leading-tight`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-900' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default VideoTestimonialsCarousel;