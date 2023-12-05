import { NavBar } from "../src/components/NavBar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Plans } from "./pages/Plans"
import { PlanDetail } from "./pages/PlanDetail"
import { Crud } from "./components/Crud"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/react-crud-app/" element={<Home />} />
        <Route path="/react-crud-app/crud" element={<Crud />} />
        <Route path="/react-crud-app/plans" element={<Plans />} />
        <Route path="/react-crud-app/plans/:sku" element={<PlanDetail />} />
      </Routes>
    </>
  )
}

export default App
