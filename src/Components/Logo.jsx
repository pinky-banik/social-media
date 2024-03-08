import React from 'react';

const Logo = ({color}) => {
    return (
        <div className={`${color} text-5xl border-2  font-extrabold font-roboto w-12 h-12  flex text-center items-center justify-center my-auto ml-5 mr-3 rounded-full shadow-md `}>
            S
        </div>
    );
};

export default Logo;