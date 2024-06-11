import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard.js"
import NewsItem from "./Components/NewsItem"

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <NewsItem/>
    </>

  )
}

export default App
