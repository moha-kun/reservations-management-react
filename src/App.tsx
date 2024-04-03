import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import DisplayUsers from "./components/DisplayUsers/DisplayUsers";
import DisplayRooms from "./components/DisplayRooms/DisplayRooms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/users" element={<DisplayUsers />}></Route>
          <Route path="/rooms" element={<DisplayRooms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
