import React from 'react'
import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, BuildingOffice2Icon, TruckIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'

const Home3 = () => {
    // Icons
    const services = [
        {
            title: "RENOVATION &\nREMODELING",
            icon: <WrenchScrewdriverIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "CONSTRUCTION\nPLANNING",
            icon: <BuildingOffice2Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "CONSULTING\nSERVICES",
            icon: <TruckIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "STRUCTURAL\nDESIGN",
            icon: <Cog8ToothIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        }
    ]

    return (
        <section className="relative w-full bg-[#050505] overflow-hidden">
            {/* Top Image Section */}
            <div className="relative w-full h-[60svh] min-h-[450px] lg:h-[700px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Modern Architecture Construction"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 select-none grayscale-[0.1]"
                />

                {/* Text overlay */}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center -mt-8 md:-mt-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] tracking-tighter uppercase leading-[0.95] md:leading-[0.85] w-full flex flex-col items-center"
                    >
                        <span>Building Strength</span>
                        <span className="text-white px-2 mt-2 md:mt-0">With Integrity</span>
                    </motion.h2>
                </div>
            </div>

            {/* Straight Ribbon Marquee Divider */}
            <div className="relative w-full h-[40px] md:h-[60px] lg:h-[80px] z-20 overflow-hidden flex items-center justify-center pointer-events-none select-none bg-[#0a0a0a]">
                <div className="absolute w-[110%] h-full flex items-center justify-center border-y-4 border-[#050505]">
                    <div className="w-full h-full caution-tape animate-stripe-slide"></div>
                </div>
            </div>

            {/* Bottom Services Section */}
            <div className="w-full bg-[#050505] pt-16 md:pt-24 pb-20 relative z-10">
                {/* Badge & Title */}
                <div className="container mx-auto px-6 mb-16 md:mb-20 flex flex-col items-center">

                    <div className="w-full relative flex flex-col xl:flex-row items-center justify-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="xl:absolute xl:left-0 bg-[#FFB800] px-6 py-2 xl:py-3 mb-8 xl:mb-0 self-start xl:self-auto z-10"
                        >
                            <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm whitespace-nowrap">
                                Explore Our Services
                            </span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-extrabold uppercase leading-[1.1] tracking-tight max-w-4xl text-center"
                        >
                            Quality Construction<br />
                            Solutions Provided
                        </motion.h3>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="container mx-auto px-6 xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/5 lg:divide-x divide-white/5">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                                className="group p-8 md:p-10 xl:p-14 flex flex-col border-b md:border-b-0 border-white/5 last:border-b-0 items-start hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer min-h-[250px] xl:min-h-[350px]"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 xl:w-20 xl:h-20 bg-white/5 border border-white/10 flex items-center justify-center mb-8 xl:mb-12 text-white group-hover:text-[#FFB800] group-hover:border-[#FFB800]/40 transition-all duration-500 shadow-none">
                                    {service.icon}
                                </div>
                                <h4 className="text-white font-extrabold text-xl xl:text-3xl uppercase leading-[1.2] tracking-tight mt-auto group-hover:text-[#FFB800] transition-colors whitespace-pre-wrap">
                                    {service.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home3