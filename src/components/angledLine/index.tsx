import React from 'react';
import './index.css'

const AngledLine: React.FC = () => {
    return (
        <div className="relative w-full h-24">
            <div className="absolute inset-0 clip-angled-transition"></div>
        </div>
    );
};

export default AngledLine;
