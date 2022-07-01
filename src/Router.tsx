import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/event" element={<Main />} />
      <Route path="/event/lesson/:slug" element={<Main />} />
    </Routes>
  )
}