// Components
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Domain from "./components/Domain";

function App() {
  return (
    <div>
      <Navigation />
      <Search />
      <div className="cards__section">
        <h2 className="cards__title">
          Turn your small business into a big brand.
        </h2>
        <hr />
        <div className="cards">
          <Domain />
        </div>
      </div>
    </div>
  );
}

export default App;
