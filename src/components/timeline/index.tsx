import React from "react";
import { timelineData } from "./data";

const Timeline: React.FC = () => {
    const getIcon = (type: number) => {
        if (type === 1) return "/icons/apple.svg"; // For all Apple related positions
        if (type === 2) return "/icons/work.svg"; // For internship positions
        if (type === 3) return "/icons/college.svg"; // For education
        return "/icons/pencilruler.svg";; // For early or undefined work (e.g. before formal education)
    };

    return (
        <section id="timeline" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    Timeline
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="timeline-item backdrop-blur-md backdrop-brightness-150 bg-white rounded-lg p-6 mb-6 shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-2">
                                {/* Replace emoji with icons */}
                                <img src={getIcon(item.iconType)} alt="icon" className="w-8 h-8" />
                                <h3 className="text-xl font-semibold text-right text-blue-900">{item.year}</h3>
                            </div>
                            <p className="text-gray-800">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;