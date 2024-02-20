function Cards(props) {
  return (
    <div id="congrats_cards" className="cards">
      <div id="congrats_cards_div">
        <img src={props.cardObj.cardImg} alt="Icon" id="congrats_card_img" />
      </div>
      <center>
        <div>
          <p id="congrats_p_card">{props.cardObj.description}</p>
        </div>
      </center>
    </div>
  );
}

export default Cards;
