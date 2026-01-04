export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-[#E2E8D4] rounded-full shadow-sm"></div>
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="55" width="50" height="22" rx="3" fill="#2D5016" />
        <path d="M35 55V77M50 55V77M65 55V77" stroke="#F5F0E8" strokeWidth="2"/>
        <path d="M50 55C50 30 35 20 25 20M50 55C50 30 65 20 75 20M50 55V35" stroke="#86C494" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="25" cy="20" r="6" fill="#86C494" />
        <circle cx="75" cy="20" r="6" fill="#86C494" />
      </svg>
    </div>
  );
}
