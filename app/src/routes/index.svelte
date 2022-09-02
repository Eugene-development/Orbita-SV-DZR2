
<!--<script>-->
<!--	import { pageTitle } from '$stores/store.js';-->

<!--	pageTitle.update(() => 'Блог');-->
<!--</script>-->

<!--<svelte:head>-->
<!--	<title>Орбита-Строй || Блог компании на тематику строительных и отделочных материалов</title>-->
<!--	<meta name="description" content="Информационный посты от нашей компании по строительной теме" />-->
<!--</svelte:head>-->

<script>
	import { pageTitle } from '$stores/store.js';

	pageTitle.update(() => 'Строительная база');

	import {Swiper_v2} from "symax/ui/broker"
	import {content} from "./index.js";
	const {content_Swiper_v2} = content
</script>

<svelte:head>
	<title>Орбита-строй || База строительных материалов в Дзержинске Нижегородской области</title>
	<meta
		name="description"
		content="Заказ строительных и отделочных материалов на базе стойматериалов в Дзержинске с доставкой. Наш интернет магазин строительный предложит вам широчайший ассортимент и низкие цены. Есть стройбаза в черте города."
	/>
</svelte:head>




<div class="">
	<!--    <div class="my-10 max-w-1/2 mx-auto sm:px-6 lg:px-8">-->
	<!--      <div>-->
	<!--        <label for="price" class="block text-sm font-medium text-gray-700">Поиск товара</label>-->
	<!--        <div class="mt-1 relative rounded-md shadow-sm">-->
	<!--          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
	<!--      <span class="text-gray-500 sm:text-sm">-->
	<!--        $-->
	<!--      </span>-->
	<!--          </div>-->
	<!--          <input type="text" id="price" class="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">-->
	<!--          <div class="absolute inset-y-0 right-0 flex items-center">-->
	<!--            <label for="currency" class="sr-only">Категория</label>-->
	<!--            <select id="Currency" class="focus:ring-cyan-500 focus:border-cyan-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">-->
	<!--              <option>Категория</option>-->
	<!--              <option>CAD</option>-->
	<!--              <option>EUR</option>-->
	<!--            </select>-->
	<!--          </div>-->
	<!--        </div>-->
	<!--      </div>-->
	<!--    </div>-->

	<div class="ml-8 my-6 text-base text-left">
		<div>
			<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
				Наши распродажи
			</h2>
			<h3
					class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-cyan-900 sm:text-4xl"
			>
				Топовые акции
			</h3>
		</div>
	</div>

	<Swiper_v2 {content_Swiper_v2}/>




	<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->




<!--	<div class="relative">-->
<!--		<div class=" sm:px-6 lg:px-8">-->
<!--			<div class="relative shadow-xl sm:overflow-hidden sm:rounded-lg">-->
<!--				<div class="absolute inset-0">-->
<!--					<img-->
<!--							class="h-full w-full object-cover"-->
<!--							src="https://storage.yandexcloud.net/brand-logo/orbita/brand/mainfoto.jpeg"-->
<!--							alt="Стройматериалы в Нижнем Новгороде"-->
<!--					/>-->
<!--					<div class="absolute inset-0 bg-gray-600 mix-blend-multiply"></div>-->
<!--				</div>-->
<!--				<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">-->
<!--					<h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">-->
<!--						<span class="block text-white">База строительных и отделочных материалов</span>-->
<!--						<span class="block text-gray-300">в Дзержинске</span>-->
<!--					</h1>-->
<!--					<p-->
<!--							class="mx-auto mt-6 max-w-lg bg-gray-800 bg-opacity-30 p-6 text-center text-xl text-white sm:max-w-3xl"-->
<!--					>-->
<!--						Оптовая и розничная продажа<br />-->
<!--						строительных и отделочных материалов со складов в Дзержинске. <br /> Широкий ассортимент-->
<!--						и доступные цены.-->
<!--					</p>-->
<!--					<div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">-->
<!--						<div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">-->
<!--							&lt;!&ndash;							<button on:click={ changeButtonVisibleCatalog } class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Каталог </button>&ndash;&gt;-->
<!--							&lt;!&ndash;							<a href="/blog" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 bg-opacity-80 hover:bg-opacity-70 sm:px-8"> Наш блог </a>&ndash;&gt;-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->

	<div class="ml-8 mt-16 text-base text-left">
		<div>
						<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
							обратите внимание
						</h2>
			<h3
					class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-cyan-900 sm:text-4xl"
			>
				Сезонные товары
			</h3>
		</div>
	</div>

	<div class="bg-white">
		<div class="mx-auto max-w-full py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">




				<div class="group relative ">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gradient-to-br from-cyan-800 to-cyan-700 group-hover:opacity-75 lg:aspect-none lg:h-80 shadow-lg shadow-cyan-900">
						<img src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png" alt="" class="h-full w-full object-contain object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-base text-cyan-800">
								<a href="/shop/product/epp-xps30-200-texnopleks-118058050-l">
									<span aria-hidden="true" class="absolute inset-0"></span>
									Пенополистирол
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500">Эпп xps30-200 техноплекс 1180*580*50-l</p>
						</div>
						<p class="text-xl font-medium text-gray-900">300₽</p>
					</div>
				</div>

				<div class="group relative ">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gradient-to-br from-cyan-800 to-cyan-700 group-hover:opacity-75 lg:aspect-none lg:h-80 shadow-lg shadow-cyan-900">
						<img src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png" alt="" class="h-full w-full object-contain object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-base text-cyan-800">
								<a href="/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg">
									<span aria-hidden="true" class="absolute inset-0"></span>
									Штукатурка
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500">Штукатурная смесь "ек" tт 30 фасадная (25 кг)</p>
						</div>
						<p class="text-xl font-medium text-gray-900">330₽</p>
					</div>
				</div>

				<div class="group relative ">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gradient-to-br from-cyan-800 to-cyan-700 group-hover:opacity-75 lg:aspect-none lg:h-80 shadow-lg shadow-cyan-900">
						<img src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2728.jpg" alt="" class="h-full w-full object-contain object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-base text-cyan-800">
								<a href="/shop/product/epp-xps30-200-texnopleks-118058050-l">
									<span aria-hidden="true" class="absolute inset-0"></span>
									Профиля
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500">Профиль направляющий 27/28 толщ. 0,4 мм (3 м)</p>
						</div>
						<p class="text-xl font-medium text-gray-900">96₽</p>
					</div>
				</div>

				<div class="group relative ">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gradient-to-br from-cyan-800 to-cyan-700 group-hover:opacity-75 lg:aspect-none lg:h-80 shadow-lg shadow-cyan-900">
						<img src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6027.jpg" alt="" class="h-full w-full object-contain object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-base text-cyan-800">
								<a href="/shop/product/epp-xps30-200-texnopleks-118058050-l">
									<span aria-hidden="true" class="absolute inset-0"></span>
									Профиля
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500">Профиль потолочный 60/27 толщ. 0,4 мм (3 м)</p>
						</div>
						<p class="text-xl font-medium text-gray-900">120₽</p>
					</div>
				</div>


			</div>
		</div>
	</div>












	<div class="ml-8 mt-16 text-base text-left">
		<div>
						<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
							это интересно
						</h2>
			<h3
					class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-cyan-900 sm:text-4xl"
			>
				Отзывы о нас
			</h3>
		</div>
	</div>

	<section class="my-12 bg-gray-800">
		<div class="md:grid md:grid-cols-2">
			<div class="py-12 px-12 md:flex md:flex-col md:border-r md:border-cyan-900 md:py-16 ">
				<div class="text-2xl text-gray-100 md:flex-shrink-0">
					<h2>ООО "РемСтройМонтаж"</h2>
					<!--            <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple">-->
				</div>
				<blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
					<div class="relative text-lg font-medium text-white md:flex-grow">
						<svg
							aria-hidden="true"
							class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-cyan-500"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
							/>
						</svg>
						<br />
						<p class="relative">
							АО "Ремстроймонтаж" выражает признательность команде "Орбита-Строй" за профессионализм
							и оперативность качественного подбора строительных материалов. Высокий
							профессиональный уровень сотрудников Вашей компании помогает решать множество проблем
							в области поставок строительных материалов на объекты нашего предприятия.
						</p>
					</div>
					<footer class="mt-8">
						<div class="flex">
							<!--                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">-->
							<!--                  <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
							<!--                </div>-->
							<div class="ml-1">
								<div class="text-base font-medium text-white">Вилков А.Н.</div>
								<div class="text-base font-medium text-cyan-500">Генеральный директор</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
			<div class="border-t-2 py-12 px-12 md:border-t-0 md:border-l md:py-16 ">
				<div class="text-2xl text-gray-100 md:flex-shrink-0">
					<h2>ООО "ПСГ" Химрегион</h2>
					<!--            <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg" alt="Workcation">-->
				</div>
				<blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
					<div class="relative text-lg font-medium text-white md:flex-grow">
						<svg
							class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-cyan-500"
							fill="currentColor"
							viewBox="0 0 32 32"
						>
							<path
								d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
							/>
						</svg>
						<br />
						<p class="relative">
							ООО "ПСГ" Химрегион сотрудничает с "Орбита-Строй" с 2016 года. Хотим от всей души
							поблагодарить Вас за внимательное отношение к своим клиентам и профессионализм.
							Довольны обилием ассортимента, постоянными акциями и низкими ценами. Очень надеемся на
							дальнейшее взаимовыгодное сотрудничество с Вами и вашим коллективом.
						</p>
					</div>
					<footer class="mt-8">
						<div class="flex">
							<!--                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">-->
							<!--                  <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
							<!--                </div>-->
							<div class="ml-1">
								<div class="text-base font-medium text-white">Чернышев В.В.</div>
								<div class="text-base font-medium text-cyan-500">Генеральный директор</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</section>






	<div class="my-24 bg-gray-50 pb-16 lg:relative lg:z-10 lg:pb-0">
		<!--    <div class="my-24 pb-16 bg-gradient-to-r from-white to-indigo-900 lg:pb-0 lg:z-10 lg:relative">-->
		<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
			<div class="relative lg:-my-8">
				<div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
					<div
							class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl shadow-2xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
					>
						<img
								class="object-cover lg:h-full lg:w-full"
								src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/stroimat.jpg"
								alt=""
						/>
					</div>
				</div>
			</div>
			<div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
				<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
					<blockquote>
						<div>
							<svg
									class="text-cyan-700 h-12 w-12 "
									fill="currentColor"
									viewBox="0 0 32 32"
									aria-hidden="true"
							>
								<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
								/>
							</svg>
							<p class="text-blueGray-800 mt-6 text-2xl font-medium">
								База стройматериалов "Орбита-Строй" предлагает в сезоне 2022 года наилучшие
								предложения по ассортименту и ценам на строительные и отделочные материалы, а так же
								на напольные покрытия и метизную продукцию. Находится наш строительный магазин на
								выезде из Дзержинска недалеко от Нижнего Новгорода. Если вас интересуют
								стройматериалы в Дзержинске или в Нижнем Новгороде, то мы ждём Вас на нашей базе!
							</p>
						</div>
						<footer class="mt-6">
							<p class="text-blueGray-800 text-base font-medium">Сорокин Сергей Владимирович</p>
							<p class="text-base font-medium text-cyan-900">Директор</p>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</div>



	<div class="bg-gray-800">
		<div class="mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-12 lg:flex lg:items-center">
			<div class="lg:w-0 lg:flex-auto text-center">
				<h2 id="newsletter-headline" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
					<span class="mb-6 block text-5xl text-cyan-400">"Орбита-Строй"</span>
					<span class="block text-white">это база строительных и отделочных материалов</span>
					<span class="block text-gray-100">в Дзержинске</span>
				</h2>
				<p class="mt-3 text-lg text-gray-300">
					Осуществляем оптовую и розничную продажу строительных и отделочных материалов со складов в Дзержинске. Широкий ассортимент
					и доступные цены приятно вас удивят. При необходимости есть услуга доставки стройматериалов до вашего объекта.
				</p>
			</div>
		</div>
	</div>


	<div class="overflow-hidden bg-white">
		<div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
			<div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block"></div>
			<div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
				<div>
					<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
						Строительная база
					</h2>
					<h3
						class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
					>
						Орбита-строй
					</h3>
				</div>
			</div>
			<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
				<div class="relative lg:col-start-2 lg:row-start-1">
					<svg
						class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="de316486-4a29-4312-bdfc-fbce2132a2c1"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
					</svg>
					<div class="relative mx-auto max-w-prose text-base lg:max-w-none">
						<figure>
							<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
								<img
									class="rounded-lg object-cover object-center shadow-lg"
									src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/serv_4.jpg"
									alt="stroymat"
									width="1184"
									height="1376"
								/>
							</div>
						</figure>
					</div>
				</div>
				<div class="mt-8 lg:mt-0">
					<div class="mx-auto max-w-prose text-base lg:max-w-none">
						<p
							class="prose prose-cyan mx-auto mt-1 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none"
						>
							Компания «Орбита Строй» – это не просто стройбаза, это надежный партнер,
							сотрудничающий с организациями, строительно-ремонтными бригадами, частными лицами и
							розничными продавцами! Клиенты приобретают стройматериалы в Дзержинске с доставкой до
							объекта или на условиях самовывоза.
						</p>
					</div>
					<div
						class="prose prose-cyan mx-auto mt-1 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none"
					>
						<p>
							В перечне товаров базы «Орбита Строй» представлено все необходимое для комплектации
							ассортимента строительного магазина или оснащения бригады рабочих для выполнения
							профессиональных задач. Клиентам предоставляется возможность заказать инструмент,
							сантехнику, изоляцию, электротовары, строительные и отделочные материалы по выгодным
							ценам. Покупателям товаров на строительной базе «Орбита Строй» доступны различные
							акции лояльности, позволяющие значительно сэкономить на приобретении стройматериалов и
							инструментов.
						</p>
						<p>
							Компания «Орбита Строй» открыла два строительных магазина в Дзержинске: на проспекте
							Ленина и на улице Космонавтов – последняя площадка работает 7 дней в неделю, включая
							воскресенье. Вам нужен надежный партнер, у которого можно в любое время приобрести все
							необходимое для строительства, ремонта, а также инструменты для каменщиков, плотников,
							отделочников и других мастеров? Обращайтесь в компанию «Орбита Строй» за следующими
							товарами:
						</p>
						<ul>
							<li>Строительные материалы</li>
							<li>Материалы для отделки помещений</li>
							<li>Электротовары</li>
							<li>Сантехника</li>
						</ul>
						<p>У нас вы всегда можете купить стройматериалы через каталог.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
