import React from "react";

export default function LastSection() {
  const features = [
    "We believe in food that speaks for itself: pure, honest, and full of character.",
    "Every ingredient is chosen with care, every product crafted with respect for tradition.",
    "Quality isn't a claim we make; it's the result of experience, precision, and relentless attention to detail.",
    "With less, more itself becomes a moment of trust, a connection, a taste that feels real.",
  ];

  return (
    <div className="min-h-screen bg-emerald-800 flex items-center justify-center p-5">
      <div className="w-full max-w-4xl bg-emerald-800 rounded-3xl overflow-hidden">
        {/* Top Section */}
        <div className="bg-emerald-800 text-white text-center py-16 px-10">
          <h1 className="text-6xl font-bold mb-5">Welcome</h1>
        </div>

        {/* Red Section with Waves */}
        <div className="relative bg-red-800 text-white px-10 py-20">
          {/* Top Wave */}
          <div className="absolute top-0 left-0 w-full h-20 -mt-px overflow-hidden">
            <svg
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
                fill="#991b1b"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✦</div>
                <div className="text-sm leading-relaxed">{feature}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-white/20">
            <a
              href="#"
              className="text-white underline hover:text-white/80 transition"
            >
              Contact US
            </a>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full h-16 -mb-px overflow-hidden">
            <svg
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 L0,30 Q300,60 600,30 T1200,30 L1200,0 Z"
                fill="#991b1b"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
