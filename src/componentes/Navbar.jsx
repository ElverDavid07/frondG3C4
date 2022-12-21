import {Button} from '@material-tailwind/react';
import {useCustomContext} from '../context/IndexContext'
import {RiReactjsFill,RiUser3Line} from 'react-icons/ri'
import {Animated} from 'react-animated-css'
const Navbar=() =>{

  const {Activate,setActivate} = useCustomContext();
  const Cerrar =()=>setActivate(!Activate);
  return (
    <>
     
        <div className="flex justify-between  items-center py-4 container sticky mix-blend-screen top-0 z-20 bg-inherit ">
         <Animated animationIn='slideInDown'animationInDuration={500} >
        {/*  <span className="flex items-center px-3 gap-1 text-3xl font-book  bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-900/80 text-transparent bg-clip-text tracking-tighter">
            <RiReactjsFill className="animate-spin-slow  text-indigo-500 " />
            Logo
          </span> */}
         </Animated>
          <Button  variant='text' color='cyan' className="mx-3 flex gap-2 items-center " onClick={Cerrar}>
            <RiUser3Line className='h-4 w-4'/>
            inciar seccion
          </Button>
        </div>
      
    </>
  );
}

export default Navbar
