import { useEffect, useState } from "react";
import { Form as BSForm } from "react-bootstrap";

const SearchBar = ({ search }) => {
  const [searchWord, setSearchWord] = useState("");

  const serachHandler = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      search(searchWord);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchWord]);

  return (
    <section>
      <BSForm.Control
        type="search"
        placeholder="Start Search"
        size="lg"
        className="p-3 fs-3"
        value={searchWord}
        onChange={serachHandler}
      />
    </section>
  );
};

export default SearchBar;
