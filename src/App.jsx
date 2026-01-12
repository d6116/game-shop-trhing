import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './componments/Header';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';
import RandomGame from './pages/RandomGame';

function App() {

  
  
  

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/game/:gameId' element={<GamePage />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/randomGame' element={<RandomGame/>}/>
      </Routes>
      
    </>
  )
}

export default App
