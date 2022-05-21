import React from "react";
import "./App.css";
import { Search } from "../Search/Search";
import { Result } from "../Result/Result";

const App = () => (
  <div className="App">
    <h1>Phone Finder</h1>
    <Search>
      {(phonesList) =>
        phonesList.length > 0 ? (
          <Result.Wrapper>
            {phonesList.map((p) => (
              <Result.Item key={p.id}>
                <Result.ItemHeader
                  id={p.id}
                  name={p.name}
                  imageUrl={p.imageUrl}
                />
                <Result.ItemBody />
              </Result.Item>
            ))}
          </Result.Wrapper>
        ) : (
          <h2 className="NoResults">No results</h2>
        )
      }
    </Search>
  </div>
);

export default App;
