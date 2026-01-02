import { Route, Routes } from "react-router-dom"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"

const App = () => {

  return (
    <div className="min-h-screen text-white w-full bg-gray-950">

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
