import React from 'react'

const stepsData = [
  {
    step: "STEP 01",
    title: "PROJECT PLANNING",
    description: "Detailed planning ensures every project starts smoothly and efficiently.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-[42px] h-[42px] mb-8" stroke="#111" strokeWidth="2.5">
        <path d="M12 48l36-36v36H12z" strokeLinejoin="round" fill="#fff" />
        <path d="M18 48v4M24 48v6M30 48v4M36 48v6M42 48v4" strokeLinecap="round" />
        <path d="M12 52h36v4H12z" fill="#FFB703" stroke="none" />
      </svg>
    )
  },
  {
    step: "STEP 02",
    title: "PROCESS EXECUTION",
    description: "Skilled teams execute construction work with precision and care.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-[42px] h-[42px] mb-8" stroke="#111" strokeWidth="2.5">
        <rect x="24" y="24" width="16" height="28" fill="#fff" strokeLinejoin="round" />
        <rect x="28" y="28" width="8" height="6" strokeLinejoin="round" />
        <rect x="28" y="38" width="8" height="6" strokeLinejoin="round" />
        <path d="M18 52h28M32 10v14" strokeLinecap="round" />
        <path d="M26 18l6-8 6 8" strokeLinejoin="round" />
        <circle cx="20" cy="30" r="2" fill="#FFB703" stroke="none" />
        <circle cx="44" cy="40" r="2" fill="#FFB703" stroke="none" />
      </svg>
    )
  },
  {
    step: "STEP 03",
    title: "QUALITY REVIEW",
    description: "Thorough inspections guarantee quality results meet client expectations.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-[42px] h-[42px] mb-8" stroke="#111" strokeWidth="2.5">
        <rect x="16" y="16" width="32" height="6" rx="3" fill="#fff" strokeLinejoin="round" />
        <rect x="16" y="28" width="32" height="6" rx="3" fill="#fff" strokeLinejoin="round" />
        <rect x="16" y="40" width="32" height="6" rx="3" fill="#fff" strokeLinejoin="round" />
        <path d="M20 19h12" stroke="#FFB703" strokeLinecap="round" />
        <path d="M20 31h20" stroke="#FFB703" strokeLinecap="round" />
        <path d="M20 43h16" stroke="#FFB703" strokeLinecap="round" />
      </svg>
    )
  }
];

const Service3 = () => {
  return (
    <section className="py-20 md:py-28 bg-[#E6EEF4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10 lg:gap-8">
          
          {/* Left Title */}
          <div className="lg:w-3/5">
            <div className="inline-block bg-[#FFB703] px-4 py-[6px] mb-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#111]">
                // HOW WE WORK
              </span>
            </div>
            <h2 className="font-heading font-black text-[#111] text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] leading-[1.05] tracking-tight uppercase">
              EFFICIENT TRANSPARENT<br />
              RELIABLE PROFESSIONAL
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:w-2/5 flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.7] font-medium max-w-md mb-6 text-left">
              We follow a clear, efficient workflow that ensures quality
              results, timely delivery, and exceptional client
              satisfaction every time.
            </p>
            <a href="#" className="inline-flex items-center text-[#111] font-bold text-[10px] md:text-[11px] tracking-[0.15em] uppercase hover:text-[#FFB703] transition-colors w-full lg:w-auto text-left lg:justify-end">
              <svg className="w-[11px] h-[11px] mr-[10px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
              JOIN US NOW
            </a>
          </div>

        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {stepsData.map((item, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-10 md:p-12 xl:p-[3.5rem] flex flex-col items-start group transition-all duration-300 hover:shadow-lg lg:border-r border-gray-100 last:border-r-0`}
            >
              
              {/* Step Badge */}
              <div className="absolute top-0 right-0 bg-[#FFB703] px-4 py-[6px]">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#111]">
                  {item.step}
                </span>
              </div>

              {/* Icon */}
              <div className="transition-transform duration-500 group-hover:-translate-y-2">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[1.3rem] md:text-[1.4rem] font-black text-[#111] font-heading uppercase leading-[1.15] mb-4 tracking-tight group-hover:text-[#FFB703] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[13.5px] leading-[1.7] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Service3
