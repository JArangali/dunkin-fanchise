function Navbar() {
  return (
    <div id="wholenav">
      <ul id="nav_ul">
        <li id="navlogo_li">
          <img src="./logo.png" alt="Dunkin Logo" id="navlogo" />
        </li>
        <div id="navcontainer">
          <li>
            <a href="#home">CAREERS</a>
          </li>
          <li>
            <a href="#contact" class="active">
              FRANCHISE
            </a>
          </li>
          <li>
            <a href="#news">ABOUT US</a>
          </li>
          <li>
            <a href="#contact">MENU</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
