export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background/Base */}
      <rect width="200" height="200" rx="40" fill="transparent" />
      
      {/* The Checkmark / Arrow combination */}
      {/* Checkmark Left side (Green/Teal) */}
      <path
        d="M50 110 L85 145"
        stroke="#2dd4bf"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark Right side (Blue, going up to form T and Arrow) */}
      <path
        d="M85 145 L150 50"
        stroke="#0284c7"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* T Top Bar */}
      <path
        d="M40 60 L110 60"
        stroke="#0284c7"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Arrow Head */}
      <circle cx="160" cy="40" r="16" fill="#0284c7" />
    </svg>
  );
}
