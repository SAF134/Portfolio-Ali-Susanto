export interface ProfileData {
  name: string;
  titles: string;
  role: string;
  bioSummary: string;
  officeAddress: string;
  homeAddress: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  avatarPlaceholderText: string;
  cvFileName: string;
}

export interface EducationItem {
  id: string;
  type: "formal" | "non-formal";
  institution: string;
  majorOrFocus?: string;
  period: string;
  location: string;
}

export interface WorkExperienceItem {
  id: string;
  position: string;
  institution: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  category?: "Dinas" | "Koperasi" | "Organisasi" | "Pendidikan";
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
}

export interface CertificateFrameItem {
  id: string;
  code: string;
  title: string;
  aspectRatio: string;
  placeholderText: string;
  imageSrc?: string;
}
