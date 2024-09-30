import React from "react";
import Slider from "react-slick";

// Sample project data
const projectData = [
    {
        title: "URL Shortener",
        description: "A URL shortner Project built with React and MongoDB",
        githubLink: "https://github.com/dastronmighty/url-shortener",
        year: "2018"
    },
    {
        title: "Gamma Gym",
        description: "Final Year thesis which won me the Franz Geiselbrechtinger Medal for best project in a Domain.",
        githubLink: "https://github.com/dastronmighty/gammagym/blob/main/no_code/GammaGym.pdf",
        year: "2021"
    },
    {
        title: "MCM Project",
        description: "During college me and Two Colleagues entered the Mathematical Competition in Modelling. We got a \"Honorable Mention\" which only about 21% of teams get",
        githubLink: "https://github.com/dastronmighty/MCM-2019/blob/latex_file/Super_Drone_Fleet.pdf",
        year: "2019"
    },
    {
        title: "PHP api Showcase",
        description: "Basically I was interested in checking out PHP as a backend and this shows how useful it can be",
        githubLink: "https://github.com/dastronmighty/php-api-showcase",
        year: "2023"
    },
    {
        title: "Fit Together",
        description: "A MERN stack app for fitness groups. Create, Join and find new friends with this all in one fitness group apps.",
        githubLink: "https://github.com/dastronmighty/Fit-Together",
        year: "2018"
    },
    {
        title: "Naughts and Crosses React app",
        description: "A React App using Min-Max to plpay Xs and Os",
        githubLink: "https://github.com/dastronmighty/x-o-react-app",
        year: "2022"
    }
];


const Projects: React.FC = () => {
    // Sort projectData by year in descending order (most recent first)
    const sortedProjectData = [...projectData].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    // Settings for the react-slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

                <Slider {...settings}>
                    {sortedProjectData.map((project, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 backdrop-blur-md">
                                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
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