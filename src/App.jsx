import Index from "./pages/Institucional/Index"
import Login from "./pages/Institucional/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Router>
			<Routes>
				<Route path="/" element={<Index/>} />		
        <Route path="/login" element={<Login/>} />		
			</Routes>
		</Router>
      
    </>
  )
}

export default App
