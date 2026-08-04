"use client";

import { getServices } from "@/lib/content";
import { getServiceIcon } from "@/lib/icon-map";
import { VerticalProcessTimeline } from "@/components/shared/vertical-process-timeline";

export function ServiceProcess() {
  const steps = getServices().map((service) => ({
    title: service.title,
    description: service.shortDescription,
    icon: getServiceIcon(service.icon),
    details: service.details,
  }));

  return <VerticalProcessTimeline steps={steps} />;
}
