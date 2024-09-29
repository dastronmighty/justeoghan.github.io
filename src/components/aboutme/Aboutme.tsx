import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    About Me
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>
                <p className="text-lg leading-8 text-gray-700 max-w-5xl mx-auto">
                    Hello! <br />
                    I'm Eoghan, Self taught programmer turned Bs.c Computer Science With Data Science. Was interested in AI for Minecraft which grew into a career eventually <br />
                    Interested in creating a better world with the power of Machine Learning.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;