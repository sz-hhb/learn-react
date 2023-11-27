import { memo } from "react"
import Home from "./views/home"

const App = memo(() => {
  return (
    <div className="App">
      <Home />
    </div>
  )
})

export default App
