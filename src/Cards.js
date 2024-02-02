function Cards(props) {
  return (
    <div id="cards" className="cards">
      <div>
        <img src={props.cardObj.cardImg} alt="Icon" id="card_img" />
      </div>
      <center>
        <div>
          <p id="p_card">{props.cardObj.description}</p>
        </div>
      </center>
    </div>
  );
}

export default Cards;
