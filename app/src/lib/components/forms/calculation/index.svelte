<script>
    import { formCalculation } from "../../../../stores";
    import { useVisible } from "$lib/use/functions/visible";

    import axios from "axios";

    const { invert } = useVisible;

    const changeVisibleFormCalculation = () => formCalculation.update(invert)//Сеттер
    let visibleFormCalculation;
    formCalculation.subscribe(value => visibleFormCalculation = value);//Геттер


</script>
{#if (visibleFormCalculation)}
    <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"></div>

    <!--
      Command palette, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">

        <div class="h-7 p-4 absolute right-0">
            <button on:click={ changeVisibleFormCalculation } type="button" class=" text-gray-400 hover:text-gray-500">
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <div class=" h-full  flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
            <div class="flex-none p-6 text-center">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80" alt="" class="mx-auto h-16 w-16 rounded-full">
                <h2 class="mt-3 font-semibold text-gray-900">Татьяна Демидова</h2>
                <p class="text-sm leading-6 text-gray-500">Ваш персональный менеджер</p>
            </div>
            <div class="flex flex-auto flex-col justify-between p-6">
                <div class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600">
                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Тип ремонта</label>
                    <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
                </div>
                <div class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600">
                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Примерная площадь</label>
                    <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" >
                </div>
                <div class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600">
                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Нужен демонтаж?</label>
                    <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" >
                </div>
                <div class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600">
                    <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Желаемые работы</label>
                    <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" >
                </div>

                <button type="button" class="mt-6 w-full rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">Отправить на обсчёт</button>
            </div>
        </div>

        <!-- Empty state, show/hide based on command palette state -->
        <div class="py-8 px-6 text-center text-sm sm:px-14">
            <!-- Heroicon name: outline/users -->
            <img class="h-16 w-auto mx-auto" src="/logo-header.png" alt="logo">
            <p class="mt-4 font-semibold text-gray-900">Компания по ремонту помещений</p>
            <p class="mt-2 text-gray-500">Мы рады сотрудничеству с вами.</p>
        </div>
    </div>
</div>
{/if}
