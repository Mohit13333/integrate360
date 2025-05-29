import { ArrowUpRight, Search } from 'lucide-react';

const AdmissionsBanner = () => {
  return (
    <div className="bg-[#063665] text-white w-full py-3">
      {/* Container with max-width and auto margins */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="text-sm sm:text-base">Admissions Open</span>

        <div className="flex items-center gap-2">
          <div className="bg-white text-[#063665] p-2 rounded-full">
            <img src="/blsearch.svg" alt="arr" className="min-w-[1rem]" />
          </div>
          <button className="bg-white text-[#063665] px-4 py-2 rounded-full flex items-center gap-1 font-medium text-sm">
            Apply Now
            <img src="/blarr.svg" alt="arr" className="min-w-[1rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsBanner;