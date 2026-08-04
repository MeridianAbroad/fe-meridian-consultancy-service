"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-success-500 text-white shadow-lift transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-success-500 opacity-40" />
        <MessageCircle className="size-6" strokeWidth={2} />
      </Link>
    </motion.div>
  );
}
