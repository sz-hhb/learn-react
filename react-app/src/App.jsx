import { memo } from "react"
import Home from "./views/home"
// import Detail from "./views/detail"

const App = memo(() => {
  return (
    <div className="App">
      {/* <Detail /> */}
      <Home />
    </div>
  )
})

export default App
