"use client";

import { Users, Calendar, MapPin, Award } from "lucide-react";
import { OrganizationItem } from "@/types/portfolio";

interface OrganizationSectionProps {
  organizationList: OrganizationItem[];
}

export default function OrganizationSection({
  organizationList,
}: OrganizationSectionProps) {
  return (
    <section id="organisasi" className="py-20 sm:py-28 border-b border-neutral-border/60">
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
          <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full bg-slate-100 text-neutral-body text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-brand-blue" />
            <span>{organizationList.length} Riwayat Organisasi</span>
          </div>
        </div>

        {/* 10 Linear Cards */}
        <div className="space-y-4">
          {organizationList.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white border border-neutral-border hover:border-slate-300 rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Squircle Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200/80 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-muted">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-brand-blue border border-blue-100">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-heading group-hover:text-brand-blue transition-colors">
                      {item.organization}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-neutral-muted">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="self-start sm:self-center shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-neutral-body text-xs font-semibold">
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
