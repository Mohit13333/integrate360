import React from "react";
import { ArrowUpRight } from "lucide-react";

const NoticesSection = () => {
  return (
    <section className="bg-[url('/bg1.jpg')] bg-cover py-16 px-4 text-white">
      <div className="md:mx-32 grid md:grid-cols-3 gap-6">
        {/* Notice Board */}
        <div>
          <div className="bg-white text-[#0e3c60] p-2 rounded-xl flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-semibold text-center w-full">Notice Board</h3>
            <img
              src="/whitearr.png"
              alt="Arrow"
              className="ml-4 w-8 h-8 md:w-22 md:h-22 shrink-0"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                Declaration of Ph.D admission result
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                CAP Process is started for <span className="text-[#D3413F]">MBA/MMS</span> course A.Y. 2024-25
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                CAP Process is started for <span className="text-[#D3413F]">MCA</span>  course A.Y.
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                FREE CET PREPARATION CLASSES 2024
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                Large-scale clean-up drive at Mithi River - (sep-16 2023,
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                MCA Regular Lectures starting from September 4, 2023
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
          </div>
        </div>

        {/* Admission Notice */}
        <div>
          <div className="bg-white text-[#0e3c60] p-2 rounded-xl flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-semibold text-center w-full">Admission Notice</h3>
            <img
              src="/whitearr.png"
              alt="Arrow"
              className="ml-4 w-8 h-8 md:w-22 md:h-22 shrink-0"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-start gap-2 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                EMBA July 2024 (Batch) Admission is closed
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 pb-3">
              <span className="text-xl leading-none mt-1"></span>
              <div className="flex-1 text-sm md:text-lg">
                Admission open next (November 2024) — Limited seats
              </div>
              <p className="min-w-[1rem]"></p>
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1"></span>
              <div className="flex-1 text-sm md:text-lg">
                (Online and offline mode available) Contact: Toll Free -1800 8891335, Missed Call - 1800 315 7110
              </div>
              <p className="min-w-[1rem]"></p>
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                PGDM (Batch 2024-2026) Admission Open — Contact: Toll Free -1800 889 1335, Missed call - 1800 315 7110
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
          </div>
        </div>

        {/* Exam Notice */}
        <div>
          <div className="bg-white text-[#0e3c60] p-2 rounded-xl flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-semibold text-center w-full">Exam Notice</h3>
            <img
              src="/whitearr.png"
              alt="Arrow"
              className="ml-4 w-8 h-8 md:w-22 md:h-22 shrink-0"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                EMBA 23A1-T4
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                MMS (2024-2026) S1 Endterm Examination
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                MMS (2024-2026) S1 Midterm Examination
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                MCA (2024-2026) S1 Practical Exam (University)
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
            <div className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
              <span className="text-xl leading-none mt-1">•</span>
              <div className="flex-1 text-sm md:text-lg">
                MCA (2023-2025) - Sem 2 - Practical Exam
              </div>
              <img src="/blackarr.png" alt="arr" className="min-w-[1rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;