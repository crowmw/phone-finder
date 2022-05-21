import { createContext, useContext } from "react";
import { PhoneDetails } from "../../api/details";

interface IResultContext {
  toggleShow: boolean;
  toggleIsShown: (id: string) => void;
  details: Partial<PhoneDetails>;
  inProgress: boolean;
}

const ResultContext = createContext<IResultContext>({
  toggleShow: false,
  toggleIsShown: (id: string) => {},
  details: {},
  inProgress: false,
});

export const useResult = () => useContext(ResultContext);

export const ResultProvider = ResultContext.Provider;
