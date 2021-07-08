<script>
  import Particles from "svelte-particles";

  let particlesConfig = {
    background: {
      color: {
        value: "#0d47a1",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    fullScreen: {
      enable: true,
      zIndex: 100000000,
    },
    interactivity: {
      events: {
        onClick: {
          mode: "push",
        },
        onHover: {
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 400,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 150,
        opacity: 0.4,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: {
          default: "destroy",
          bottom: "destroy",
          left: "destroy",
          right: "destroy",
          top: "destroy",
        },
        speed: 5,
      },
      number: {
        density: {
          enable: true,
        },
        value: 0,
      },
      opacity: {
        animation: {
          speed: 3,
          minimumValue: 0.1,
        },
      },
      size: {
        value: {
          min: 0.1,
          max: 20,
        },
        animation: {
          enable: true,
          sync: true,
          destroy: "max",
          minimumValue: 0.1,
          startValue: "min",
        },
      },
    },
    emitters: {
      autoPlay: true,
      life: {},
      rate: {
        quantity: 2,
        delay: 0.1,
      },
      size: {
        mode: "percent",
        height: 0,
        width: 100,
      },
      direction: "top",
      position: {
        x: 50,
        y: 100,
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
    console.log("Success@");
    alert();
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };
</script>

<Particles
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  on:particlesInit={onParticlesInit}
/>
