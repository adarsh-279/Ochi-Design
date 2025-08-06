import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Stratergy from "./components/Stratergy"

function App() {

  return (
    <>
      <div className="w-full min-h-screen bg-[#f1f1f1] overflow-auto overflow-x-hidden">
        <Navbar />
        <LandingPage />
        <Marquee />
        <Stratergy />
      </div>
    </>
  )
}

export default App
