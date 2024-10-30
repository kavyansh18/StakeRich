import React, { useState } from 'react';
import './imagehover.css'; 

const ImageHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {!isHovered && (
                <img
                    src="/lit.gif"
                    className="hover-image"
                />
            )}
        </div>
    );
};

export default ImageHover;
