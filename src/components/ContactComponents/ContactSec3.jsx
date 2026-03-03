import React from 'react'

const ContactSec3 = () => {
    return (
        <section className="relative">
            {/* Top Background Section */}
            <div
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888081157-1df61f6c770c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Header Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
                    <div className="inline-block bg-[#ffb800] px-3 py-1 mb-4 text-xs font-bold tracking-wider">
                        // LET'S WORK TOGETHER
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight">
                        NEED MORE HELP?<br />CONTACT OUR TEAM
                    </h2>
                </div>
            </div>

            {/* Bottom Cards Section (Overlapping) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative -mt-32 md:-mt-48 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl">

                    {/* Card 1 */}
                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team Support"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-4">TEAM SUPPORT</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our dedicated team provides responsive assistance to ensure every client receives dependable guidance throughout projects.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Quick Assistance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-4">QUICK ASSISTANCE</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We deliver fast, clear solutions to help clients resolve concerns and maintain steady project progress efficiently.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Project Guidance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-4">PROJECT GUIDANCE</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Expert advice helps clients navigate construction decisions confidently, ensuring each step aligns with project goals effectively.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSec3