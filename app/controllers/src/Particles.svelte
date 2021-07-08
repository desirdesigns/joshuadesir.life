<script>
    import Particles from "svelte-particles";
  
    let particlesUrl = "http://foo.bar/particles.json";
  
    let particlesConfig = {
      particles: {
        color: {
          value: "#000",
        },
        links: {
          enable: true,
          color: "#000",
        },
        move: {
          enable: true,
        },
      },
    };
  
    let onParticlesLoaded = (event) => {
      const particlesContainer = event.detail.particles;
  
      // you can use particlesContainer to call all the Container class
      // (from the core library) methods like play, pause, refresh, start, stop
    };
  
    let onParticlesInit = (main) => {
      // you can use main to customize the tsParticles instance adding presets or custom shapes
    };
  </script>
  
  <Particles
    id="tsparticles"
    options="{particlesUrl}"
    on:particlesLoaded="{onParticlesLoaded}"
    on:particlesInit="{onParticlesInit}"
  />
  
