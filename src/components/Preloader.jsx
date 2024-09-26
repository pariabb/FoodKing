import React, { useEffect, useState } from 'react';


const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false); 
            }, 3000); 
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {isLoading && (
                <div id="preloader">
                    {/* <img src="https://i.pinimg.com/originals/ad/93/71/ad93716d10eec1ec00542234f643c866.gif" alt="" /> */}
                </div>
            )}
        </>
    );
};

export default Preloader;
