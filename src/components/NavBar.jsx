import { useState } from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function navToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="transparent-background sticky top-0 flex min-w-full items-center justify-between px-5 py-3 shadow-md md:px-15">
      <span className="text-primary-text flex items-center">
        <button className="bg-primary mr-2 rounded-xl px-1.5 py-1.5 text-lg font-semibold text-white hover:animate-spin">
          <AiOutlineThunderbolt />
        </button>
        <h2 className="text-lg font-semibold">saaSify</h2>
      </span>

      {/* mobile menu toggle */}
      <button className="md:hidden" onClick={navToggle}>
        {isOpen ? <IoMdClose size={25} /> : <RxHamburgerMenu size={25} />}
      </button>

      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } transparent-background absolute top-[100%] right-0 left-0 h-50 flex-col justify-around p-5 md:relative md:top-auto md:flex md:h-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
      >
        <ul className="mb-2 flex h-[80%] flex-col justify-between md:mb-0 md:flex-row">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>

        <button className="bg-primary rounded-xl px-5 py-2 text-nowrap text-white">
          Sign Up
        </button>
      </nav>
    </header>
  );
};
export default NavBar;
