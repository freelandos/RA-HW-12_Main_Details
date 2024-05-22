import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ServicesList } from "./pages/ServicesList";
import { ServiceDetails } from "./pages/ServiceDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<ServicesList />} />
        <Route path="/:id/details" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
