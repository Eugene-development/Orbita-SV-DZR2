<script>
	export let pathImg;
	export let title;
	export let description;
</script>

<div class="relative">
	<div class="absolute inset-0">
		<img class="h-full w-full object-cover grayscale" src={pathImg} alt="" />
		<div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="mt-6 max-w-3xl text-xl text-indigo-100">{description}</p>
	</div>
</div>
