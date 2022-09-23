import Image from "next/image";
import Nav from "./Nav";
import logo from "../public/logo.jpg";
import BurgerMenuButton from "./BurgerMenuButton";

const Header = () => {
  return (
    <header className="header">
      <div className="relative w-36 lg:min-w-[10rem] xl:min-w-[14rem] h-full flex items-center justify-center bg-white">
        <Image alt="logo" className="object-contain" layout="fill" src={logo} />
      </div>
      <Nav />
      <BurgerMenuButton />
    </header>
  );
};

export default Header;
