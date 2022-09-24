const actions = [
	// {
	//     action: 'Штукатурная смесь "кнауф ротбанд" белая (30 кг)',
	//     price: '440 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	// },
	{
		action: 'Утеплитель технониколь роклайт 1200*600*50',
		price: '752 рубля',
		description: 'Только в эти выходные',
		link: '/shop/product/uteplitel-texnonikol-roklait-120060050'
	},
	{
		action: 'Утеплитель технониколь роклайт 1200*600*100',
		price: '1190 рубля',
		description: 'Только в эти выходные',
		link: '/shop/product/uteplitel-texnonikol-roklait-1200600100'
	},
	// {
	//     action: 'Штукатурная смесь "ек" tg 40 (30 кг)',
	//     price: '444 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg'
	// },
	{
		action: 'Штукатурная смесь "кнауф ротбанд" белая (30 кг)',
		price: '440 рублей',
		description: 'Предложение ограничено',
		link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
	},
	{
		action: 'Эпп xps30-200 техноплекс 1180*580*50-l',
		price: '265 рублей',
		description: 'Предложение ограничено',
		link: '/shop/product/epp-xps30-200-texnopleks-118058050-l'
	},
	{
		action: 'Эпп xps30-200 техноплекс 1180*580*20-l',
		price: '130 рублей',
		description: 'Предложение ограничено',
		link: '/shop/product/epp-xps30-200-texnopleks-118058050-l'
	},
	{
		action: 'Гвлв "кнауф" 10 мм (1200*2500)',
		price: '672 рублей',
		description: 'Предложение ограничено',
		link: '/shop/product/gvlv-knauf-10-mm-12002500'
	},
	// {
	//     action: 'Пена пистолетная kudo proff 65+ всесезон',
	//     price: '420 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/pena-pistoletnaya-kudo-proff-65-vsesezon'
	// },
	// {
	//     action: 'Утеплитель изобокс 50 мм',
	//     price: '825 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/uteplitel-izoboks-50-mm'
	// },
	// {
	//     action: 'Утеплитель изобокс 100 мм',
	//     price: '890 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/uteplitel-izoboks-100mm'
	// },
	// {
	//     action: 'Утеплитель Техноблок 1200х600х100',
	//     price: '1290 рублей',
	//     description: 'Только в эти выходные',
	//     link: '/shop/product/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
	// },
	// {
	//     action: 'Утеплитель Техноблок 1200х600х50',
	//     price: '1290 рублей',
	//     description: 'Только в эти выходные',
	//     link: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3'
	// },
	// {
	//     action: 'Утеплитель роклайт 100 мм',
	//     price: '1180 рублей',
	//     description: 'Акция действует 23 и 24 июля',
	//     link: '/shop/products/mineralno-bazaltovye-utepliteli'
	// },
	// {
	//     action: 'Пенопласт 25 плотности 100мм',
	//     price: '215 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/products/penoplast'
	// },
	// {
	//     action: 'Плита ОСБ 9мм',
	//     price: '520 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya'
	// },
	// {
	//     action: 'Клей для плитки "Вебер ветонит" изи фикс (25 кг)',
	//     price: '330 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/klei-dlya-plitki-veber-vetonit-izi-fiks-25-kg'
	// },
	// {
	//     action: 'Софит-izol в (пароизоляция) 1,6м (35 м2)',
	//     price: '635 рублей',
	//     description: 'Только в эти выходные',
	//     link: '/shop/product/sofit-izol-v-paroizolyaciya-16m-35-m2'
	// },
	// {
	//     action: 'Софит-izol d (гидро-пароизоляция) 1,5м (70 м2)',
	//     price: '635 рублей',
	//     description: 'Только в эти выходные',
	//     link: '/shop/product/sofit-izol-d-gidro-paroizolyaciya-15m-70-m2'
	// },
	{
		action: 'Штукатурная смесь "ек" tg 40 (30 кг)',
		price: '444 рублей',
		description: 'Предложение ограничено',
		link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg'
	}
	// {
	//     action: 'Пена пистолетная "kudo home 65" всесезонная',
	//     price: '410 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya'
	// },
	// {
	//     action: 'Пена монтажная kudo',
	//     price: '330 рублей',
	//     description: 'Предложение ограничено',
	//     link: '/shop/product/pena-montaznaya-kudo'
	// },
	// {
	//     action: 'Доска',
	//     price: '16350 рублей за куб',
	//     description: 'Только наличный платёж',
	//     link: '/shop/products/doska-obreznaya-obrabotannaya'
	// },
];

export const get = () => {
	return {
		body: {
			actions
		}
	};
};
