import "./App.css";
import SpaceTech from "./components/spaceTech";
import SpaceCrew from "./components/spaceCrew";
import SpaceDestin from "./components/spaceDestin";
import SpaceMain from "./components/spaceMain";
import {Route , Routes} from "react-router-dom"
import SpaceProjectNav from "./components/spaceProjectNav";


export default function App() {
  return (
    <div className="speacialfont">
    <SpaceProjectNav></SpaceProjectNav>
     <Routes>
     <Route path="/" element={<SpaceMain/>}></Route>
     <Route path="/Destination" element={<SpaceDestin/>}></Route>
     <Route path="/Crew" element={<SpaceCrew/>}></Route>
     <Route path="/Technology" element={<SpaceTech/>}></Route>
     </Routes>
    </div>
  );
}
