import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = ({ queryKey }: { queryKey: (string | number)[] }) => {
  const pageNumber: number = queryKey[1] as number;
  const searchQuery: string = queryKey[2] as string;
  const endPoint =
    searchQuery.length > 0
      ? `/search?q=${searchQuery}`
      : `?limit=10&skip=${pageNumber}`;

  return axios.get(`https://dummyjson.com/products${endPoint}`);
};

const useProductsData = (pageNumber: number, searchTerm: string) => {
  return useQuery(["products", pageNumber, searchTerm], fetchProducts, {
    keepPreviousData: searchTerm.length === 0,
  });
};

export default useProductsData;
