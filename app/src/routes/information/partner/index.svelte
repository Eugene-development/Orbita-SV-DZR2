<script>
    import { pageTitle } from '$stores/store.js';

    pageTitle.update(() => 'Партнёрство');
</script>
<svelte:head>
    <title>Орбита строй || Партнерство</title>
    <meta name="description" content="Партнёрство с компанией 'Орбита строй'">
</svelte:head>


<div class="mx-auto  py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-5 mb-12 sm:space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Партнёрская программа</h2>
        <p class="text-xl text-gray-500">Наши друзья, работающие в сфере строительства, а также ремонта и отделки помещений. Это проверенные компании, поэтому размещаем о них информацию на нашем сайте абсолютно бесплатно.</p>
    </div>

    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="lg:col-span-2">
            <div role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                <div class="sm:py-8">
                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3">
                            <img class="shadow-lg rounded-lg bg-gray-50 p-2" src="https://static.tildacdn.com/tild3134-6661-4537-b031-656230633864/Flat_2.svg" alt="">
                        </div>
                        <div class="sm:col-span-2">
                            <div class="space-y-4">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h2>Ремонт помещений</h2>
                                    <h3 class="text-3xl">"ГОСТ Ремонт"</h3>
                                </div>
                                <div class="text-lg">
                                    <p class="text-gray-500">Полный или частичный ремонт квартир и домов в вашем городе за разумные деньги и с достойным результатом.</p>
                                </div>
                                <div role="list" class="flex space-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p class="hover:text-gray-500">+7 (831) 423-23-89
                                        <span class="sr-only">Phone</span>
                                    </p>
                                </div>
                                <div role="list" class="flex space-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <a href="https://gost-remont.com/" class="hover:text-gray-500" target="_blank">Перейти на сайт компании
                                        <span class="sr-only">Site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- More people... -->
            </div>
        </div>
        <hr>
        <div class="lg:col-span-2">
            <div role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                <div class="sm:py-8">
                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div class="aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-3">
                            <img class="shadow-lg rounded-lg bg-gray-50 p-2" src="http://remont-stroynn.ru/wp-content/uploads/2017/01/logotip.png" alt="">
                        </div>
                        <div class="sm:col-span-2">
                            <div class="space-y-4">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <h2>Ремонт помещений</h2>
                                    <h3 class="text-3xl">"Ремонт Строй"</h3>
                                </div>
                                <div class="text-lg">
                                    <p class="text-gray-500">Профессиональный ремонт квартир в Нижнем Новгороде по адекватной стоимости.</p>
                                </div>
                                <div role="list" class="flex space-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p class="hover:text-gray-500">+7 (831) 423-46-73
                                        <span class="sr-only">Phone</span>
                                    </p>
                                </div>
                                <div role="list" class="flex space-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <a href="http://remont-stroynn.ru/" class="hover:text-gray-500" target="_blank">Перейти на сайт компании
                                        <span class="sr-only">Site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- More people... -->
            </div>
        </div>
        <hr>
    </div>
</div>
