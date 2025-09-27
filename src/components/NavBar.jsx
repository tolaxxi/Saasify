const NavBar = () => {
  return (
    <header>
      <span>
        <button>
          <AiOutlineThunderbolt />
        </button>
        <h2>saaSify</h2>
      </span>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>
          <button>Signup</button>
        </li>
      </ul>
    </header>
  );
};
export default NavBar;
