import React from "react";
import { ArrowUpRight } from "lucide-react";

const data = {
  "Notice Board": [
    "Declaration of Ph.D admission result",
    "CAP Process is started for MBA/MMS course A.Y. 2024-25",
    "CAP Process is started for MCA course A.Y.",
    "FREE CET PREPARATION CLASSES 2024",
    "Large-scale clean-up drive at Mithi River - (sep-16 2023,",
    "MCA Regular Lectures starting from September 4, 2023",
  ],
  "Admission Notice": [
    "EMBA July 2024 (Batch) Admission is closed",
    "Admission open next (November 2024) — Limited seats",
    "(Online and offline mode available) Contact: Toll Free -1800 8891335, Missed Call - 1800 315 7110",
    "PGDM (Batch 2024-2026) Admission Open — Contact: Toll Free -1800 889 1335, Missed call - 1800 315 7110",
  ],
  "Exam Notice": [
    "EMBA 23A1-T4",
    "MMS (2024-2026) S1 Endterm Examination",
    "MMS (2024-2026) S1 Midterm Examination",
    "MCA (2024-2026) S1 Practical Exam (University)",
    "MCA (2023-2025) - Sem 2 - Practical Exam",
  ],
};

const NoticesSection = () => {
  return (
    <section className="bg-[url('/bg1.jpg')] bg-cover py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {Object.entries(data).map(([title, notices], index) => (
          <div
            key={index}
          >
            <div className="bg-white text-[#0e3c60] p-4 lg:p-10 rounded-xl flex items-center justify-between">
              <h3 className="text-lg font-semibold">{title}</h3>
              <ArrowUpRight className="text-[#0e3c60]" size={18} />
            </div>
            <div className="p-4 space-y-4">
              {notices.map((notice, i) => (
                <div key={i} className="flex items-start gap-2 border-dotted border-b border-white/30 pb-3">
                  <span className="text-xl leading-none mt-1">•</span>
                  <div className="flex-1 text-sm">
                    {notice}
                  </div>
                  <ArrowUpRight className="min-w-[1rem]" size={14} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticesSection;
