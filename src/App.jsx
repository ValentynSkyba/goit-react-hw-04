import { useEffect, useState } from "react";
import "./App.css";
import { toast } from "react-toastify";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <div>
      <h1>Photo Search</h1>
      <SearchBar />
    </div>
  );
};

export default App;
