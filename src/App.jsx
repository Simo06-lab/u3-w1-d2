import "bootstrap/dist/css/bootstrap.min.css"

import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import BookList from "./components/BookList"
import books from "./data/horror.json"

import { useState } from "react"

function App() {
  const [showBooks, setShowBooks] = useState(false)

  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav
        onShowBooks={() => setShowBooks(true)}
        onAllBooks={() => setShowBooks(false)}
      />

      <main className="flex-grow-1">
        <Welcome />

        {showBooks ? <BookList books={books} /> : <AllTheBooks />}
      </main>

      <MyFooter />
    </div>
  )
}

export default App
