import AllCards from "./components/AllCards/AllCards";
import SearchBar from "./components/SearchBar/SearchBar";
import Paginate from "./components/Paginate/Paginate";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <main className="bg-primary-subtle p-5">
      <SearchBar />
      <AllCards />
      <Paginate />
    </main>
  );
}

export default App;
