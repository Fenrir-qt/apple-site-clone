import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const menuItems = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "Vision", href: "#" },
  { name: "Airpods", href: "#" },
];

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent the default '#' jump
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
      <header className="p-1 sticky top-0 z-50 bg-white/75 backdrop-blur-2xl">
        <nav className="flex justify-start ml-3 md:ml-0 md:justify-center items-center gap-8 p-2 md:p-1 relative">
          <a href="#" aria-label="Apple Home" className="text-lg ml-3 md:ml-0" onClick={handleScrollTop}>
            <FaApple />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-500 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
            <CiSearch className="text-lg cursor-pointer hover:text-blue-500" />
            <IoBagOutline className="text-md cursor-pointer hover:text-blue-500" />
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-lg absolute right-4"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        </nav>
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col items-center py-4 z-50">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 px-4 w-full text-center hover:bg-blue-50 hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-6 justify-center mt-2">
              <CiSearch className="text-xl cursor-pointer hover:text-blue-500" />
              <IoBagOutline className="text-lg cursor-pointer hover:text-blue-500" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export { Header };
