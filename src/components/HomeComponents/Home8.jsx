import React from 'react';

const Home8 = () => {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row bg-white min-h-[700px]">
            {/* Left Image Area */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden group">
                {/* 
                  Make sure the image overflows and zooms slightly on hover 
                  Overlay to make it professional 
                */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img
                    src="/home8-bg.png"
                    alt="Construction worker on rebar"
                    className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
            </div>

            {/* Right Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 xl:px-28 z-10">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-block bg-[#FFC107] text-[#111] font-bold uppercase tracking-wider text-[11px] md:text-sm px-4 py-2 mb-8">
                        // OUR GUIDING VALUES
                    </div>

                    {/* Heading */}
                    <h2 className="text-[2.2rem] md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-[#111] leading-[1] mb-14 tracking-tighter uppercase font-heading">
                        Committed to <br className="hidden md:block" />
                        quality and <br className="hidden md:block" />
                        integrity
                    </h2>

                    {/* Icon Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        {/* Box 1 */}
                        <div className="group">
                            <div className="flex items-start mb-4">
                                <div className="mr-5 text-[#111] transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 3h12l4 6-10 13L2 9Z" />
                                        <path d="M11 3 8 9l4 13" />
                                        <path d="M2 9h20" />
                                        <circle cx="17" cy="5" r="3" fill="white" stroke="#111" strokeWidth="1.5" />
                                        <path d="M16 5l1 1 2-2" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111] font-heading leading-none transition-colors duration-300 group-hover:text-[#FFC107]">
                                    Quality <br /> Commitment
                                </h3>
                            </div>
                            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                                Delivering high-quality, reliable construction with excellence and precision
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="group">
                            <div className="flex items-start mb-4">
                                <div className="mr-5 text-[#111] transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                        <path d="M14 2v6h6" />
                                        <path d="m9 15 2 2 4-4" stroke="#FFC107" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111] font-heading leading-none transition-colors duration-300 group-hover:text-[#FFC107]">
                                    Trusted <br /> Expertise
                                </h3>
                            </div>
                            <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                                Providing reliable guidance built on experience, professionalism, and proven capability
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200 mb-10"></div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            "Committed to Quality Construction",
                            "Client Satisfaction Is Our Priority",
                            "Building Strong and Lasting Foundations",
                            "Reliable Project Delivery Every Time",
                            "Innovative Solutions for Every Project",
                            "Integrity and Trust in Every Build"
                        ].map((text, i) => (
                            <div key={i} className="flex items-start group cursor-pointer">
                                <div className="mt-1 mr-3 min-w-[20px] text-[#FFC107] transform transition-transform duration-300 group-hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <span className="text-[14px] font-bold text-[#111] leading-snug transition-colors duration-300 group-hover:text-[#FFC107]">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
                .font-heading {
                    font-family: 'Inter', 'Roboto', sans-serif;
                }
            `}</style>
        </section>
    );
};

export default Home8;