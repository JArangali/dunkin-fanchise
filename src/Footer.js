function Footer() {
  return (
    <div id="footer_container">
      <div id="top_footer_container">
        <div id="Logo_div">
          <img src="round_dunkin.svg" alt="Dunkin Donuts PH" id="Logo" />
        </div>
        <div id="About">
          <p id="About_title">About</p>
          <p id="About_text">
            Welcome to the Official website of Dunkin' PH. #PasalubongNgBayan
          </p>
          <div>
            <img src="./pink_logo/facebook.svg" alt="Facebook" id="pink_Logo" />
            <img src="./pink_logo/twitter.svg" alt="Twitter" id="pink_Logo" />
            <img
              src="./pink_logo/instagram.svg"
              alt="Instagram"
              id="pink_Logo"
            />
            <img src="./pink_logo/youtube.svg" alt="Youtube" id="pink_Logo" />
            <img src="./pink_logo/tiktok.svg" alt="Tiktok" id="pink_Logo" />
          </div>
        </div>
        <div id="HQ">
          <p id="HQ_title">Headquarters</p>
          <p id="HQ_text">
            GDI Bldg. Reliance cor. Sheridan Sts. Highway Hills, Mandaluyong
            City
          </p>
        </div>
        <div id="Quicklink">
          <p id="QL_title">Quicklinks</p>
          <div id="QL_container">
            <div class="vertical-menu">
              <a href="#IPSUM">Menu</a>
              <a href="#IPSUM">About Us</a>
              <a href="#IPSUM" class="active">
                Franchise
              </a>
            </div>
            <div class="vertical-menu">
              <a href="#IPSUM">Career</a>
              <a href="#IPSUM">Contact Us</a>
            </div>
          </div>
        </div>
        <div class="vertical_container">
          <div class="vertical_div">
            <a href="#IPSUM" class="vertical_p">
              BACK TO TOP
            </a>
            <img src="arrow.svg" alt="Arrow" class="vertical_arrow" />
          </div>
        </div>
      </div>
      <center>
        <div id="bottom_footer">
          <p id="left_text">© 2023. All Right Reserved</p>
          <div id="right_text">
            <p id="right_text_p">Sitemap</p>
            <p id="right_text_p">Privacy Policy</p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Footer;
