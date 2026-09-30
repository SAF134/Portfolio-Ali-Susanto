import FloatingNavbar from "@/components/FloatingNavbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import OrganizationSection from "@/components/OrganizationSection";
import CertificatesSection from "@/components/CertificatesSection";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import {
  profileData,
  educationData,
  workExperienceData,
  organizationData,
  certificatePlaceholders,
} from "@/data/biodata";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-canvas-main text-neutral-heading flex flex-col">
      {/* Floating Glass Pill Navbar */}
      <FloatingNavbar />

      <main className="flex-1">
        {/* Seksi I: Profil & Hero */}
        <MotionReveal>
          <HeroSection profile={profileData} />
        </MotionReveal>

        {/* Seksi II: Riwayat Pendidikan (Formal & Non-Formal) */}
        <MotionReveal delay={0.1}>
          <EducationSection educationList={educationData} />
        </MotionReveal>

        {/* Seksi III: Pengalaman Kerja & Kepemimpinan (22 Posisi Lengkap) */}
        <MotionReveal delay={0.1}>
          <WorkExperienceSection workList={workExperienceData} />
        </MotionReveal>

        {/* Seksi IV: Jejak Organisasi & Pengabdian (10 Posisi) */}
        <MotionReveal delay={0.1}>
          <OrganizationSection organizationList={organizationData} />
        </MotionReveal>

        {/* Seksi V: Sertifikat & Penghargaan (Frame Rasio A4 1,414 : 1) */}
        <MotionReveal delay={0.1}>
          <CertificatesSection certificates={certificatePlaceholders} />
        </MotionReveal>
      </main>

      {/* Footer Terpadu & Back to Top */}
      <Footer profile={profileData} />
    </div>
  );
}
