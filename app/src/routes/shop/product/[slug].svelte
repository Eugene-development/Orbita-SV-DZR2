<script context="module">
	import { pageTitle } from '$stores/store.js';

	export const load = async ({ fetch, params, url }) => {
		const idProduct = url.searchParams.get('id');
		const slugProduct = params.slug;

		let res;

		res = await fetch(`/api/catalog/productSLUG/${slugProduct}`);

		const resJSON = await res.json();
		const data = resJSON.product.data[0];
		const id = data.id;
		const nameProduct = data.name;
		const descriptionProduct = data.description;
		const idCategory = data.category.id;
		const nameCategory = data.category.name;
		const slugCategory = data.category.slug;
		const pathAWS = resJSON.pathAWS;
		const image = data.image;
		const unit = data.unit;
		const size = data.size;

		const seoTitle = data.seo ? data.seo.title : 'Строительные и отделочные материалы';
		const seoDescription = data.seo
			? data.seo.description
			: 'Строительные и отделочные материалы в Нижнем Новгороде';
		const title = nameProduct + ' в Нижнем Новгороде || ' + seoTitle;
		const description =
			nameProduct + ' в наличии с доставкой по Нижнему Новгороду. ' + seoDescription;

		pageTitle.update(() => nameProduct);

		return {
			props: {
				id,
				title,
				description,
				nameProduct,
				descriptionProduct,
				idCategory,
				slugCategory,
				nameCategory,
				pathAWS,
				image,
				unit,
				size
			}
		};
	};
</script>

<script>
	import { useVisible } from '$lib/functions/visible';
	import { descriptionInfo, paymentInfo, deliveryInfo, lengthCart, InCart } from '$stores/store.js';
	import pkg from 'lodash';
	const { concat } = pkg;
	import axios from 'axios';
	import { useReturn } from '$lib/functions/return';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	const { currentValue } = useReturn;

	const { invertToTrue, invertToFalse } = useVisible;

	const changeVisibleDescriptionInfo = () => {
		descriptionInfo.update(invertToTrue);
		paymentInfo.update(invertToFalse);
		deliveryInfo.update(invertToFalse);
	};
	let visibleDescription;
	descriptionInfo.subscribe((value) => (visibleDescription = value));

	const changeVisiblePaymentInfo = () => {
		descriptionInfo.update(invertToFalse);
		paymentInfo.update(invertToTrue);
		deliveryInfo.update(invertToFalse);
	};
	let visiblePayment;
	paymentInfo.subscribe((value) => (visiblePayment = value));

	const changeVisibleDeliveryInfo = () => {
		descriptionInfo.update(invertToFalse);
		paymentInfo.update(invertToFalse);
		deliveryInfo.update(invertToTrue);
	};
	let visibleDelivery;
	deliveryInfo.subscribe((value) => (visibleDelivery = value));

	const sendToCart = async (id) => {
		if (localStorage.getItem('inCart') === null) {
			localStorage.setItem('inCart', JSON.stringify([id]));
		} else {
			const itemsCart = JSON.parse(localStorage.getItem('inCart'));
			const newItemsCart = concat(itemsCart, id);
			localStorage.setItem('inCart', JSON.stringify(newItemsCart));
		}
		const productsInCart = JSON.parse(localStorage.getItem('inCart'));
		const visibleLengthCart = productsInCart.length;
		lengthCart.update(() => currentValue(visibleLengthCart));
		InCart.update(() => productsInCart);

		const url = `/store-cart`;
		const payloadCart = {
			product_id: id,
			sessionUser: localStorage.getItem('dataS')
		};

		const domain = import.meta.env.VITE_API_CART;
		const apiCart = {
			baseURL: `${domain}`,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
			}
		};
		await axios.post(url, payloadCart, apiCart);
	};

	let idProductsInCart;
	onMount(async () => {
		if (browser && localStorage.getItem('inCart') !== null) {
			idProductsInCart = JSON.parse(browser && localStorage.getItem('inCart'));
		}
	});
	InCart.subscribe((value) => (idProductsInCart = value));

	export let title;
	export let description;
	export let id;
	export let nameProduct;
	export let descriptionProduct;
	export let idCategory;
	export let slugCategory;
	export let nameCategory;
	export let pathAWS;
	export let image;
	export let unit;
	export let size;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
<div>
	<div>
		<!--        <div id="start" class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-md shadow-slate-200/50 mb-4">-->
		<!--            <div class="flex flex-col text-center w-full">-->
		<!--                <h1 class=" text-4xl font-medium title-font text-slate-900 lowercase first-letter:uppercase">{ nameProduct }</h1>-->
		<!--            </div>-->
		<!--        </div>-->

		<section class="body-font overflow-hidden text-slate-600">
			<div class="container mx-auto px-8 py-12">
				<div class="mx-auto flex flex-wrap lg:w-4/5">
					<div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-12">
						<h2 class="title-font text-base tracking-widest text-red-500">НАИМЕНОВАНИЕ</h2>
						<h1
							class="title-font my-4 text-2xl font-medium lowercase text-slate-900 first-letter:uppercase"
						>
							{nameProduct}
						</h1>
						<div class="mb-4 flex">
							<button
								on:click={changeVisibleDescriptionInfo}
								class="flex-grow border-slate-300  py-2 px-1 text-lg focus:outline-none {visibleDescription
									? 'border-b-2 font-bold'
									: 'font-normal'}">Описание</button
							>
							<button
								on:click={changeVisiblePaymentInfo}
								class="flex-grow border-slate-300 py-2 px-1 text-lg focus:outline-none {visiblePayment
									? 'border-b-2 font-bold'
									: 'font-normal '}">Оплата</button
							>
							<button
								on:click={changeVisibleDeliveryInfo}
								class="flex-grow border-slate-300 py-2 px-1 text-lg focus:outline-none {visibleDelivery
									? 'border-b-2 font-bold'
									: 'font-normal '}">Доставка</button
							>
						</div>

						{#if visibleDescription}
							<p class="mb-4 leading-relaxed ">{@html descriptionProduct}</p>
						{:else if visiblePayment}
							<p class="mb-4 leading-relaxed">
								Предлагаем следующие варианты оплаты: <br />
								- наличными курьеру при получении товара;<br />
								- картой через терминал, либо наличными в нашем офисе;<br />
								- безналичный расчет (через банк для юридических лиц). Мы отправим счёт на оплату с нашими
								реквизитами на указанный вами электронный адрес. Доставка (самовывоз) товара осуществляется
								после получения денежных средств на наш расчётный счёт.
							</p>
						{:else if visibleDelivery}
							<p class="mb-4 leading-relaxed">
								Для удобства мы предлагаем доставку товара на адрес объекта.
								<br />Наша компания осуществляет доставку строительных и отделочных материалов как
								по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по
								Дзержинску составляет 450 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более
								подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.
							</p>
						{/if}

						<a sveltekit:prefetch sveltekit:noscroll href="/products/{slugCategory}">
							<div class="flex border-t border-slate-200 py-2">
								<span class="text-slate-500">Категория:</span>
								<span class="ml-auto text-sm text-red-500 hover:text-red-600">{nameCategory}</span>
							</div>
						</a>

						<div class="flex border-t border-slate-200 py-2">
							<span class="text-slate-500">Единица измерения:</span>
							<span class="ml-auto text-slate-900">{unit}</span>
						</div>
						<div class="mb-6 flex border-t border-b border-slate-200 py-2">
							<span class="text-slate-500">Наличие:</span>
							<span class="ml-auto text-slate-900">Уточняйте у менеджера</span>
						</div>
						<div class="flex">
							<span
								class="title-font rounded-2xl bg-indigo-800 py-2 px-4 text-lg font-medium text-slate-100"
								>{size[0].price.price} р/{unit}.</span
							>
							{#if !idProductsInCart.some((arrVal) => id === arrVal)}
								<button
									on:click|preventDefault|once={sendToCart(id)}
									type="button"
									class="ml-auto flex items-center justify-center rounded-md border border-transparent bg-slate-50 py-2 px-6 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-50"
								>
									<svg
										class="h-5 w-5 text-red-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
										/>
									</svg>
									<span class="ml-3">В корзину</span>
								</button>
							{:else}
								<button
									class="ml-auto flex items-center justify-center rounded-md border border-transparent bg-indigo-800 py-2 px-6 text-base font-medium text-slate-100 "
								>
									<svg
										class="h-5 w-5 text-red-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
										/>
									</svg>
									<span class="ml-3">В корзине</span>
								</button>
							{/if}
							<!--                            <button-->
							<!--                                    class="rounded-full w-10 h-10 bg-slate-100 p-0 border-0 inline-flex productsID-center justify-center text-slate-500 ml-4 hover:bg-red-900"-->
							<!--                                    wfd-id="156">-->
							<!--                                <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
							<!--                                     stroke-width="2" viewBox="0 0 24 24">-->
							<!--                                    <path-->
							<!--                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>-->
							<!--                                </svg>-->
							<!--                            </button>-->
						</div>
					</div>

					{#if image[0]}
						<img
							alt="ecommerce"
							class="max-w-xl rounded border-2 border-slate-50 object-contain object-center p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-50 ring-offset-1 lg:w-1/2"
							src="{pathAWS}{image[0].filename}"
						/>
					{/if}
				</div>
			</div>
		</section>
	</div>
</div>
