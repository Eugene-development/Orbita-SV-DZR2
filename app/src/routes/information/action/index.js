const actions = [
    {
        action: 'Штукатурная смесь "кнауф ротбанд" белая (30 кг)',
        price: '440 рублей',
        description: 'Предложение ограничено',
        link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg'
    },
    {
        action: 'Утеплитель технониколь роклайт 1200*600*50',
        price: '704 рубля',
        description: 'Предложение ограничено',
        link: '/shop/product/uteplitel-texnonikol-roklait-120060050'
    },
    {
        action: 'Штукатурная смесь "ек" tg 40 (30 кг)',
        price: '420 рублей',
        description: 'Предложение ограничено',
        link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg'
    },
    {
        action: 'Эпп xps30-200 техноплекс 1180*580*50-l',
        price: '256 рублей',
        description: 'Предложение ограничено',
        link: '/shop/product/epp-xps30-200-texnopleks-118058050-l'
    },
    {
        action: 'Пена пистолетная kudo proff 65+ всесезон',
        price: '420 рублей',
        description: 'Предложение ограничено',
        link: '/shop/product/pena-pistoletnaya-kudo-proff-65-vsesezon'
    },
    // {
    //     action: 'Утеплитель изобокс 50 мм',
    //     price: '905 рублей',
    //     description: 'Предложение ограничено',
    //     link: '/shop/product/uteplitel-izoboks-50-mm'
    // },
    // {
    //     action: 'Утеплитель изобокс 100 мм',
    //     price: '945 рублей',
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
    //     price: '510 рублей',
    //     description: 'Только в эти выходные',
    //     link: '/shop/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya'
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
    // {
    //     action: 'Штукатурная смесь "ек" tg 40 (30 кг)',
    //     price: '420 рублей',
    //     description: 'Предложение ограничено',
    //     link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg'
    // },
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
]

export const get = () => {
    return {
        body: {
            actions,
        }
    }
}
