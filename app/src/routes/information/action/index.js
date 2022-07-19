const actions = [
    {
        action: 'Утеплитель роклайт 50 мм',
        price: '704 рубля',
        description: 'Акция действует 16 и 17 июля',
        link: ''
    },
    {
        action: 'Утеплитель роклайт 100 мм',
        price: '1180 рублей',
        description: 'Акция действует 23 и 24 июля',
        link: 'fff'
    },
    {
        action: 'Пенопласт 25 плотности 100мм',
        price: '215 рублей',
        description: 'Предложение ограничено',
        link: 'fff'
    },
    {
        action: 'Плита ОСБ 9мм',
        price: '540 рублей',
        description: 'Предложение ограничено',
        link: 'fff'
    },
    {
        action: 'Доска',
        price: '16350 рублей за куб',
        description: 'Только наличный платёж',
        link: 'fff'
    },
]

export const get = () => {
    return {
        body: {
            actions,
        }
    }
}
