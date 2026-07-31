import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SvgIcon({ children, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </SvgIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.67a16 16 0 0 0 6.24 6.24l1.19-1.19a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92Z" />
    </SvgIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </SvgIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m20 6-11 11-5-5" />
    </SvgIcon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.2 1.2 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </SvgIcon>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2v20" />
      <path d="M5 9h14" />
    </SvgIcon>
  );
}

export function HandHeartIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.5.6L3 16" />
      <path d="m7 20 1.6-1.4c.4-.4.9-.6 1.5-.6H14c1.1 0 2.1-.4 2.8-1.2L21 13" />
      <path d="M16.5 4.5c.9-.9 2.4-.3 2.4 1 0 1.8-2.4 3.2-2.4 3.2S14 7.3 14 5.5c0-1.3 1.6-1.9 2.5-1Z" />
    </SvgIcon>
  );
}

export function LandmarkIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 22h18" />
      <path d="M6 18V9" />
      <path d="M10 18V9" />
      <path d="M14 18V9" />
      <path d="M18 18V9" />
      <path d="m12 2 9 5H3Z" />
    </SvgIcon>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
    </SvgIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </SvgIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </SvgIcon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H5c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-3 2Z" />
      <path d="M14 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-3c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h.75c0 2.25-.75 4-2.75 4Z" />
    </SvgIcon>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M19 21a7 7 0 0 0-14 0" />
      <circle cx="12" cy="7" r="4" />
    </SvgIcon>
  );
}

export function CreditCardIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h2" />
    </SvgIcon>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </SvgIcon>
  );
}

export function WalletCardsIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 14a2 2 0 0 0 0 4h8v-4Z" />
      <path d="M18 6V4a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h13v4" />
      <path d="M18 18v2a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V5" />
    </SvgIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </SvgIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </SvgIcon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="18" height="12" x="3" y="10" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </SvgIcon>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </SvgIcon>
  );
}

export function RotateCcwIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </SvgIcon>
  );
}

export function SlidersHorizontalIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21 4h-7" />
      <path d="M10 4H3" />
      <path d="M21 12h-9" />
      <path d="M8 12H3" />
      <path d="M21 20h-5" />
      <path d="M12 20H3" />
      <path d="M14 2v4" />
      <path d="M8 10v4" />
      <path d="M16 18v4" />
    </SvgIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m12 3-1.9 4.8a2 2 0 0 1-1.1 1.1L4 11l5 2.1a2 2 0 0 1 1.1 1.1L12 19l1.9-4.8a2 2 0 0 1 1.1-1.1L20 11l-5-2.1a2 2 0 0 1-1.1-1.1Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </SvgIcon>
  );
}
