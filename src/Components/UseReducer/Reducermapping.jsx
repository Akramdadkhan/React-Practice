import React from "react";
import { useReducer } from "react";

export const initialState = {
  allData: [
    { title: "Hulk", rating: 4, year: 2002 },
    { title: "Thor", rating: 4.8, year: 2010 },
    { title: "Iron-Man", rating: 4.9, year: 2011 },
    { title: "Captain America", rating: 5, year: 2015 },
    { title: "Loki", rating: 4.2, year: 2019 },
  ],
  added: [],
};

export const reducer = (state, action) => {
  if (action.types === "Add") {
    return { ...state, added: [...state.added, action.data] };
  }
};

const Reducermapping = () => {
  const [getState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>This is Reducer Mapping </h1>
      {getState.allData.map((item) => {
        return (
          <div>
            <h1> {item.title} </h1>
            <h1> {item.rating} </h1>
            <h1> {item.year} </h1>
            <button onClick={() => dispatch({ types: "Add", data: item })}>
              Add Movies
            </button>
          </div>
        );
      })}
      <h1>Add Items</h1>

      {/* {getState.added!==undefined && */}
      {getState.added.map((item) => {
        return (
          <div>
            <h1> {item.title} </h1>
            <h1> {item.rating} </h1>
            <h1> {item.year} </h1>
          </div>
        )
      })}
    </div>
  );
};

export default Reducermapping;
