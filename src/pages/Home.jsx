import React from "react";
import SearchBar from "../components/searchBar";

export default function Home({ username }) {
  return (
    <div>
      
      <h1 className="h1">Welcome to the OrderTracker</h1>
      <SearchBar />
    </div>
  );
}
