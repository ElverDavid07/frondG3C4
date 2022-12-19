import {Animated} from 'react-animated-css'


const Home=() =>{
  
  return (
<>
<div className="flex-1 bg-blue-500 h-[500px] relative">
  <img src="./wave.svg" className='absolute bottom-0 w-full '/>

<Animated animationIn='bounce'>
 <img src="./dasboard.svg" className="absolute h-[400px] w-[400px] right-20 top-8"/>
 </Animated>
    <Animated  animationIn='slideInLeft'  animationInDuration={1500}>
    <div className="text-center text-4xl mt-5 font-book bg-gradient-to-t from-indigo-700 to-blue-gray-900 bg-clip-text text-transparent ">Home page</div>
    </Animated>
</div>






</>
  )
}

export default Home
