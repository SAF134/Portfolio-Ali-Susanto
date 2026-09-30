"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { EducationItem } from "@/types/portfolio";

interface EducationSectionProps {
  educationList: EducationItem[];
}

interface EducationCardProps {
  item: EducationItem;
}

function EducationCard({ item }: EducationCardProps) {
  const isFormal = item.type === "formal";
  const iconColor = isFormal ? "text-brand-blue" : "text-emerald-700";
  const hoverColor = isFormal
    ? "group-hover:text-blue-900"
    : "group-hover:text-emerald-900";
  const bookIconColor = isFormal ? "text-brand-blue" : "text-emerald-800";
  const title = isFormal ? item.institution : item.majorOrFocus;
  const subtitleLabel = isFormal ? "Program Studi" : "Penyelenggara";
  const subtitleValue = isFormal ? item.majorOrFocus : item.institution;

  return (
    <div className="group relative bg-[#D9D9D9] border border-neutral-borderHover rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center ${iconColor} shrink-0 group-hover:scale-105 transition-transform shadow-btn`}
          >
            {isFormal ? (
              <GraduationCap className="w-6 h-6" />
            ) : (
              <Award className="w-6 h-6" />
            )}
          </div>

          <div>
            <h4
              className={`text-base sm:text-lg font-extrabold text-neutral-heading ${hoverColor} transition-colors`}
            >
              {title}
            </h4>
            {subtitleValue && (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-heading mt-1">
                <BookOpen className={`w-3.5 h-3.5 ${bookIconColor} shrink-0`} />
                <span>
                  {subtitleLabel}: {subtitleValue}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-slate-800 font-semibold mt-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {/* Year Pill Badge with Frame Shade */}
        <div className="self-start sm:self-center shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-neutral-heading text-xs font-bold shadow-btn">
            <Calendar className={`w-3.5 h-3.5 ${iconColor}`} />
            <span>{item.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection({
  educationList,
}: EducationSectionProps) {
  const formalEdu = educationList.filter((item) => item.type === "formal");
  const nonFormalEdu = educationList.filter(
    (item) => item.type === "non-formal",
  );

  return (
    <section
      id="pendidikan"
      className="py-20 sm:py-28 border-b border-neutral-border/80 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-heading">
            Riwayat <span className="text-brand-blue">Pendidikan.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-muted">
            Latar belakang akademis formal dan pelatihan kedinasan selama
            menempuh perjalanan pengabdian.
          </p>
        </div>

        {/* 1. Formal Education Subsection */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-brand-blue flex items-center justify-center shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-heading tracking-tight">
              Pendidikan Formal
            </h3>
          </div>

          <div className="space-y-4">
            {formalEdu.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* 2. Non-Formal Education Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-heading tracking-tight">
              Pendidikan Non-Formal
            </h3>
          </div>

          <div className="space-y-4">
            {nonFormalEdu.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
