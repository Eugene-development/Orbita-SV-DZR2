<script>
	export let mainTestimonials;
</script>

<div class="overflow-hidden bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-prose text-base lg:max-w-none">
			<h2 class="text-base font-semibold uppercase tracking-wide text-slate-600">
				Мебельная компания
			</h2>
			<p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-slate-800 sm:text-4xl">
				"Мос-Мебель"
			</p>
		</div>
		<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
			<div class="relative z-10">
				<div class="prose-main prose mx-auto text-gray-500 lg:max-w-none">
					<p>
						Компания «Мос-мебель» предлагает стильную и функциональные шкафы купе и кухонные
						гарнитуры, которые идеально впишутся в общую концепцию вашего интерьера. Каталог
						насчитывает более 2500 вариантов реализации ваших идей. Но если вы не нашли подходящее
						решение, то дизайнеры составят индивидуальный проект с учетом ваших требований и
						финансовых возможностей. Поэтому даже самый притязательный покупатель выберет для себя
						идеальный вариант. К вашим услугам бесплатный выезд замерщика.
					</p>
					<p>
						Все модели мебели изготавливаются из надежных, проверенных материалов, качественной
						фурнитуры, за счет чего прослужат долгое время, сохранив безупречный вид. Вашему
						вниманию кухонные гарнитуры по низкой цене и недорогие шкафы-купе для обустройства вашей
						квартиры, загородного дома, дачи или офиса.
					</p>
					<p>
						Надеемся вас обрадуют адекватные цены, высокий уровень обслуживания, оперативная
						доставка и услуги по установке мебели. Воплотите свои мечты об идеальном кухонном
						гарнитуре или шкафе-купе вместе с нашей компанией «Мос-Мебель».Наши сотрудники постоянно
						совершенствуют свои знания, отслеживают новые тенденции, чтобы предложить вам самый
						подходящий вариант. Так же у нас постоянно расширяется модельный ряд, внедряются свежие
						дизайнерские разработки и применяется креативный подход.
					</p>
					<h3>Преимущества покупки и заказа мебели в в нашей компании:</h3>
					<ul>
						<li>Большой выбор, который удовлетворит предпочтения каждого покупателя</li>
						<li>Возможность заказать изготовление мебели по индивидуальному размеру</li>
						<li>Производство на высокоточном европейском оборудовании</li>
						<li>Эргономичный дизайн, функциональность</li>
						<li>Разнообразие форм изделий</li>
						<li>Приемлемая цена</li>
					</ul>
				</div>
				<div class="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
					<div class="rounded-md shadow">
						<a
							href="#"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-900 px-5 py-3 text-base font-medium text-white "
						>
							Записаться на замер
						</a>
					</div>
				</div>
			</div>
			<div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
				<svg
					class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
				</svg>

				{#each mainTestimonials as { name, text, img }}
					<blockquote class="relative mb-16 rounded-lg bg-white shadow-lg">
						<div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8 ">
							<div class="relative mt-8 text-lg font-medium text-gray-700">
								<svg
									class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-slate-50"
									fill="currentColor"
									viewBox="0 0 32 32"
									aria-hidden="true"
								>
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
									/>
								</svg>
								<p class="relative">{text}</p>
							</div>
						</div>
						<div
							class="relative flex items-center rounded-b-lg bg-cyan-900 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10"
						>
							<div
								class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform"
							>
								<img
									class="bg-main h-12 w-12 rounded-full sm:h-20 sm:w-20"
									src={img}
									alt="фото клиента"
								/>
							</div>
							<div class="text-main relative ml-4 font-semibold leading-6 sm:ml-24 sm:pl-1">
								<p class="font-semibold text-white sm:inline">{name}</p>
							</div>
						</div>
					</blockquote>
				{/each}
			</div>
		</div>
	</div>
</div>
