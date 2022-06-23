<script>
    import { useHead} from "../../../content/index.js";
    import {buttonVisibleCatalog, mobileMenu} from '$stores/store.js';
    import { useVisible } from "$lib/functions/visible";

    const { head, information } = useHead;
    const { left: leftInfo, right: rightInfo } = information[0];
    const { invert, invertToFalse } = useVisible;
    const handleMenu = () => {
        mobileMenu.update(invert);
        buttonVisibleCatalog.update(invertToFalse);
    }

    let visibleMobileMenu;
    mobileMenu.subscribe(value => visibleMobileMenu = value);
</script>

<!--
  Mobile menu, show/hide based on mobile menu state.

  Entering: "duration-200 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
-->
{#if (visibleMobileMenu)}
<div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
                <div>
                    <img alt="Workflow" class="h-8 w-auto"
                         src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png">
                </div>
                <div class="-mr-2">
                    <button on:click={ handleMenu }  type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="mt-6 sm:mt-8">
                <nav>
                    <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        <a on:click="{ handleMenu }" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50" href="/">
                            <div
                              class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <!-- Heroicon name: outline/chart-bar -->
                                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" />
                                </svg>
                            </div>
                            <div class="ml-4 text-base font-medium text-gray-900">Главная</div>
                        </a>

                        <a on:click={ handleMenu } class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50" href="/about">
                            <div
                              class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <!-- Heroicon name: outline/cursor-click -->
                                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" />
                                </svg>
                            </div>
                            <div class="ml-4 text-base font-medium text-gray-900">Компания</div>
                        </a>

                        <a on:click={ handleMenu } class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50" href="/contact">
                            <div
                              class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <!-- Heroicon name: outline/shield-check -->
                                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" />
                                </svg>
                            </div>
                            <div class="ml-4 text-base font-medium text-gray-900">Контакты</div>
                        </a>

                        <a on:click={ handleMenu } class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                           href="https://vk.com/orbita_stroy">
                            <div
                              class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <!-- Heroicon name: outline/view-grid -->
                                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" />
                                </svg>
                            </div>
                            <div class="ml-4 text-base font-medium text-gray-900">VK</div>
                        </a>
                    </div>
                </nav>
            </div>
        </div>

        <div class="py-5 px-5">
            <div class="mb-5 text-2xl">
                <span class="font-medium text-indigo-600 hover:text-indigo-500">Информационные материалы:</span>
            </div>

            <div class="grid grid-cols-2 gap-4">
                {#each leftInfo as { href, displayName }}
                    <a on:click={ handleMenu } href="{href}" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"> {displayName} </a>
                {/each}
                {#each rightInfo as { href, displayName }}
                    <a on:click={ handleMenu } href="{href}" class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"> {displayName} </a>
                {/each}
            </div>
            <div class="mt-6">
                <a on:click={ handleMenu } href="/blog" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Наш Блог </a>
            </div>
        </div>
    </div>
</div>
    {/if}
