import React, { useState, useEffect } from "react";
import { timelineData } from "./data";
import MarkdownWrapper from "../mkdWrapper";

const Timeline: React.FC = () => {
    const [contentData, setContentData] = useState<{ [key: string]: string }>({});

    // Function to get the icon along with width and height properties
    const getIcon = (type: number) => {
        switch (type) {
            case 1:
                return { src: "/icons/apple.svg", width: 30, height: 30 }; // Apple related positions
            case 2:
                return { src: "/icons/work.svg", width: 30, height: 30 }; // Internship positions
            case 3:
                return { src: "/icons/college.svg", width: 50, height: 50 }; // Education
            default:
                return { src: "/icons/pencilruler.svg", width: 25, height: 25 }; // Early or undefined work
        }
    };

    // Function to fetch the content file
    const fetchContent = (contentFile: string, index: number) => {
        fetch(contentFile)
            .then((response) => response.text())
            .then((text) => {
                setContentData((prevContentData) => ({
                    ...prevContentData,
                    [index]: text, // Store content based on index
                }));
            })
            .catch((error) => console.error(`Error fetching ${contentFile}: `, error));
    };

    // Fetch content for all timeline items
    useEffect(() => {
        timelineData.forEach((item, index) => {
            if (item.contentFile) {
                fetchContent(item.contentFile, index);
            }
        });
    }, []);

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
                                {/* Adjust width and height for each icon */}
                                <img
                                    src={getIcon(item.iconType).src}
                                    alt="icon"
                                    className="w-auto h-auto"
                                    style={{ width: getIcon(item.iconType).width, height: getIcon(item.iconType).height }}
                                />
                                <h3 className="text-xl font-semibold text-right text-blue-900">{item.year}</h3>
                            </div>
                            <div className="text-gray-800">
                                <MarkdownWrapper content={contentData[index] || 'Loading content...'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;