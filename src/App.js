import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    fetch("http://localhost:8000/workshops")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Main data={data} />
        <Footer />
      </Router>
    </div>
  )
}

export default App
