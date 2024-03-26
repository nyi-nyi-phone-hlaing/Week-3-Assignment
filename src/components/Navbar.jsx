const Navbar = ({ showBackdropHandaler }) => {
  return (
    <nav>
      <h1>SHOP.io</h1>
      <button onClick={showBackdropHandaler}>
        Cart <span>0</span>
      </button>
    </nav>
  );
};

export default Navbar;
