import {NavLink} from 'react-router-dom'
import {AiOutlineHome,AiOutlineTable,AiOutlineUsergroupAdd,AiOutlineShoppingCart,AiOutlineLeft} from 'react-icons/ai'
import {RiReactjsFill} from 'react-icons/ri'
import {useState} from 'react'



const Sidebar =() =>{
  const [activate, setActivate] = useState(true)
  return (
    <>
      <ul className={`${activate?"lg:w-56" :"lg:w-16 md:w-16"}  duration-300 z-50 bg-gradient-to-t from-indigo-700  to-cyan-400 relative text-blue-gray-900  flex h-screen border-r   flex-col  left-0 gap-y-8  `}>
      
        {/* //!logo */}
      <span className={`flex items-center lg:px-3 lg:justify-start justify-center gap-1 lg:text-4xl md:text-4lx text-6xl mt-2 font-book tracking-tighter `}>
          <RiReactjsFill className={`animate-spin-slow  text-indigo-500 ${!activate && "mx-auto"}`} />
           <h2 className={`${!activate ? "hidden" : "lg:flex"} hidden bg-gradient-to-bl from-blue-500 to-purple-700 bg-clip-text text-transparent`}>React</h2>
          </span>
          {/* abrir y cerrar sidebar */}
        <div className="absolute -right-3 top-10 lg:flex hidden  ">
        <AiOutlineLeft className={` bg-indigo-500 rounded-full p-1  text-3xl cursor-pointer  ${!activate && "rotate-180"}`} onClick={()=>setActivate(!activate)}/>
        </div>
        
        <li>
          {/* //!--------------- */}
         
         <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white bg-ligthwhite sidebar" : "sidebar")}
          >
            <AiOutlineHome className={`${!activate && "mx-auto text-2xl"}`} />
            <h2 className={`${!activate ? "hidden" :"lg:flex"} hidden`}>home</h2>
          </NavLink>
         
        </li>
        <li>
          <NavLink
            to="/crud"
            className={({ isActive }) => (isActive ? "text-white bg-ligthwhite sidebar" : "sidebar")}
          >
            <AiOutlineTable  className={`${!activate && "mx-auto text-2xl"}`} />
            <h2 className={`${!activate ? "hidden" :"lg:flex"} hidden`}>tabla</h2>
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/usuarios" 
          className={({ isActive }) => (isActive ? "text-white bg-ligthwhite sidebar" : "sidebar")}>
            <AiOutlineUsergroupAdd  className={`${!activate && "mx-auto text-2xl"}`} />
            <h2 className={`${!activate ? "hidden" :"lg:flex"} hidden`}>usuarios</h2>
          </NavLink>
        </li>
        <li>
          <NavLink  to="/login" className={({ isActive }) => (isActive ? "text-white bg-ligthwhite sidebar" : "sidebar")}>
            <AiOutlineShoppingCart  className={`${!activate && "mx-auto text-2xl"}`} />
            <h2 className={`${!activate ? "hidden" :"lg:flex"} hidden`}>nada</h2>
          </NavLink>
        </li>
      </ul>
      
    </>
  );
}


export default Sidebar
