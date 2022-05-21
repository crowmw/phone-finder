import { ReactNode } from "react";
import "./Search.css";
import { Phone } from "../../api/search";
import { useSearch } from "./useSearch";

const Search = ({
  children,
}: {
  children: (phonesList: Phone[]) => ReactNode;
}) => {
  const { onChange, phonesList } = useSearch();

  return (
    <div className="Search">
      <input onChange={onChange} placeholder="Type at least two letters" />
      {children(phonesList)}
    </div>
  );
};

export { Search };
