import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#10151A]">
      <div className="flex flex-col items-center">
        <img
          src="/attached_assets/codeverges.jpeg"
          alt="CodeVerge Logo Loader"
          className="w-20 h-20 mb-6 rounded-2xl shadow-lg animate-pulse"
        />
        <div className="w-12 h-12 border-4 border-[#9FA2AB] border-t-white rounded-full animate-spin mb-2"></div>
      </div>
    </div>
  );
} 