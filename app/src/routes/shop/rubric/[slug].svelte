<script context="module">
	import { pageTitle } from '$stores/store.js';

	export const load = async ({ fetch, params, url }) => {
		const idHead = url.searchParams.get('id');
		const slugHead = params.slug;

		let res;
		res = await fetch(`/api/catalog/rubricsSLUG/${slugHead}`);
		// if (idHead) {
		//     res = await fetch(`/api/catalog/rubricsID/${idHead}`)
		// } else {
		//     res = await fetch(`/api/catalog/rubricsSLUG/${slugHead}`)
		// }

		const resJSON = await res.json();
		const data = resJSON.rubrics.data[0];
		const nameHead = data.name;
		const rubric = data.rubric;
		const text = data.text;
		const title = nameHead + " в Дзержинске || База стройматериалов 'Орбита-Строй' в Дзержинске";
		const description =
			nameHead +
			' по низким ценам в Дзержинске и регионе. Предлагаем доставку и скидки для товара ' +
			nameHead +
			'.';

		pageTitle.update(() => nameHead);

		return {
			// cache: {
			//     "maxage": 300,
			//     "private": false
			// },
			props: {
				title,
				description,
				nameHead,
				rubric,
				text
			}
		};
	};
</script>

<script>
	// import PageTransitions from "$lib/components/PageTransitions/index.svelte";

	export let title;
	export let description;
	export let nameHead;
	export let rubric;
	export let text;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="bg-white">
	<!--        <div class="pt-4 sm:pt-8 lg:pt-12">-->
	<!--            <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">-->
	<!--                <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">-->
	<!--                    &lt;!&ndash;            <h2 class="text-lg leading-6 font-semibold text-slate-900 uppercase tracking-wider">&ndash;&gt;-->
	<!--                    &lt;!&ndash;              Раздел&ndash;&gt;-->
	<!--                    &lt;!&ndash;            </h2>&ndash;&gt;-->
	<!--                    <h1 class="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">-->
	<!--                        {nameHead}-->
	<!--                    </h1>-->
	<!--                    <p class="text-xl text-slate-700">-->
	<!--                        Выберите интересующую вас рубрику в этом разделе.-->
	<!--                    </p>-->
	<!--                </div>-->
	<!--            </div>-->
	<!--        </div>-->
	<div class="bo mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
		<div class="relative">
			<div class="absolute inset-0 h-3/4" />
			<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
				>
					{#each rubric as { id, slug, name }}
						<div
							class="flex flex-col overflow-hidden rounded-lg border-2 shadow-lg shadow-cyan-200/50"
						>
							<div class="px-6 py-8 text-center sm:p-10 sm:pb-6">
								<div>
									<h3
										class="inline-flex rounded-full bg-red-50 px-8 py-1  text-sm font-semibold uppercase tracking-wide text-red-900"
										id="tier-standard"
									>
										{nameHead}
									</h3>
								</div>
								<div class="mt-4  items-baseline text-center text-2xl font-extrabold">
									{name}
								</div>
								<!--                                                  <p class="mt-5 text-lg text-slate-500">-->
								<!--                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.-->
								<!--                                                  </p>-->
							</div>
							<div class="flex flex-1 flex-col justify-between px-6  sm:p-10 sm:pt-6">
								<ul class="space-y-2" />
								<div class="mb-2 rounded-md shadow-lg shadow-cyan-500/50">
									<a
										sveltekit:prefetch
										sveltekit:noscroll
										href="/shop/category/{slug}"
										class="block w-full rounded-md border border-cyan-900 bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-500 py-2 text-center text-sm font-semibold text-white duration-300 ease-in hover:bg-cyan-900 hover:from-cyan-800 hover:via-cyan-500 hover:to-cyan-800"
									>
										В каталог
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:mt-8 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-7xl">
				<div class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
					<!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-slate-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
					<div class="flex-1">
						<div>
							<h2
								class="inline-flex rounded-full bg-white px-4 py-1 text-2xl font-semibold tracking-wide text-slate-800"
							>
								{text.titleText}
							</h2>
						</div>
						<div class="mt-8 text-lg text-slate-600">{@html text.text}</div>
					</div>
				</div>
				<div class="mt-6 rounded-md shadow lg:flex-shrink-0">
					<a
						href="/information/action"
						class="flex items-center justify-center rounded-md border border-transparent bg-slate-50 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-100"
					>
						{nameHead} со скидкой
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
