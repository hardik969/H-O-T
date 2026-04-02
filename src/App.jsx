import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Narrative from "./components/Narrative/Narrative";
import Games from "./components/Games/Games";
import Who from "./components/Who/Who";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import "./App.css"; 

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const onLenisScroll = () => ScrollTrigger.update();
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", onLenisScroll);
    gsap.ticker.add(onTick);

    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.normalizeScroll(true);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, []);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".stack-panel");

    panels.forEach((panel, i) => {
      const isLast = i === panels.length - 1;
      const panelContent = panel.querySelector(".panel-content") || panel;
      const headlineTargets = panel.querySelectorAll(
        ".thrill-main-title, .narrative-title, .ss-heading, #reviews h2"
      );
      const copyTargets = panel.querySelectorAll(
        ".section-label, .narrative-lead, .thrill-credits, .review-text"
      );
      const mediaTargets = panel.querySelectorAll(
        ".thrill-polaroid"
      );
      const whoCardTargets = panel.querySelectorAll(".who-card");

      gsap.set(panelContent, { willChange: "transform" });
      gsap.set([...headlineTargets, ...copyTargets, ...mediaTargets, ...whoCardTargets], {
        force3D: true,
        willChange: "transform, opacity",
      });

      // ENTRANCE: 200px -> Full Width
      // We start at 'top bottom' so it's already expanding when it enters the view
      if (i !== 0) {
        gsap.fromTo(panel, 
          {
            width: "200px",
            borderTopLeftRadius: "140px",
            borderTopRightRadius: "140px",
            y: 30, 
          },
          {
            width: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 95%", // Animation starts just before it's visible
              end: "top top",
              scrub: true, // true (no number) provides 1:1 sync with the wheel
              immediateRender: false,
            }
          }
        );
      }

      // EXIT: keep panels crisp instead of blurring them away
      if (!isLast) {
        gsap.to(panel, {
          scale: 0.97,
          opacity: 0.92,
          scrollTrigger: {
            trigger: panels[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }

      gsap.fromTo(
        panelContent,
        {
          y: 18,
        },
        {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        }
      );

      if (headlineTargets.length > 0) {
        gsap.fromTo(
          headlineTargets,
          {
            y: 64,
            opacity: 0.2,
          },
          {
            y: -52,
            opacity: 1,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (copyTargets.length > 0) {
        gsap.fromTo(
          copyTargets,
          {
            y: 34,
            opacity: 0.3,
          },
          {
            y: -30,
            opacity: 1,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.25,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (mediaTargets.length > 0) {
        gsap.fromTo(
          mediaTargets,
          {
            y: 96,
            scale: 0.98,
            rotation: -0.6,
            opacity: 0.82,
          },
          {
            y: -28,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.45,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (whoCardTargets.length > 0) {
        gsap.fromTo(
          whoCardTargets,
          {
            y: 72,
            scale: 0.985,
            opacity: 0.75,
          },
          {
            y: -20,
            scale: 1,
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });
  }, { scope: containerRef });
  
  return (
    <div className="app-shell" ref={containerRef}>
      <Header />
      
      <main className="thrill-page-container">
        <section className="stack-stage hero-stage" style={{ zIndex: 1 }}>
          <div className="stack-panel section-dark">
            <Hero />
          </div>
        </section>

        <section className="stack-stage stack-stage--linger" style={{ zIndex: 2 }}>
          <div className="stack-panel section-bone">
            <div className="panel-content"><Narrative /></div>
          </div>
        </section>

        <section className="stack-stage stack-stage--linger" style={{ zIndex: 3 }}>
          <div className="stack-panel section-dark">
            <div className="panel-content"><Games /></div>
          </div>
        </section>

        <section className="stack-stage stack-stage--linger" style={{ zIndex: 4 }}>
          <div className="stack-panel section-dark">
            <div className="panel-content"><Who /></div>
          </div>
        </section>

        <section className="stack-stage stack-stage--final" style={{ zIndex: 5 }}>
          <div className="stack-panel section-dark">
            <div className="panel-content"><Reviews /></div>
          </div>
        </section>
        <footer className="footer-stage" style={{ zIndex: 7 }}>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
