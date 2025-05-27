import { ArrowUpRight, Search } from 'lucide-react';

const AdmissionsBanner = () => {
  return (
    <div className="bg-[#063665] text-white flex items-center justify-between px-6 py-3 w-full">
      <span className="text-sm sm:text-base">Admissions Open</span>

      <div className="flex items-center gap-2">
        <div className="bg-white text-[#063665] p-2 rounded-full">
          <Search size={16} />
        </div>
        <button className="bg-white text-[#063665] px-4 py-2 rounded-full flex items-center gap-1 font-medium text-sm">
          Apply Now
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AdmissionsBanner;
