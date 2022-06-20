<script context="module">
    import {pageTitle} from "$stores/store.js";

    export const load = async ({ fetch, params, url }) => {
        const idCategory = url.searchParams.get("id");
        const slugCategory = params.slug;

        let res;
        res = await fetch(`/api/catalog/productsSLUG/${slugCategory}`)
        // if (idCategory) {
        //   res = await fetch(`/api/catalog/productsID/${idCategory}`)
        // } else {
        //   res = await fetch(`/api/catalog/productsSLUG/${slugCategory}`)
        // }

        const resJSON = await res.json();
        const data = resJSON.products.data[0];
        const nameCategory = data.name;
        const products = data.product;
        const pathAWS = resJSON.pathAWS;

        const seoTitle = data.seo ? data.seo.title : "Скидки и акции";
        const seoDescription = data.seo ? data.seo.description : "Продукция от компании 'Орбита-Строй'";
        const title = "Стройматериалы" + " || " + nameCategory + " в Нижнем Новгороде || " + seoTitle;
        const description = nameCategory + " в Нижнем Новгороде и области. " + seoDescription;

        // pageTitle.update(() => nameCategory);

        return {
            props: {
                title,
                description,
                nameCategory,
                products,
                pathAWS
            }
        };
    };
</script>

<script>
    import axios from "axios";
    import pkg from 'lodash';
    const { concat } = pkg;
    import { lengthCart, InCart } from "$stores/store.js";
    import { useReturn } from "$lib/functions/return";
    import { browser } from "$app/env";
    import { onMount } from "svelte";

    const { currentValue } = useReturn;

    export let title;
    export let description;
    export let nameCategory;
    export let products;
    export let pathAWS;

    const sendToCart = async (id) => {
        if (localStorage.getItem("inCart") === null) {
            localStorage.setItem("inCart", JSON.stringify([id]));
        } else {
            const itemsCart = JSON.parse(localStorage.getItem("inCart"));
            const newItemsCart = concat(itemsCart, id);
            localStorage.setItem("inCart", JSON.stringify(newItemsCart));
        }
        const productsInCart = JSON.parse(localStorage.getItem("inCart"));
        const visibleLengthCart = productsInCart.length;
        lengthCart.update(() => currentValue(visibleLengthCart));
        InCart.update(() => productsInCart);


        const url = `/store-cart`;
        const payloadCart = {
            product_id: id,
            sessionUser: localStorage.getItem("dataS")
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
        if (browser && localStorage.getItem("inCart") !== null) {
            idProductsInCart = JSON.parse(browser && localStorage.getItem("inCart"));
        }
    });
    InCart.subscribe(value => idProductsInCart = value);



</script>

<svelte:head>
    <title>{title}</title>
    <meta content="{description}" name="description">
</svelte:head>



<div class="bg-gradient-to-b from-white  to-slate-50">
    <!--  <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-md shadow-slate-200/50 mb-4">-->
    <!--    <div class="flex flex-col text-center w-full">-->
    <!--      <h1 class=" text-5xl font-medium title-font text-slate-900 lowercase first-letter:uppercase">{ nameCategory } в Нижнем Новгороде</h1>-->
    <!--    </div>-->
    <!--  </div>-->



    <div class="p-8">

        <div class="mb-8 text-center">
            <h3 class="text-2xl  leading-6 font-medium text-gray-900">{ nameCategory } в Нижнем Новгороде</h3>
            <p class="mt-2  text-base text-gray-500 ">В данной категории вы можете купить <span class="lowercase">{ nameCategory }</span> по низким ценам с доставкой или самовывозом</p>
        </div>

        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {#each products as { id, name, slug, size, unit, image }}
                <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg shadow-slate-200/50 divide-y divide-slate-200 border-2 border-slate-100 ring-offset-1 ring-1 ring-slate-100">
                    <a sveltekit:prefetch sveltekit:noscroll href="/shop/product/{slug}">
                        <div class="flex-1 flex flex-col p-8">

                            {#if (image[0])}
                                <img src="{pathAWS}{image[0].filename}"
                                     alt="product"
                                     class="w-32 h-32 object-contain flex-shrink-0 mx-auto">
                            {/if}
                            <h3 class="mt-6 text-slate-900 text-sm font-medium h-10 lowercase first-letter:uppercase">{ name }</h3>
                            <dl class="mt-1 flex-grow flex flex-col justify-between">
                                <dt class="sr-only">Title</dt>
                                <dt class="sr-only">Product</dt>
                                <dd class="mt-4">
                  <span
                          class="px-3 py-1.5 text-slate-100 text-base font-medium bg-indigo-800 rounded-full">{ size[0].price.price }
                      р/{ unit }</span>
                                </dd>
                            </dl>
                        </div>
                    </a>
                    <div>
                        <div class="-mt-px flex divide-x divide-slate-200">
                            <div class="w-0 flex-1 flex">
                                {#if !(idProductsInCart).some(arrVal => id === arrVal)}
                                    <button
                                            on:click|preventDefault|once={sendToCart(id)}
                                            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-slate-700 font-medium border border-transparent rounded-bl-lg hover:text-slate-500">
                                        <svg class="w-5 h-5 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        </svg>
                                        <span class="ml-3">В корзину</span>
                                    </button>
                                {:else }
                                    <button
                                            class="focus:outline-none relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-slate-50 font-medium border border-transparent rounded-bl-lg hover:text-slate-100 bg-indigo-800">
                                        <svg class="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        </svg>
                                        <span class="ml-3">В корзине</span>
                                    </button>
                                {/if}
                            </div>
                            <div class="-ml-px w-0 flex-1 flex">
                                <!--                        <div v-if="productsInCart.some(arrVal => productID.id === arrVal)" class="-ml-px w-0 flex-1 flex">-->
                                <!--                <div class="relative mx-8 flex-1 inline-flex items-center justify-center text-sm text-slate-700 font-medium border  border-transparent rounded-bl-lg hover:text-slate-500">-->
                                <!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
                                <!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />-->
                                <!--                  </svg>-->

                                <!--                    <div class="mt-1 mx-4">-->
                                <!--                      <input type="email" name="email" id="email" class="h-6 shadow-sm focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-slate-300 rounded-md text-center" placeholder="1">-->
                                <!--                    </div>-->

                                <!--                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" >-->
                                <!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />-->
                                <!--                  </svg>-->
                                <!--                </div>-->
                                <a sveltekit:prefetch sveltekit:noscroll href="/shop/product/{slug}"
                                   class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-slate-700 font-medium border  border-transparent rounded-bl-lg hover:text-slate-500">
                                    <svg class="w-5 h-5 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" />
                                        <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </svg>
                                    <span class="ml-3">Подробнее</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
