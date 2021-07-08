
import Particles from "./Particles.svelte";

let footer = document.querySelector("#footer");

export const particles = new Particles({
	target: footer
});


export default particles;