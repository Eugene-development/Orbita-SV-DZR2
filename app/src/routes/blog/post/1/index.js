const textHTML = `
        <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden">
            <div class="max-w-max lg:max-w-7xl mx-auto">
                <div class="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div class="text-base max-w-prose lg:max-w-none">
                        <h2 class="leading-6 text-sky-600 font-semibold tracking-wide uppercase">Пост от 10 мая 2022</h2>
                        <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Покупка стройматериалов в начале сезона</h1>
                    </div>
                </div>
                <div class="relative">
                    <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                    </svg>
                    <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                    </svg>
                    <div class="relative bg-gradient-to-b from-white via-white to-gray-50 md:p-6">
                        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
                            <div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                <p>Большинство людей занимается строительными и ремонтными работами в теплое время года: с начала весны до середины осени. Пик строительства приходится на май-сентябрь. Именно в это время цена на материалы значительно возрастает, что вполне логично: увеличивается спрос – увеличивается стоимость.</p>
                                <p>Именно поэтому выгоднее всего покупать стройматериалы в начале сезона январе, феврале-марте. В зимнее время производители снижают цены на 20-40%, что помогает существенно сэкономить, особенно если вы закупаете товары в больших объёмах и количествах.</p>
                                <h3>Обратите внимание, на какие товары чаще всего бывают скидки в зимнее время:</h3>
                                <ul>
                                    <li>кирпич, газобетон, пенобетон и  поризованная керамика – материалы, которые чаще всего используются для возведения стен здания;</li>
                                    <li>облицовочные материалы и утеплители;</li>
                                    <li>кровельные материалы и водосточные системы, которые зимой стоят примерно на 30% дешевле;</li>
                                    <li>металлопластиковые окна, которые в холодное время года устанавливают редко, обходятся в два раза дешевле;</li>
                                    <li>материалы для внутренней отделки помещений: обои, плитка, ламинат, декоративный камень и другие. </li>
                                </ul>
                            </div>
                            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                <p>Даже если в зимнее время не наблюдается значительных скидок на нужные товары, цены на многие стройматериалы зимой держатся на уровне прошлого года, увеличиваясь в середине весны. Зимой покупать их выгодно, тем более, когда во многих компаниях после осуществления оплаты товар может на протяжении нескольких месяцев находиться на складе в оптимальных для хранения условиях.</p>
                                <p>Также стоит отметить, что, кроме экономии на стройматериалах, в зимнее время вы можете потратить меньше денежных средств на их разгрузку. В феврале-марте услуги автокрана и грузчиков обойдутся на 15-20% дешевле, чем летом.</p>
                                <p>Еще одно преимуществом покупки материалов в начале сезона – отсутствие очередей в строительных магазинах, а также быстрая доставка, если вы заказываете товары в интернете. </p>
                                <h3>Сам себе хозяин</h3>
                                <p>Таким образом, планируя ремонтные или строительные работы на летнее время, задумайтесь о приобретении материалов уже сейчас, что поможет существенно сэкономить денежные средства и избавит от переплаты за услуги доставки и разгрузки</p>
        
                            </div>
                        </div>
                        <div class="mt-8 inline-flex rounded-md shadow">
                            <a href="/blog" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"> Вернуться в блог </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

const contentArticle_v2 = {
    textHTML,
};


export const get = () => {
    return {
        body: {
            contentArticle_v2
        }
    }
}
