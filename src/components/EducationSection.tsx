"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { EducationItem } from "@/types/portfolio";

interface EducationSectionProps {
  educationList: EducationItem[];
}

export default function EducationSection({ educationList }: EducationSectionProps) {
  const formalEdu = educationList.filter((item) => item.type === "formal");
  const nonFormalEdu = educationList.filter((item) => item.type === "non-formal");

  return (
    <section id="pendidikan" className="py-20 sm:py-28 border-b border-neutral-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Riwayat <span className="text-brand-blue">Pendidikan.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-muted">
            Latar belakang akademis formal dan pelatihan kedinasan selama menempuh perjalanan
            pengabdian.
          </p>
        </div>

        {/* 1. Formal Education Subsection */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-brand-blue flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-heading tracking-tight">
              Pendidikan Formal
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-neutral-muted">
              {formalEdu.length} Tingkat
            </span>
          </div>

          <div className="space-y-4">
            {formalEdu.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white border border-neutral-border hover:border-slate-300 rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200/80 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-neutral-heading group-hover:text-brand-blue transition-colors">
                        {item.institution}
                      </h4>
                      {item.majorOrFocus && (
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-body mt-1">
                          <BookOpen className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>Program Studi: {item.majorOrFocus}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-neutral-muted mt-1.5">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Year Pill Badge */}
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

        {/* 2. Non-Formal Education & Training Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-heading tracking-tight">
              Pendidikan Non-Formal & Pelatihan Kedinasan
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-neutral-muted">
              {nonFormalEdu.length} Diklat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nonFormalEdu.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-border hover:border-slate-300 rounded-2xl p-5 shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Pelatihan / Diklat
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-muted font-medium">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-neutral-heading leading-snug">
                    {item.majorOrFocus}
                  </h4>
                  <p className="text-xs text-neutral-body font-medium mt-2">
                    Penyelenggara: {item.institution}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-neutral-muted mt-4 pt-3 border-t border-slate-100">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Lokasi: {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
