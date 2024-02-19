import "./App.css";
import SpaceTech from "./components/spaceTech";
import SpaceCrew from "./components/spaceCrew";
import SpaceDestin from "./components/spaceDestin";
import SpaceMain from "./components/spaceMain";
import { Route, Routes } from "react-router-dom";
import SpaceProjectNav from "./components/spaceProjectNav";

export default function App() {
  return (
    <div className="speacialfont">
      <SpaceProjectNav></SpaceProjectNav>
      <Routes>
        <Route
          path="/"
          element={<SpaceMain />}
        ></Route>
        <Route
          path="https://muhamadt4.github.io/Space-tourism-multi-page-website/Destination"
          element={<SpaceDestin />}
        ></Route>
        <Route
          path="https://muhamadt4.github.io/Space-tourism-multi-page-website/Crew"
          element={<SpaceCrew />}
        ></Route>
        <Route
          path="https://muhamadt4.github.io/Space-tourism-multi-page-website/Technology"
          element={<SpaceTech />}
        ></Route>
      </Routes>
    </div>
  );
}
