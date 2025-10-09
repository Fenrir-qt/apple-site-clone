
import { Header } from "./components/Header";
import GridCards from "./pages/GridCards";
import { Footer } from "./components/Footer";
import Mac from "./pages/Mac";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Header />
    <main>
      <Home />
      <Mac />
      <GridCards />
      <Movies />
    </main>
    <Footer />
    </>
  )
}

export default App;