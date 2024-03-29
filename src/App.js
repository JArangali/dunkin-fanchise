import Orange from "./Orange";
import Navbar from "./Navbar";
// import Header from "./Header";
// import Body from "./Body";
import Footer from "./Footer";
import "./App.css";
import Franchise from "./Franchise";
import Congrats from "./Congrats";

function App() {
  const isFranchised = false;

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <Orange />
      <Navbar />
      {isFranchised ? <Congrats /> : <Franchise />}
      <Footer />
    </div>
  );
}

export default App;
