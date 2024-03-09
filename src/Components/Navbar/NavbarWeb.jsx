import logo from "../../assets/logo.svg";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import MiddleIcons from "./MiddleIcons";
import SideIcons from "./SideIcons";



const NavbarWeb = () => {
  return (
    <nav className="h-16 
      bg-green-200 justify-between bg-opacity-95  flex w-full ">
          <div className="flex">
        <Logo color={"logo-white"} />
      <SearchBar />
      </div>
      {/* middle icons */}
      <div className="flex  justify-center items-center">
        <MiddleIcons />
        
      </div>
      

      {/* Side icons */}
      <div className="flex justify-center items-center">
        <SideIcons/>
      </div>
          
    </nav>
  );
};

export default NavbarWeb;
