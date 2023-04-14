import useAPIData from "../../services/useAPIData";
import { Form as BSForm } from "react-bootstrap";
import { useState } from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const { getData } = useAPIData();

  // here we will pass search word to getData from useAPIData hook
  return (
    <section>
      <BSForm.Control
        type="search"
        placeholder="Start Search"
        size="lg"
        className="p-3 fs-3"
        defaultValue={searchWord}
      />
    </section>
  );
};

export default SearchBar;
