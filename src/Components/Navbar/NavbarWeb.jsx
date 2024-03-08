import logo from '../../assets/logo.svg';
import Logo from '../Logo';

const NavbarWeb = () => {
    return (
        <nav className="h-16 bg-green-200 bg-opacity-95 flex gap-12  w-full">
            <img className='w-12 h-14' src={logo} alt="logo" />
            <Logo color={"logo-green"} />
            <Logo color={"logo-white"} />
        </nav>
    );
};

export default NavbarWeb;