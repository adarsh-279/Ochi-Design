import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="w-full min-h-screen bg-[#f1f1f1]">
        <Navbar />
        <LandingPage />
        <Marquee />
      </div>
    </>
  )
}

export default App
