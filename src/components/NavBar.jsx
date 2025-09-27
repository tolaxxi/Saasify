import { useState } from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function navToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="flex justify-between min-w-full items-center py-3 px-5 md:px-15 shadow-sm sticky top-0">
      <span className="flex items-center text-primary-text">
        <button className="bg-primary mr-2 px-1.5 text-white hover:animate-spin font-semibold py-1.5 text-lg rounded-xl">
          <AiOutlineThunderbolt />
        </button>
        <h2 className="font-semibold text-lg">saaSify</h2>
      </span>

      {/* mobile menu toggle */}
      <button className="sm:hidden" onClick={navToggle}>
        <RxHamburgerMenu size={25} />
      </button>

      <nav className={`${isOpen ? 'navOpen transparent-background' : 'hidden'} items-center sm:flex`}>
        <ul className="flex  ">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>

        <button className="bg-primary px-5 py-2 rounded-xl text-white text-nowrap">Sign Up</button>
      </nav>
    </header>
  );
};
export default NavBar;
