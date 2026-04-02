import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import SplitText from './SplitText';

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    // Tense, rapid floating to simulate adrenaline
    const images = gsap.utils.toArray('.thrill-polaroid');
    
    images.forEach((img, i) => {
      gsap.to(img, {
        y: "random(-12, 12)",
        x: "random(-6, 6)",
        rotation: "random(-4, 4)",
        duration: "random(2.5, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });
  }, { scope: container });

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="thrill-hero-wrapper" ref={container}>
      <div className="thrill-container">
        
      
        <div className="thrill-polaroid p-top-left">
          <img src="https://images.pexels.com/photos/6669179/pexels-photo-6669179.jpeg" alt="Archery Focus" />
          
        </div>

        
        <div className="thrill-polaroid p-bottom-left">
          <img src="https://images.pexels.com/photos/14072121/pexels-photo-14072121.jpeg" alt="Axe Throwing" />
           
        </div>

        {/* Center Ornament (Dagger/Compass) */}
        

        <SplitText
          tag="h1"
          text="HOUSE OF THRILL"
          className="thrill-main-title"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* TOP RIGHT: VR ADVENTURE */}
        <div className="thrill-polaroid p-top-right">
          <img src="https://images.pexels.com/photos/4389988/pexels-photo-4389988.jpeg" alt="VR Gaming" />
         
        </div>

        {/* BOTTOM RIGHT: ESCAPE ROOM */}
        <div className="thrill-polaroid p-bottom-right">
          <img src= "https://images.pexels.com/photos/8391462/pexels-photo-8391462.jpeg" alt="Escape Room Puzzle" />
           
        </div>

      </div>

      <footer className="thrill-credits">
        Curated Thrills: Precision Archery, Axe Throwing, Immersive VR, & Tactical Escape Rooms
      </footer>
    </section>
  );
};

export default Hero;

 