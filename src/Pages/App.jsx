import Notepad from "../Components/Notepad"
import Navbar from "../Components/Navbar"
function App() {
  
  return (
    <div className="background flex flex-col  items-center p-4 gap-y-4">
      <Navbar />
      <Notepad />
    </div>
  )
}

export default App
