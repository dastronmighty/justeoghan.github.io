import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="relative text-4xl font-bold text-center mb-8">
                    Contact Me
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                </h2>
                <form
                    id="contact-form"
                    action="https://formspree.io/f/mblrvzwy"
                    method="POST"
                    className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8"
                >
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">
                            Name<span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            aria-required="true"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Email<span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            required
                            aria-required="true"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">
                            Message<span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            aria-required="true"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <hr className="my-8 border-gray-100" />

                <div className="text-center">
                    <a
                        href="cv/CV0924.pdf"
                        className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                        aria-label="Download CV"
                        download
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};


export default Contact;
