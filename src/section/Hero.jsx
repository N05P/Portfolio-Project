import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import GreenSwirl from '../components/GreenSwirl.jsx';
import HackerRoom from '../components/HackerRoom.jsx';
import FloatingCube from '../components/FloatingCube.jsx';
import Target from '../components/Target.jsx';
import ReactIcon from '../components/ReactIcon.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">

      {/* TEXT */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
        <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">
          Hi, I am Priyanshu <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Learning with Projects
        </p>
      </div>



      {/* 3D CANVAS */}
      <div className="w-full h-full absolute inset-0">
        <Canvas shadows>
  <Suspense fallback={<CanvasLoader />}>
    {/* CAMERA */}
    <PerspectiveCamera makeDefault position={[0, 4, 8]} />

    {/* LIGHTS */}
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 12, 5]} intensity={4} castShadow />

    {/* Main desk */}
    <HeroCamera isMobile={isMobile}>
      <HackerRoom
        scale={sizes.deskScale}
        position={sizes.deskPosition}
        rotation={[0.2, -Math.PI / 1, 0]}
      />
    </HeroCamera>

    {/* Side 3D Models */}
    <GreenSwirl position={[5, 1.5, 12]}  />
    <FloatingCube position={[4,-1.5,13]}/>
  <Target  position={[-12,-4,2]}/>
    <ReactIcon position={[-13,4,-1]} />
  </Suspense>
</Canvas>

      </div>
    
      {/* BUTTON */}
      <div className="absolute bottom-7 left-0 right-0 w-full c-space z-10">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBean
            containerClass="sm:w-fit w-full sm-min-w-96"
          />
        </a>
      </div>

    </section>
  );
};

export default Hero;
