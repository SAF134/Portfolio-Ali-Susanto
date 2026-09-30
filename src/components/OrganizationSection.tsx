"use client";

import { Users, Calendar, MapPin } from "lucide-react";
import { OrganizationItem } from "@/types/portfolio";

interface OrganizationSectionProps {
  organizationList: OrganizationItem[];
}

export default function OrganizationSection({
  organizationList,
}: OrganizationSectionProps) {
  return (
    <section id="organisasi" className="py-20 sm:py-28 border-b border-neutral-border/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Jejak Organisasi & <span className="text-brand-blue">Pengabdian.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-muted">
            Kontribusi kepemimpinan dalam organisasi kemasyarakatan, kepemudaan, dan gerakan
            perkoperasian.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-4 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-neutral-heading text-xs font-bold shadow-xs">
            <Users className="w-3.5 h-3.5 text-brand-blue" />
            <span>{organizationList.length} Riwayat Organisasi</span>
          </div>
        </div>

        {/* 10 Linear Cards dengan warna #A3A3A3 dan bayangan tegas */}
        <div className="space-y-4">
          {organizationList.map((item, index) => (
            <div
              key={item.id}
              className="group bg-[#A3A3A3] border border-neutral-borderHover rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Squircle Icon with Button Shade */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-105 transition-transform shadow-btn">
                    <Users className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded-md bg-white border border-slate-300 text-neutral-heading shadow-xs">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-brand-blue shadow-xs">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-heading group-hover:text-blue-900 transition-colors">
                      {item.organization}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-slate-800 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Period Badge with Button Shade */}
                <div className="self-start sm:self-center shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-neutral-heading text-xs font-bold shadow-btn">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
