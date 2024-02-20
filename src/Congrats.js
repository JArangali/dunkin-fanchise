import Cards from "./CongratsCards.js";
import Header from "./CongratsHeader.js";

const cardData = [
  {
    cardImg: "./donut1.png",
    description:
      "A hole-y moly moment! Congrats on franchising with Dunkin' Donuts – you're about to have a 'brew-tiful' journey ahead!",
    size: "width: 150px;",
  },

  {
    cardImg: "./coffee1.png",
    description:
      "Franchise Success Rates: Investigate the success rates and longevity of Dunkin' Donuts franchises. This information can provide insights into the sustainability and profitability of franchise operations.",
    size: "width: 150px;",
  },

  {
    cardImg: "./donut2.png",
    description:
      "Brand Recognition: Dunkin' Donuts is a globally recognized brand, and franchising allows entrepreneurs to leverage this established reputation, attracting customers who are already familiar with and loyal to the brand.",
    size: "width: 150px;",
  },

  {
    cardImg: "./coffee2.png",
    description:
      "Dunkin' Donuts, you've officially 'dunked' into the world of franchising – congratulations on making the sweetest move!",
    size: "width: 150px;",
  },
];

function Congrats() {
  return (
    <div id="congrats_header_container">
      <Header />
      <div id="congrats_bg_bottom">
        <center>
          <div id="congrats_p_bottom_container">
            <p id="congrats_p_bottom_title">
              CONGRATULATIONS <br /> ON YOUR FRANCHISE!
            </p>
            <p id="congrats_p_bottom_body">
              Thank you for choosing to embark on this sweet journey with your
              DUNKIN FAMILY! <br /> We're thrilled to have you as part of our
              family and look forward <br />
              to spreading the joy of delicious donuts together. <br />
              Here's to a successful and doughnut-filled partnership!
            </p>
          </div>
          <div id="congrats_card_container">
            {cardData.map((cards) => (
              <Cards cardObj={cards} />
            ))}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Congrats;
