
import Particles from "./Particles.svelte";

let footer = document.querySelector("#footer");

 const particles = new Particles({
	target: footer
});


export default particles;