import "./app.css";
import "./cards.css";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";

function App() {
  return (
    // This code looks like HTML code but it is not HTML
    // It is JSX code
    <>
      {/* Navbar function is now a component */}
      <Navbar />

      <div id="main">
        <h1>Learning react.js</h1>
        <p>List of Runtime environments :-</p>
        <ul>
          <li>Node.js</li>
          <li>Deno.js</li>
          <li>Bun.js</li>
        </ul>
      </div>

      <div id="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
