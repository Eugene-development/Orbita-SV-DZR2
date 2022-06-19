<script context="module">
	// export const get = async ({ params, url }) => {
	// 	let token;
	// 	for (let k of Object.entries(import.meta.env)) {
	// 		if (k[0] === 'VITE_' + url.hostname) token = (k[1])
	// 	}
	// 	console.log(url.hostname)
	// };
	import '../app.css';
	import Header from '$layout/header/v_001/index.svelte';
	import Footer from '$layout/footer/v_001/index.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
