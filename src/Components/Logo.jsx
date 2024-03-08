import React from 'react';

const Logo = ({color}) => {
    return (
        <div className={`${color} text-4xl border-2  font-extrabold font-roboto w-12 h-12  flex text-center items-center justify-center my-auto rounded-full shadow-md `}>
            S
        </div>
    );
};

export default Logo;