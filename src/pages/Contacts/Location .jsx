import { Phone, MapPin, Clock } from 'lucide-react';

const Location = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-screen-xl mx-auto">
            {/* Phone Box */}
            <div className="border shadow-sm">
                <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                    <Phone size={24} />
                </div>
                <div className="bg-gray-100 text-center pt-6 pb-10 mx-4">
                    <h3 className="font-semibold text-lg mb-2">PHONE</h3>
                    <p className="text-sm">+38 (012) 34 56 789</p>
                </div>
            </div>

            {/* Address Box */}
            <div className="border shadow-sm">
                <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                    <MapPin size={24} />
                </div>
                <div className="bg-gray-100 text-center pt-6 pb-10 mx-4">
                    <h3 className="font-semibold text-lg mb-2">ADDRESS</h3>
                    <p className="text-sm">+38 (012) 34 56 789</p>
                </div>
            </div>

            {/* Working Hours Box */}
            <div className="border shadow-sm">
                <div className="bg-[#D1A054] text-white flex justify-center items-center h-16">
                    <Clock size={24} />
                </div>
                <div className="bg-gray-100 text-center py-6 mx-4 mb-6">
                    <h3 className="font-semibold text-lg mb-2">WORKING HOURS</h3>
                    <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Location 