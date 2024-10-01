import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/dastronmighty/justeoghan.github.io"
                        aria-label="GitHub"
                        className="hover:opacity-75 transition duration-300"
                    >
                        <img src="icons/github-mark-white.svg" alt="GitHub" className="w-8 h-8" />
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/eoghanhogan99/"
                        aria-label="LinkedIn"
                        className="hover:opacity-75 transition duration-300"
                    >
                        <img src="icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>

                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Eoghan Hogan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
