import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './componentes/Home'
import Sidebar from './componentes/Sidebar'
import Login from './componentes/Login'
import Crud from './paginas/Libros'
import Usuarios from './paginas/Usuarios'
import Navbar from './componentes/Navbar'
import "styled-components"
import 'react-toastify/dist/ReactToastify.css'


const App=() => {
  return (
    <>
            {/* <Navbar/> */}
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
      
    </>
  );
}

export default App
