import '../index.css'
import { Suspense ,useRef,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import ReactLogo from './canvas/ReactLogo'
import StartsAnimated from './StartsAnimated'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Contact from './Contact'
import Earth from './canvas/Earth'
import { Perf } from 'r3f-perf'

const MainContainer = () => {

    const [isLoaded, setIsLoaded] = useState(false)
const canvasRef = useRef()

  const handleCreated = () => {
    setIsLoaded(true)
  }


  return (
    <>
      <Canvas
      ref={canvasRef}
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={handleCreated}
           
      >
        <Perf position="top-right"/>
         <color attach='background' args={['black']} />
        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
     {/*    <OrbitControls /> */}
     {/* OrbitControls u yoruma almazsak About sayfası gözükmüyor  */}
        <StartsAnimated />
        <Suspense fallback={null}>
          <ReactLogo />
          <Earth/>
        </Suspense>
      </Canvas>
      <Loader />
      {/* Loader ı mobil device da daha iyi görebiliriz */}
      <Hero isLoaded={isLoaded} />
      <About/>
      <Projects/>
      <WorkExperience/>
      <Contact/>
    </>
  )
}

export default MainContainer
