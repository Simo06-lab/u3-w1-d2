import "bootstrap/dist/css/bootstrap.min.css"

import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        <AllTheBooks />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
