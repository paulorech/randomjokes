$(document).ready(function () {
  // grab jokes data by API call
  var jokesData;
  var url = "https://sv443.net/jokeapi/v2/joke/Any?type=twopart&amount=9";

  // Header Component
  function Header() {
    // Code
    return <header>
      <title>Awesome Random Jokes</title>
      <h1>Awesome Random Jokes</h1>
    </header>;
  }

  // Footer Component
  function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
    );
  }

  // Note Component (requires props to get jokes)
  function Note(props) {
    //Code Here
    return (
      props.data.map(randomJoke =>

        <div className="card" key={randomJoke.id}>
          <p> <b> {randomJoke.setup} </b>
            <br></br>
            {randomJoke.delivery} </p>
        </div>
      )
    )
  }

  function App() {
    return (
      <div>
        <Header />
        <div id="gallery" className="gallery">
          <Note data={jokesData} />
        </div>
        <Footer />
      </div>
    );
  }

  $.getJSON(url, function (data) {
    jokesData = data.jokes;

    ReactDOM.render(
      <App />,
      document.getElementById("root")
    );
  });


});

