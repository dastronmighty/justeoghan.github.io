import React from 'react';
import './index.css'

const AngledLine: React.FC = () => {
    return (
        <div className="relative w-full h-24 bg-gray-100">
            <div className="absolute inset-0 bg-gray-100 clip-angled-transition"></div>
            <div className="absolute inset-0 border-angled-transition"></div>
        </div>
    );
};

export default AngledLine;
