import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { HashRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailCardDetail from "./components/cocktailCardDetail";
import Home from "./components/home";
import About from "./components/about";
import { DataContextProvider } from "./provider/DataContext";
import NavigationBar from "./components/navigationBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <NavigationBar />
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails" element={<App />} />
          <Route path="/:id" element={<CocktailCardDetail />} />
          <Route path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
