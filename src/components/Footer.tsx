import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Footnote {
    description: string;
}

interface Section {
    title: string;
    links: string[];
}

interface MobileSectionProps {
    title: string;
    links: string[];
}

function Footer() {
    const Footnotes: Footnote[] = [
        { description: "From June 17 to September 30, 2025. Qualified Purchasers can receive Promotion Savings when they purchase an Eligible Product with their choice of a Promotion Product at a Qualifying Location. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. Subject to terms and conditions herein." },
        { description: "Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation." },
        { description: "New and qualified returning subscribers only. To receive six months free, offer must be redeemed on iPhone, iPad, or Mac. Six-month offer valid from July 23 to October 24, 2025. Other qualified subscribers receive one month free. ₱139/month after free trial. Plan automatically renews until cancelled. Terms apply." }
    ];

    const sections: Section[] = [
        { title: "Shop and Learn", links: ["Store", "Mac", "iPhone", "Watch", "Vision", "Airpods"] },
        { title: "Account", links: ["Manage your Apple Account", "Apple Store Account", "iCloud.com"] },
        { title: "Apple Store", links: ["Apple Store App", "Apple Recycling Program", "Order Status", "Shopping Help"] },
        { title: "For Business", links: ["Apple and Business"] },
        { title: "Apple Values", links: ["Accessibility", "Environment", "Privacy", "Supply Chain Innovation"] },
        { title: "Apple Wallet", links: ["Wallet"] },
        { title: "Entertainment", links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"] },
        { title: "For Education", links: ["Apple and Education", "Shop for College"] },
        { title: "About Apple", links: ["Investors", "Ethics & Compliance", "Events", "Contact Apple"] },
    ];

    const MobileSection: React.FC<MobileSectionProps> = ({ title, links }) => {
        const [open, setOpen] = useState(false);

        return (
            <div className="border-b border-gray-300 py-3">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center text-left"
                >
                    <span className="font-bold">{title}</span>
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {open && (
                    <ul className="mt-2 text-gray-600 space-y-2 pl-3">
                        {links.map((link, idx) => (
                            <li key={idx} className="cursor-pointer hover:underline">{link}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className="bg-slate-200 max-w-full w-full p-3">
            {/* Footnotes */}
            <ol className="list-decimal max-w-2xs md:max-w-4xl mx-auto text-xs text-gray-600 pl-5">
                {Footnotes.map((note, index) => (
                    <li key={index} className="pt-2">{note.description}</li>
                ))}
            </ol>
            <div className="max-w-2xs md:max-w-4xl mx-auto text-gray-600">
                <p className="text-xs pt-2">A subscription is required for Apple TV+.</p>
                <p className="text-xs pt-2">Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
            </div>

            <hr className="border-gray-400 mt-5 max-w-4xl mx-auto" />

            {/* Mobile View */}
            <div className="md:hidden max-w-4xl mx-auto pt-3">
                {sections.map((sec, idx) => (
                    <MobileSection key={idx} title={sec.title} links={sec.links} />
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-5 text-xs max-w-4xl mx-auto pt-5 gap-6">
                {sections.map((sec, idx) => (
                    <div key={idx}>
                        <h6 className="font-bold pb-3">{sec.title}</h6>
                        <ul className="text-gray-600 space-y-3">
                            {sec.links.map((link, lidx) => (
                                <li key={lidx} className="cursor-pointer hover:underline">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='text-xs pt-8 pb-3 max-w-4xl mx-auto'>
                <p className='text-gray-600'>More ways to shop: <span className='text-blue-500 underline'>Find a retailer</span> near you. Or call <span className='text-blue-500 underline'>1800-1651-0525</span> (Smart/PLDT), <span className='text-blue-500 underline'>1800-8474-7382</span> (Globe).</p>
            </div>
            <hr className='border-gray-400 max-w-4xl mx-auto'/>
            <div className='pt-3'>
                <p className='max-w-4xl mx-auto text-xs'>For demonstration purposes only. Not an official Apple website.</p>
            </div>
        </div>
    );
}

export { Footer };
