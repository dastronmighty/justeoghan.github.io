import React from 'react';


const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    About Me
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>
                <div className="relative text-lg leading-8 text-gray-700 max-w-6xl mx-auto p-6 bg-white backdrop-blur-md rounded-xl shadow-xl">
                    <p>
                        Hi 👋 <br /> I'm Eoghan, a self-taught programmer turned B.Sc. in Computer Science, with a focus on Data Science. My journey into AI began with modding Minecraft—creating new mobs and mods really sparked my curiosity, and what started as a hobby soon grew into a career.
                        I'm particularly fascinated by Self-Play and Reinforcement Learning, and I’m passionate about leveraging Machine Learning to create meaningful change. I strongly believe in the power of open-source software and ensuring free access to knowledge for everyone, with the goal of building a better world through technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;