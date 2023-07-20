import { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar: React.FC<{ search: (text: string) => void }> = ({
  search,
}) => {
  const [searchWord, setSearchWord] = useState("");

  const serachHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      search(searchWord);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchWord, search]);

  return (
    <section className={classes["input-feild"]}>
      <input
        type="search"
        placeholder="Start Search"
        value={searchWord}
        onChange={serachHandler}
      />
    </section>
  );
};

export default SearchBar;
