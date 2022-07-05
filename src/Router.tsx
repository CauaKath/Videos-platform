import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/video/:slug" element={<Main />} />
    </Routes>
  )
}