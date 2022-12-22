import {Animated} from 'react-animated-css'
import Navbar from './Navbar'
import Login from './Login'


const Home=() =>{
  
  return (
<>
<div className="flex-1 mt-0">
  {/* <Login/> */}
<div className='relative h-[570px] bg-[url("https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] before'>
  {/* <Navbar/> */}
<Animated  animationIn='slideInLeft'  animationInDuration={1500}>
    <h2 className="text-center text-4xl pt-5 font-book text-white">Home page</h2>
</Animated>
<Animated animationIn='bounce'>
 <img src="./dasboard.svg" className="absolute h-[300px] w-[300px] right-20 -top-5 "/>
</Animated>



<img src="./wave2.svg" className='absolute bottom-0  w-full'/>

</div> 


</div>




</>
  )
}

export default Home
