import {
  Compass,
  GraduationCap,
  FileText,
  ClipboardCheck,
  Stamp,
  Mail,
  PlaneLanding,
  Home,
  ShieldCheck,
  FileSignature,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  GraduationCap,
  FileText,
  ClipboardCheck,
  Stamp,
  Mail,
  PlaneLanding,
  Home,
  ShieldCheck,
  FileSignature,
  Smartphone,
  Users,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Compass;
}
