import React from "react";
import Slider from "react-slick";
import { projectData } from "./data";
import "./index.css"

const Projects: React.FC = () => {
    const sortedProjectData = [...projectData].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    Projects
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>
                <Slider {...settings} className="color-slider-button">
                    {sortedProjectData.map((project, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 backdrop-blur-md h-auto md:h-56 flex flex-col">
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">
                                    {project.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-700 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-500 text-white py-2 px-3 md:px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-auto w-full md:w-3/6 text-center flex items-center justify-center"
                                >
                                    <img
                                        src="/icons/github-mark-white.svg"
                                        alt="GitHub"
                                        className="w-5 h-5 mr-2"
                                    />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Projects;
