import React, { ReactNode, useState } from "react";
import "./Result.css";
import { ResultProvider, useResult } from "./useResult";
import { fetchDetails, PhoneDetails } from "../../api/details";
import { Spinner } from "../Spinner/Spinner";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <ul className="Result">{children}</ul>;
};

const Item = ({ children }: { children: ReactNode }) => {
  const [toggleShow, setToggleShow] = useState(false);
  const [details, setDetails] = useState<Partial<PhoneDetails>>({});
  const [inProgress, setInProgress] = useState(false);
  const toggleIsShown = async (id: string) => {
    if (!toggleShow && !details.brand) {
      setInProgress(true);
      const details = await fetchDetails(id);
      setInProgress(false);
      setDetails(details);
    }
    setToggleShow((isShown) => !isShown);
  };

  return (
    <ResultProvider value={{ toggleShow, toggleIsShown, details, inProgress }}>
      <li className="Result__Item">{children}</li>
    </ResultProvider>
  );
};

interface ItemHeaderProps {
  id: string;
  name: string;
  imageUrl: string;
}
const ItemHeader = (props: ItemHeaderProps) => {
  const { id, name, imageUrl } = props;
  const { toggleIsShown, inProgress } = useResult();

  return (
    <div className="Result__Item__Header" onClick={() => toggleIsShown(id)}>
      <img alt={name} src={imageUrl} height={100} />
      <h3 title={name}>{name}</h3>
      {inProgress ? <Spinner /> : null}
    </div>
  );
};

const ItemBody = () => {
  const { toggleShow, details } = useResult();

  return (
    <div
      className={`Result__Item__Body${
        toggleShow ? " Result__Item__Body--opened" : ""
      }`}
    >
      <ul>
        {Object.entries(details).map(([key, val]) => (
          <li key={key}>
            <strong>{key}: </strong>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Result = { Wrapper, Item, ItemHeader, ItemBody };
