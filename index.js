let products = [
    {
        title: "Mercedes-Benz E-Class",
        price: "3 000 000 KGS",
        image: "https://avatars.mds.yandex.net/get-verba/997355/2a00000187e6a56fc2d2c95326c2b0135d3c/cattouchret"
    },
    {
        title: "iphone 15",
        price: "74 990KGS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAN-qdPenRpybH-Gue_yWeU0v17qWNg1qlIw&s"
    },
    {
        title: "Mercedes-Benz S-Class",
        price: "5 000 000 KGS",
        image: "https://avatars.mds.yandex.net/get-verba/1540742/2a0000018f715b68b3fcffcbff4119bac587/1200x900"
    },
    {
        title: "Другой транспорт",
        price: "80 000KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/b0/4e/64/drugoj-transport-id-46193926-845600633.webp"
    },
    {
        title: "Weltmeister EX5, 2020 г., 236000...",
        price: "717 090 KGS",
        image: "https://img5.lalafo.com/i/posters/original/de/8e/2f/zany-keldi-realnyj-probegi-236-min-id-49491053-845600677.jpeg"
    },
    {
        title: "2 комнаты, Собственник, Без по...",
        price: "60 000 KGS",
        image: "https://img5.lalafo.com/i/posters/original/2d/ea/7e/sdaetsa-2-h-komnatnaa-kvartira-id-57051137-845600626.jpeg"
    },
    {
        title: "Планшет, Apple, память 256 ГБ",
        price: "78 000 KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/4c/37/28/apple-ipad-pro-m4-id-46192638-845600279.webp"
    },
    {
        title: "Средство для похудения, Fit-90,...",
        price: "1 100 KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/f8/76/4b/sredstva-dla-pohudenia-id-62902507-841447033.webp"
    },
    {
        title: "Вентилятор Toyota 1999 г., Б/у,",
        price: "1 500 KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/e4/68/35/ventilator-toyota-1999-g-bu-original-aponia-id-91222901-826805017.webp"
    },
    {
        title: "Toyota Camry: 2004 г., 2.4 л, Автоматические, Бензин",
        price: "Договорная",
        image: "https://img5.lalafo.com/i/posters/original_webp/48/0a/43/prodaetsa-id-49466592-845600411.webp"
    },
    {
        title: "Шампунь HYMEYS с корнем женьшеня – бережный уход и...",
        price: "1 200 KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/bb/07/cf/sampun-hymeys-s-kornem-zensena-id-50693754-845600271.webp"
    },
    {
        title: "Коляска, цвет - Серебристый, Новый",
        price: "4 000 KGS",
        image: "https://img5.lalafo.com/i/posters/original_webp/85/cb/2f/novaa-ocen-legkaa-i-kompaktnaa-id-53643052-845600018.webp"
    },
]

let box = document.getElementById("box")
let input = document.getElementById("search")
let sendbtn = document.getElementById("btn")

function ShowProdact (list) {
    container.innerHTML = list.map((item) => {
        return (
            `<div id = "card">
                <img src="${item.image}"/>
                    <div class = "TEXT"><h3>${item.title}</h3>
                    <p>${item.price}</p></div>
                <button>Buy</button>    
            </div>
            `
        )
    }).join("")

}

ShowProdact(products)

function filterproduct() {
    let text1 = input.value.toLowerCase()

    const filtered = products.filter(item => item.title.toLowerCase().includes(text1))

    ShowProdact(filtered)
}

btn.onclick = filterproduct