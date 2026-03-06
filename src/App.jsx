import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Districts from "./pages/Districts";
import District from "./pages/District";
import Place from "./pages/Place";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="districts" element={<Districts />} />
        <Route path="districts/:districtId" element={<District />} />
        <Route
          path="districts/:districtId/places/:placeId"
          element={<Place />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;