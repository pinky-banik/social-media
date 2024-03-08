import React from 'react';
import NavbarWeb from './NavbarWeb';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
    return (
        <>
            <div className='md:block hidden'>
            <NavbarWeb/>
            </div>
            <div className='md:hidden block'>
            <NavbarMobile/>
            </div>
            
        </>
    );
};

export default Navbar;