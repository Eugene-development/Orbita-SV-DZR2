import { gsap } from 'gsap';

const gsapOpacity = (boxParam) => {
	const tl = gsap.timeline();
	tl.from('#' + boxParam.box, {
		opacity: 0
	});
};

const gaspText = (param1, param2) => {
	const tl = gsap.timeline();
	const duration = 3;
	tl.to('#' + param1, { duration, x: 10, delay: 1 }).to('#' + param2, {
		duration,
		x: 10,
		repeat: 3,
		yoyo: true
	});
};

const toBig = (param1) => {
	const tl = gsap.timeline();
	tl.to('#' + param1, { scale: 1.02, delay: 0.3 }).to('#' + param1, { scale: 0.99 });
};

export const useGasp = {
	gsapOpacity,
	gaspText,
	toBig
};
