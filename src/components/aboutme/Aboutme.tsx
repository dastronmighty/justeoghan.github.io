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
                        Hello! <br />
                        I'm Eoghan, a self-taught programmer turned Bs.c in Computer Science with a focus on Data Science. I became interested in AI for Minecraft, which eventually grew into a career. <br />
                        I'm passionate about creating a better world with the power of Machine Learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;