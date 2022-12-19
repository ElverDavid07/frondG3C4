import {Button,Avatar} from '@material-tailwind/react';
import {RiReactjsFill} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
const Navbar2=() =>{


  return (
    <>
     
        <div className="flex justify-between items-center py-5   sticky  transition-colors z-40 bg-blue-gray-700">
          <span className="flex items-center px-3 gap-4 text-3xl font-logo font-extrabold bg-gradient-to-r from-cyan-200 to-blue-700 text-transparent bg-clip-text ">
            <RiReactjsFill className="animate-spin-slow  text-cyan-300" />
            Libros XD
          </span>
          <div variant="outlined" className="mx-3 flex gap-3 items-center text-gray-900">
            Usuario
          <Avatar src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"variant="circular" className='h-8 w-8 object-cover' />
          <IoIosArrowDown/>
          </div>
        </div>
      
    </>
  );
}

export default Navbar2
