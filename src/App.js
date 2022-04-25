import PageContainer from "./components/PageContainer";
import Houses from "./pages/Houses";
import Navbar from "./components/Navbar";
import HouseInfo from "./pages/houses/components/HouseInfo";
import InfoPacks from "./utils/InfoPacks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bgColor="black" textColor="white" />
        <Routes>
          <Route path="/houses" element={<Houses />} />
          <Route
            path="/houses/Gryffindor"
            element={<HouseInfo houseInfoPack={InfoPacks[0][0]} />}
          />
          <Route
            path="/houses/Hufflepuff"
            element={<HouseInfo houseInfoPack={InfoPacks[0][1]} />}
          />
          <Route
            path="/houses/Slytherin"
            element={<HouseInfo houseInfoPack={InfoPacks[0][2]} />}
          />
          <Route
            path="/houses/Ravenclaw"
            element={<HouseInfo houseInfoPack={InfoPacks[0][3]} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
