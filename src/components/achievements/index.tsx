import React from 'react';
import Slider from 'react-slick';
import { achievementsData, Achievement } from './data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Achievements: React.FC = () => {
    const sortedAchievementsData = [...achievementsData].sort((a, b) => parseInt(b.date) - parseInt(a.date));

    // Define the settings for react-slick carousel
    const settings = {
        dots: false, // Show dots below the carousel
        infinite: true, // Enable infinite loop
        speed: 500, // Animation speed
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per click
        rows: 2,
        responsive: [
            {
                breakpoint: 1024, // On large devices
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // On medium devices (tablets)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // On small devices (phones)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="achievements" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    Achievements
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>

                {/* React Slick Slider */}
                <Slider {...settings} className='color-slider-button'>
                    {sortedAchievementsData.map((achievement: Achievement, index: number) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg p-6 backdrop-blur-md">
                                {achievement.icon && (
                                    <img
                                        src={achievement.icon}
                                        alt={`${achievement.title} icon`}
                                        className="w-12 h-12 mb-4"
                                    />
                                )}
                                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                <p className="text-gray-700 mb-4">{achievement.description}</p>
                                <p className="text-gray-500 mb-4">{achievement.date}</p>
                                {achievement.link && (
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Achievements;
