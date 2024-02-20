import Cards from "./Cards.js";
import Header from "./Header";

const cardData = [
  {
    cardImg: "./person.png",
    description:
      "Your Professional and/or enterpreneural details, either as an individual or a corporate entity",
  },

  {
    cardImg: "pin.png",
    description: "Preferred province for franchise.",
  },

  {
    cardImg: "planet.png",
    description:
      "Why you chose Dunkin' and why do you believe your province is already ready to have Dunkin' as their next international food brand?",
  },

  {
    cardImg: "store.png",
    description:
      "If you can, also mention and discuss the top cities or municipalities in your province which you believe must we penetrate first.",
  },
];

function Franchise() {
  return (
    <div id="header_container">
      <Header />
      <div id="bg_bottom">
        <center>
          <div id="p_bottom_container">
            <p id="p_bottom_title">HOW TO APPLY?</p>
            <p id="p_bottom_body">
              Simply write a Letter of Intent addressed to the Site Acquisition
              <br />
              and Development Head stating the following information and email
              <br />
              to franchiseinquiry@goldendonuts.ph
            </p>
          </div>
          <div id="card_container">
            {cardData.map((cards) => (
              <Cards cardObj={cards} />
            ))}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Franchise;
