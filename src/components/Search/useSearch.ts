import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import debounce from "lodash.debounce";
import { fetchSearchResult, SearchResult } from "../../api/search";

interface StateProps {
  query: string;
  results: SearchResult;
}

const initialState: StateProps = {
  query: "",
  results: {},
};

export const useSearch = () => {
  const [state, setState] = useState<StateProps>(initialState);

  const onQueryChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback(async (e) => {
      const query = e.target.value;
      setState((state) => ({ ...state, query }));
    }, []);

  const debouncedFetch = useCallback(
    debounce(
      async (query: string) => {
        const results = await fetchSearchResult(query);
        setState((state) => ({ ...state, results }));
      },
      500,
      { leading: true, trailing: true, maxWait: 1000 }
    ),
    []
  );

  useEffect(() => {
    if (state.query.length >= 2) {
      debouncedFetch(state.query);
    } else {
      setState((state) => ({ ...state, results: initialState.results }));
    }
  }, [debouncedFetch, state.query]);

  const phonesList = useMemo(
    () =>
      Object.values(state.results).sort((a, b) =>
        a.name.localeCompare(b.name)
      ) ?? null,
    [state.results]
  );

  return {
    onChange: onQueryChangeHandler,
    phonesList,
  };
};
