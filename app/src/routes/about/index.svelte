<script>
	import { pageTitle } from '$stores/store.js';

	pageTitle.update(() => 'Компания');

</script>

<svelte:head>
	<title>Орбита-строй || О нашей компании - магазине строительных и отделочных материалов</title>
	<meta
		name="description"
		content="Информация о компании Орбита-строй - интернет-магазине стройматериалов в Дзержинске"
	/>
</svelte:head>

<div class="relative overflow-hidden bg-white py-16">
	<div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
		<div class="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
			<svg
				class="absolute top-12 left-full translate-x-32 transform"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
			</svg>
			<svg
				class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
			</svg>
			<svg
				class="absolute bottom-12 left-full translate-x-32 transform"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="d3eb07ae-5182-43e6-857d-35c643af9034"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
			</svg>
		</div>
	</div>

	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-prose text-lg">
			<h1>
				<span class="block text-center text-base font-semibold uppercase tracking-wide text-red-800"
					>О нашей компании</span
				>
				<span
					class="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
					>"Орбита-строй"</span
				>
			</h1>
			<p class="mt-8 text-xl leading-8 text-gray-500">
				Компания «Орбита-Строй» с 2011 года успешно продает строительные и отделочные материалы
				оптом и в розницу. С нами Вы легко сможете подобрать нужный и экономичный материал для
				выполнения различных строительно-отделочных работ. Наши специалисты также помогут
				подготовить смету и подсчитать стоимость расходов. И все это осуществляется в самые
				кратчайшие сроки с должным уровнем профессионализма.
			</p>
		</div>
		<div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
			<ul>
				<li>Идеальный для потребителя баланс между ценой и качеством</li>
				<li>Индивидуальный подход к доставке стройматериалов до объекта клиента.</li>
				<li>Возможность покупки товаров оптовыми партиями со значительной скидкой.</li>
				<li>Высокий уровень профессиональной подготовленности персонала.</li>
			</ul>
			<h3>Предлагаем возможность размещения рекламных материалов на нашем сайте.</h3>
			<figure>
				<img
					class="w-full rounded-lg"
					src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
					alt=""
					width="1310"
					height="873"
				/>
			</figure>
			<!--        <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>-->
			<!--        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>-->
		</div>
	</div>
</div>
