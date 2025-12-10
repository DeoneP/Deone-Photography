
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BOOKED_DATES } from '../data/bookings';


interface AvailabilityCalendarProps {
    onDateSelect?: (date: string) => void;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isBooked = (year: number, month: number, day: number) => {
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return BOOKED_DATES.includes(dateString);
    };

    const handleDateClick = (year: number, month: number, day: number) => {
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (onDateSelect) {
            onDateSelect(dateString);
        }
    };

    const renderDays = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const days = [];

        // Empty cells for previous month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
        }

        // Days of current month
        for (let day = 1; day <= totalDays; day++) {
            const booked = isBooked(currentDate.getFullYear(), currentDate.getMonth(), day);
            days.push(
                <div
                    key={day}
                    onClick={() => !booked && handleDateClick(currentDate.getFullYear(), currentDate.getMonth(), day)}
                    className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200
                        ${booked
                            ? 'bg-[#1a3a32]/10 text-[#1a3a32]/40 line-through cursor-not-allowed'
                            : 'bg-white hover:bg-[#cba668] hover:text-[#1a3a32] text-[#1a3a32] cursor-pointer shadow-sm border border-[#1a3a32]/5 hover:scale-110'
                        }
                    `}
                    title={booked ? "Fully Booked" : `Select ${day} ${monthNames[currentDate.getMonth()]}`}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="bg-[#f4f1ea] p-6 rounded-sm border border-[#1a3a32]/10 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
                <button onClick={handlePrevMonth} className="p-2 hover:bg-[#1a3a32]/5 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5 text-[#1a3a32]" />
                </button>
                <h3 className="font-heading text-xl text-[#1a3a32]">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button onClick={handleNextMonth} className="p-2 hover:bg-[#1a3a32]/5 rounded-full transition-colors">
                    <ChevronRight className="w-5 h-5 text-[#1a3a32]" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                    <div key={idx} className="text-xs font-bold text-[#cba668]">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2 justify-items-center">
                {renderDays()}
            </div>

            <div className="mt-6 flex justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border border-[#1a3a32]/10 shadow-sm"></div>
                    <span className="text-[#1a3a32]/70">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#1a3a32]/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-[#1a3a32]/40 transform -rotate-45"></div>
                        </div>
                    </div>
                    <span className="text-[#1a3a32]/70">Booked</span>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
