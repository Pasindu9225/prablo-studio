"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black py-16 px-[5%]" id="contact">
            <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center mb-16 shadow-xl">
                <h2 className="font-outfit text-3xl md:text-5xl mb-6 uppercase leading-tight font-bold">READY TO UPGRADE <br />YOUR BRAND?</h2>
                <p className="mb-8 text-lg opacity-90">Join the future with Prablo Studio.</p>
                <button className="bg-white text-primary border-none px-8 py-4 rounded-full font-bold cursor-pointer transition-transform duration-200 hover:scale-105 shadow-md">
                    Contact Us Now
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-300">
                <div className="lg:col-span-2">
                    <h3 className="font-outfit text-3xl text-black mb-4 font-bold leading-none">PRABLO<br />STUDIO</h3>
                    <p className="text-gray-600 max-w-[300px] leading-relaxed">We are a full-service digital agency focused on branding, marketing, and technology.</p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-primary text-lg">Company</h4>
                    <ul className="list-none space-y-3">
                        {['Home', 'About', 'Services', 'Careers'].map(item => (
                            <li key={item} className="text-gray-600 hover:text-primary cursor-pointer transition-colors">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-primary text-lg">Services</h4>
                    <ul className="list-none space-y-3">
                        {['Branding', 'Marketing', 'Development', 'Strategy'].map(item => (
                            <li key={item} className="text-gray-600 hover:text-primary cursor-pointer transition-colors">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-primary text-lg">Connect</h4>
                    <ul className="list-none space-y-3">
                        {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(item => (
                            <li key={item} className="text-gray-600 hover:text-primary cursor-pointer transition-colors">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
                <p>© 2026 Prablo Studio. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">Terms of Use</span>
                </div>
            </div>
        </footer>
    );
}
