import './index.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
 

  return (
    <>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-primary">Welcome to My Portfolio</h1>
      </section>
    </>
  )
  
}
export default App
