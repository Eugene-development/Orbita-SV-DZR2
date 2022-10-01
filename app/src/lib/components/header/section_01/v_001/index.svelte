<script>
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/functions/click_outside';

	import MobileMenu from './mobile/index.svelte';
	// import {useHead} from "$lib/use/content/header";

	import { useHead } from '../../content/index.js';
	const { head, information } = useHead;
	const { left: leftInfo, right: rightInfo } = information[0];

	import { useVisible } from '$lib/functions/visible';
	import {
		allProd,
		buttonVisibleCatalog,
		formSearch,
		informationMenu,
		lengthCart,
		mobileMenu,
		pageTitle,
		infoPanel
	} from '../../../../../stores/store.js';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import Search from '$lib/components/forms/search/index.svelte';
	import axios from 'axios';
	import pkg from 'lodash';

	const { invert, invertToFalse, invertToTrue } = useVisible;

	const changeVisibleInformationMenu = () => {
		informationMenu.update(invert);
	};
	const closeVisibleInformationMenu = () => {
		informationMenu.update(invertToFalse);
	};

	// let visibleInformationMenu;
	// informationMenu.subscribe(value => visibleInformationMenu = value);

	let countLengthCart;
	onMount(async () => {
		if (browser && localStorage.getItem('inCart') !== null) {
			countLengthCart = JSON.parse(browser && localStorage.getItem('inCart')).length;
		}
	});
	lengthCart.subscribe((value) => (countLengthCart = value));

	const changeVisibleMobileMenu = () => mobileMenu.update(invert);
	let visibleMobileMenu;
	mobileMenu.subscribe((value) => (visibleMobileMenu = value));

	const changeVisibleFormSearch = () => formSearch.update(invert);
	let visibleFormSearch;
	formSearch.subscribe((value) => (visibleFormSearch = value));

	const { filter } = pkg;
	const allProducts = [];
	const getAllProducts = async () => {
		const headers = {
			Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
		};
		const domain = import.meta.env.VITE_API_CRUD;
		const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;

		const urlProducts = `${domain}/get-all-product/`;
		const allProducts = await axios(urlProducts, { headers });
		// let result = allProducts.match(/Java(Script)/g);
		// let result = filter(allProducts.data.data, ['name', /'УТЕПЛИТЕЛЬ'/])

		// const filterItems = (arr, query) => {
		//     return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
		// }
		// const query = 'УТЕПЛИТЕЛЬ'
		// const result = filterItems(allProducts.data.data, query)

		// const text = 'УТЕП'
		// const search = allProducts.data.data.filter(({name}) => name.includes(text));
		// console.log(search)

		// const search = ( query ) => allProducts.data.data.filter(({ name }) => name.toLowerCase().includes( query ));
		// const query = 'УТЕП'.toLowerCase();
		// const result = search( query );
		// console.log(result);

		// const result = filterItems(allProducts.data.data.name, 'УТЕПЛИТЕЛЬ')
		// console.log(result)

		allProd.update(() => allProducts.data.data);

		// let test;
		// allProd.subscribe( value => test = value );
		//
		// console.log(test)
	};

	//let showPageTitle;
	// pageTitle.subscribe(value => showPageTitle = value)

	const changeButtonVisibleCatalog = () => buttonVisibleCatalog.update(invertToTrue);
	const changeVisibleInfoPanel = () => infoPanel.update(invertToFalse);
</script>

{#if $infoPanel}
	<div class="relative bg-gray-800">
		<div class="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
			<div class="pr-16 sm:px-16 sm:text-center">
				<p class="font-medium text-white antialiased">
					<!-- <span class="md:hidden">Специальные цены на утеплитель от 725р.</span>
					<span class="hidden md:inline">
						Спецпредложение. Только в эти дни!!! Специальные цены на утеплитель от 725р.</span
					> -->
					<span class="md:hidden">На склад в г. Дзержинск срочно требуются грузчики.</span>
					<span class="hidden md:inline"> На склад в г. Дзержинск срочно требуются грузчики.</span>
					<!-- <span class="block sm:ml-2 sm:inline-block">
						<a href="/information/action" class="font-bold text-white underline">
							Подробнее <span aria-hidden="true">&rarr;</span></a
						>
					</span> -->
				</p>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2"
			>
				<button
					type="button"
					on:click={changeVisibleInfoPanel}
					class="flex rounded-md p-2 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"
				>
					<span class="sr-only">Dismiss</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-4 w-4 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!--<div class="relative bg-gray-800">-->
	<!--	<div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">-->
	<!--		<div class="pr-16 sm:text-center sm:px-16">-->
	<!--			<p class="font-medium text-white antialiased">-->
	<!--				<span class="md:hidden"> Снижены цены на древесину! </span>-->
	<!--				<span class="hidden md:inline"> Хорошие новости! Снижены цены на древесину. </span>-->
	<!--				<span class="block sm:ml-2 sm:inline-block">-->
	<!--          <a href="/shop/category/pilomaterial" class="text-white font-bold underline"> Подробнее <span aria-hidden="true">&rarr;</span></a>-->
	<!--        </span>-->
	<!--			</p>-->
	<!--		</div>-->
	<!--		<div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">-->
	<!--			<button type="button" on:click={changeVisibleInfoPanel} class="flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white">-->
	<!--				<span class="sr-only">Dismiss</span>-->
	<!--				&lt;!&ndash; Heroicon name: outline/x &ndash;&gt;-->
	<!--				<svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">-->
	<!--					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />-->
	<!--				</svg>-->
	<!--			</button>-->
	<!--		</div>-->
	<!--	</div>-->
	<!--</div>-->
{/if}

<header>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<!--    <div class="relative bg-gradient-to-tr from-gray-500 via-gray-600 to-gray-500">-->
	<!--        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">-->
	<!--            <div class="pr-16 sm:text-left">-->
	<!--                <div class="font-medium text-white text-sm">-->
	<!--                    <span class="md:hidden"><strong>8 (800) 555-8-111</strong> (звонок бесплатный)<br> 8 (930) 688-88-62<br> 8 (902) 303-36-54</span>-->
	<!--                    <span class="hidden md:inline"><strong>8 (800) 555-8-111</strong> (звонок бесплатный) - 8 (930) 688-88-62 - 8 (902) 303-36-54</span>-->
	<!--                    <span class="block sm:ml-5 sm:inline-block">почта: <strong>info@orbita-stroy.com</strong></span>-->
	<!--&lt;!&ndash;                    <span class="block sm:ml-5 sm:inline-block">режим: Пн-Пт 8:00-17:30; Сб 9:00-16:00</span>&ndash;&gt;-->

	<!--                        <button class="ml-8 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md text-base font-medium text-white bg-slate-50 hover:bg-gray-800 shadow-lg shadow-gray-700/50" href="/shop/cart" >-->
	<!--                            <svg class="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
	<!--                                 xmlns="http://www.w3.org/2000/svg">-->
	<!--                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"-->
	<!--                                      stroke-width="2" />-->
	<!--                            </svg>-->
	<!--                            Корзина-->
	<!--                        </button>-->

	<!--                </div>-->

	<!--            </div>-->
	<!--        </div>-->
	<!--    </div>-->

	<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
	<nav class="bg-cyan-800">
		<div class="mx-auto hidden max-w-full px-2 sm:px-8 lg:block lg:px-10">
			<div class="relative flex h-12 items-center justify-between">
				<div class="flex items-center px-1 lg:px-0">
					<div class=" ">
						<div class="flex space-x-1">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<!--                            <svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor"-->
							<!--                                 stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
							<!--                                <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"-->
							<!--                                      stroke-linecap="round"-->
							<!--                                      stroke-linejoin="round"/>-->
							<!--                            </svg>-->
							<!--                            <p class="text-gray-300 pr-3 rounded-md text-base font-medium">8 (800) 555-8-111</p>-->

							<svg
								class="h-6 w-6 text-red-500"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<a href="tel:+79023033654" class="rounded-md pr-2 text-base font-medium text-white"
								>8 (902) 303-36-54</a
							>

							<svg
								class="h-6 w-6 text-red-500"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<a href="tel:+79306888862" class="rounded-md pr-2 text-base font-medium text-white"
								>8 (930) 688-88-62</a
							>

							<svg
								class="h-6 w-6 text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span class="rounded-md pr-2 text-base font-medium text-white"
								>info@orbita-stroy.com</span
							>
						</div>
					</div>
				</div>
				<!--                <div class="flex-1 flex justify-center px-2 lg:ml-6 ">-->
				<!--                    <div class="max-w-lg w-full lg:max-w-xs">-->
				<!--                        <label for="search" class="sr-only">Поиск</label>-->
				<!--                        <button id="search" class="ml-8 inline-flex items-center px-12 py-1 border border-transparent rounded-md text-base font-medium text-slate-800 bg-slate-100 hover:bg-slate-800 shadow-lg shadow-slate-700/50">-->
				<!--                            <svg aria-hidden="true" class="h-5 w-5 text-gray-400 mr-4" fill="currentColor"-->
				<!--                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
				<!--                                <path clip-rule="evenodd"-->
				<!--                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"-->
				<!--                                      fill-rule="evenodd"/>-->
				<!--                            </svg>-->
				<!--                            Поиск-->
				<!--                        </button>-->
				<!--                    </div>-->
				<!--                </div>-->

				<div class="hidden lg:ml-4 lg:block">
					<div class="flex items-center">
						<div class="mr-8 flex items-center md:ml-12">
							<button
								class=" inline-flex items-center justify-center rounded-md border  border-transparent bg-slate-100 py-0.5 pl-2 pr-12 text-base font-medium text-gray-500 hover:bg-slate-200  "
								on:click={getAllProducts}
								on:click={changeVisibleFormSearch}
							>
								<svg
									aria-hidden="true"
									class="mr-2 h-5 w-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										fill-rule="evenodd"
									/>
								</svg>
								Поиск товара
							</button>
						</div>

						<button
							class="flex-shrink-0 rounded-full bg-red-500 p-1 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							type="button"
						>
							<span class="sr-only">View notifications</span>
							<!-- Heroicon name: outline/bell -->
							<svg
								aria-hidden="true"
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</button>

						<!-- Profile dropdown -->
						<div class="relative ml-4 flex-shrink-0">
							<!--                            <div>-->
							<!--                                <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
							<!--                                    <span class="sr-only">Open user menu</span>-->
							<!--                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
							<!--                                </button>-->
							<!--                            </div>-->

							<svg
								class="h-5 w-5 text-red-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									fill-rule="evenodd"
								/>
							</svg>

							<!--
                              Dropdown menu, show/hide based on menu state.

                              Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            -->
							<!--                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
							<!--                                &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
							<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
							<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
							<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
							<!--                            </div>-->
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="lg:hidden" id="mobile-menu">
			<div class="border-t border-gray-700 pt-4 pb-3">
				<div class="flex items-center px-5">
					<!--                    <div class="flex-shrink-0">-->
					<!--                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
					<!--                    </div>-->
					<svg
						class="h-6 w-6 text-red-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clip-rule="evenodd"
							d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
							fill-rule="evenodd"
						/>
					</svg>

					<div class="mx-auto flex items-center">
						<button
							class=" inline-flex items-center justify-center rounded-md border  border-transparent bg-slate-100 py-0.5 pl-2 pr-12 text-base font-medium text-gray-500 hover:bg-slate-200  "
							on:click={getAllProducts}
							on:click={changeVisibleFormSearch}
						>
							<svg
								aria-hidden="true"
								class="mr-2 h-5 w-5 text-gray-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									fill-rule="evenodd"
								/>
							</svg>
							Поиск товара
						</button>
					</div>

					<!--                    <div class="ml-3">-->
					<!--                        <div class="text-base font-medium text-white">Tom Cook</div>-->
					<!--                        <div class="text-sm font-medium text-gray-400">tom@example.com</div>-->
					<!--                    </div>-->
					<button
						class="flex-shrink-0 rounded-full bg-red-500 p-1 text-slate-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						type="button"
					>
						<span class="sr-only">View notifications</span>
						<!-- Heroicon name: outline/bell -->
						<svg
							aria-hidden="true"
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>
				</div>
				<!--                <div class="mt-3 px-2 space-y-1">-->
				<!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>-->
				<!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>-->
				<!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>-->
				<!--                </div>-->
			</div>

			<div class="space-y-1 px-1 pt-2 pb-3 sm:px-4 md:px-8 ">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<div class="mx-auto flex items-center justify-between px-4">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<!--                    <div class="flex">-->
					<!--                        <svg class="hidden sm:block h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-500" fill="none"-->
					<!--                             stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"-->
					<!--                             xmlns="http://www.w3.org/2000/svg">-->
					<!--                            <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"-->
					<!--                                  stroke-linecap="round"-->
					<!--                                  stroke-linejoin="round"/>-->
					<!--                        </svg>-->
					<!--                        <a class="text-gray-300 pl-1 rounded-md text-xs sm:text-base md:text-lg font-medium"-->
					<!--                           href="tel:+78005558111">8 800-555-8-111</a>-->
					<!--                    </div>-->

					<div class="flex">
						<svg
							class="h-6 w-6 text-red-500"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<a
							class="rounded-md pl-1 text-base font-medium text-gray-200 sm:text-base md:text-lg"
							href="tel:+79023033654">8 902-303-36-54</a
						>
					</div>

					<div class="flex">
						<svg
							class="h-6 w-6 text-red-500 "
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<a
							class="rounded-md pl-1 text-base font-medium text-gray-200 sm:text-base md:text-lg"
							href="tel:+79306888862">8 930-688-88-62</a
						>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative -mx-1 bg-white">
		<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-30 shadow" />
		<div class="relative z-20">
			<div
				class="mx-auto flex max-w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-3 md:space-x-8 lg:px-10"
			>
				<div>
					<a class="flex" href="/">
						<span class="sr-only">Logo</span>
						<img
							alt="Logo"
							class="h-8 w-auto sm:h-8"
							src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
						/>
					</a>
				</div>

				<div class="flex items-center md:ml-12 lg:hidden">
					<a
						class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-3 py-1 text-base font-medium text-white shadow-lg shadow-gray-700/50 hover:bg-gray-800"
						href="/shop/cart"
						sveltekit:noscroll
					>
						<svg
							class="mr-1 h-5 w-5"
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
						Корзина (
						<div class="mx-1 text-red-500">{countLengthCart}</div>
						)
					</a>
				</div>

				<div class="-my-2 -mr-2 lg:hidden">
					<button
						aria-expanded="false"
						class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
						on:click={changeVisibleMobileMenu}
						type="button"
					>
						<span class="sr-only">Открыть меню</span>
						<span class="mx-2">Меню</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							aria-hidden="true"
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6h16M4 12h16M4 18h16"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button>
				</div>
				<div class="hidden sm:items-center sm:justify-between lg:flex lg:flex-1">
					<nav class="flex space-x-8 font-semibold">
						<a class="text-base text-cyan-900 hover:text-red-800 " href="/">Главная</a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/about">Компания</a>
						<div on:outclick={closeVisibleInformationMenu} use:clickOutside>
							<!-- Item active: "text-slate-900", Item inactive: "text-slate-500" -->
							<button
								aria-expanded="false"
								class="group inline-flex items-center rounded-md bg-white text-base text-cyan-900 hover:text-red-800 focus:text-red-700 focus:outline-none"
								on:click={changeVisibleInformationMenu}
								type="button"
							>
								<span class="font-semibold">Информация</span>
								<!--
                                  Heroicon name: solid/chevron-down

                                  Item active: "text-gray-900", Item inactive: "text-slate-400"
                                -->
								<svg
									aria-hidden="true"
									class="ml-2 h-5 w-5 text-red-700"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										fill-rule="evenodd"
									/>
								</svg>
							</button>

							<!--
                              'More' flyout menu, show/hide based on flyout menu state.

                              Entering: "transition ease-out duration-200"
                                From: "opacity-0 -translate-y-1"
                                To: "opacity-100 translate-y-0"
                              Leaving: "transition ease-in duration-150"
                                From: "opacity-100 translate-y-0"
                                To: "opacity-0 -translate-y-1"
                            -->
							{#if $informationMenu}
								<div class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
									<div class="absolute inset-0 flex">
										<div class="w-1/2 bg-white" />
										<div class="w-1/2 bg-slate-50" />
									</div>
									<div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
										<nav
											class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
										>
											<div>
												<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Company</h3>-->
												<ul class="mt-5 space-y-6">
													{#each leftInfo as { href, displayName }}
														<li class="flow-root">
															<a
																{href}
																on:click={closeVisibleInformationMenu}
																class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
															>
																<!-- Heroicon name: outline/information-circle -->
																<svg
																	class="h-6 w-6 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	aria-hidden="true"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																	/>
																</svg>
																<span class="ml-4">{displayName}</span>
															</a>
														</li>
													{/each}
												</ul>
											</div>
											<div>
												<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Resources</h3>-->
												<ul class="mt-5 space-y-6">
													{#each rightInfo as { href, displayName }}
														<li class="flow-root">
															<a
																{href}
																on:click={changeVisibleInformationMenu}
																on:outclick={changeVisibleInformationMenu}
																class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
															>
																<!-- Heroicon name: outline/information-circle -->
																<svg
																	class="h-6 w-6 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	aria-hidden="true"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																	/>
																</svg>
																<span class="ml-4">{displayName}</span>
															</a>
														</li>
													{/each}
												</ul>
											</div>
										</nav>
										<div class="bg-slate-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium uppercase tracking-wide text-slate-500">
													Последнее из блога
												</h3>
												<!--                                                <ul role="list" class="mt-6 space-y-6">-->
												<!--                                                    <li class="flow-root">-->
												<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
												<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
												<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">-->
												<!--                                                            </div>-->
												<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
												<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">Boost your conversion rate</h4>-->
												<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
												<!--                                                            </div>-->
												<!--                                                        </a>-->
												<!--                                                    </li>-->

												<!--                                                    <li class="flow-root">-->
												<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
												<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
												<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" alt="">-->
												<!--                                                            </div>-->
												<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
												<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">How to use search engine optimization to drive traffic to your site</h4>-->
												<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
												<!--                                                            </div>-->
												<!--                                                        </a>-->
												<!--                                                    </li>-->
												<!--                                                </ul>-->
											</div>
											<div class="mt-6 text-sm font-medium">
												<a
													href="/blog"
													on:click={changeVisibleInformationMenu}
													class="text-red-700 hover:text-red-800"
												>
													Перейти в блог <span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							{/if}
						</div>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/blog"> Блог </a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/information/action">
							Акции
						</a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/contact"> Контакты </a>
						<a
							class="text-base text-cyan-900 hover:text-red-800"
							href="https://vk.com/orbita_stroy"
							target="_blank"
						>
							VK
						</a>
					</nav>
					<div class="flex items-center md:ml-12">
						<a
							class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-900 px-4 py-1 text-base font-medium text-white shadow-lg shadow-gray-900/50 hover:bg-gray-800"
							href="/shop/cart"
							sveltekit:noscroll
						>
							<svg
								class="mr-1 h-5 w-5"
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
							Корзина (
							<div class="mx-1 text-red-500">{countLengthCart}</div>
							)
						</a>
					</div>
				</div>
			</div>
		</div>

		<MobileMenu />
	</div>

	<div class=" ">
		<!--    <div class="bg-gradient-to-r from-gray-200 via-slate-50 to-gray-200 pt-6 sm:pt-8 ">-->
		<!--    <div class="bg-hero-pattern pt-6 sm:pt-8 ">-->

		<div class="max-w-9xl mx-auto  px-4 sm:px-6 lg:px-8">
			<div class="mx-auto  text-center">
				<h2
					class="py-6 text-4xl font-extrabold lowercase text-cyan-900 antialiased first-letter:uppercase sm:text-5xl lg:text-6xl"
				>
					{$pageTitle}
				</h2>
				<img
					class="inset-0 mt-2 h-64 w-full  object-cover"
					src="https://storage.yandexcloud.net/brand-logo/orbita/main-bg.jpeg"
					alt="база строительных материалов"
				/>

				<p class="mt-3 text-xl text-cyan-900 sm:mt-4">
					При заказе через каталог стройматериалов на сайте для вас скидка 5%
				</p>
			</div>
			<!--            <p class="mt-4 text-2xl sm:text-3xl text-center font-extrabold text-slate-900">Каталог стройматериалов:</p>-->
		</div>
		<!-- <img
			class="inset-0 mt-4 h-48 w-full object-cover"
			src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614808114_100-p-fon-dlya-stroitelnogo-saita-119.jpg"
			alt="база строительных материалов"
		/> -->

		{#if $buttonVisibleCatalog}
			<div class="mt-4 bg-white pb-4 sm:pb-8">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
					<!--                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div>-->
					<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
						<div class="mx-auto w-full">
							<div class="rounded-lg bg-white shadow-md shadow-gray-700/50 lg:hidden">
								{#each head as { id, slug, name }}
									<a
										sveltekit:noscroll
										href="/shop/rubric/{slug}"
										on:click={() => buttonVisibleCatalog.update(invertToFalse)}
										class="flex flex-col border border-gray-200 bg-gradient-to-tr from-cyan-500 via-cyan-900 to-cyan-700 p-4 text-center hover:bg-gradient-to-bl sm:border-r sm:border-l"
									>
										<span
											class="order-2 text-sm font-medium leading-6 tracking-wider text-slate-50 antialiased"
										>
											{name}
										</span>
									</a>
								{/each}
							</div>

							<div
								class="hidden rounded-lg bg-white shadow-md shadow-gray-700/50 lg:block lg:grid lg:grid-cols-7"
							>
								{#each head as { id, slug, name }}
									<a
										sveltekit:noscroll
										href="/shop/rubric/{slug}"
										class="flex flex-col  border border-gray-200 p-4 text-center hover:border-red-800 hover:bg-gradient-to-l hover:from-red-900 hover:via-red-800 hover:to-red-900 sm:border-r sm:border-l {'/rubric/' +
											slug ===
										$page.url.pathname
											? 'bg-gradient-to-r from-red-900 via-red-800 to-red-900'
											: 'bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900'} "
									>
										<span
											class="delay-50 duration-50 order-2 text-sm font-medium leading-6 tracking-wider text-slate-50 transition ease-in-out hover:scale-110"
										>
											{name}
										</span>
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="mt-4 bg-white pb-4 sm:pb-8">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
					<!--                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div>-->
					<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
						<div class="mx-auto w-full ">
							<div
								on:click={changeButtonVisibleCatalog}
								class="rounded-md border border-gray-200 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 text-center shadow-md shadow-gray-700/50 hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-800 "
							>
								<p class="p-3">
									<span class="text-2xl font-medium tracking-wider text-white">
										Наш каталог стройматериалов
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<Search />
</header>
