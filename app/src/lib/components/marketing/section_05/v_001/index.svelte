<script>
	export let mainText;
	export let types;
	export let img;
</script>

<div class="bg-gradient-to-b from-white via-white to-gray-50">
	<div
		class="mx-auto grid max-w-3xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
	>
		<div>
			<h2
				class="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-gray-800 sm:text-3xl"
			>
				{mainText.title}
			</h2>
			<!--            <h2 class="max-w-3xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-3xl">Распашные шкафы и шкафы купе недорого и качественно</h2>-->
			<p class="mt-4 text-gray-500">{mainText.description}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each types as { title, description }}
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-900">{title}</dt>
						<dd class="mt-2 text-sm text-gray-500">{description}</dd>
					</div>
				{/each}
			</dl>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-6">
			{#each img as { path, alt }}
				<img class="rounded-lg bg-gray-100" src={path} {alt} />
			{/each}
		</div>
	</div>
</div>
