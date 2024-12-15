const ürünler = [
    {
        id:1,
        ürün_ad:"Tisört",
        ürün_fiyat:400
    },
    {
        id:2,
        ürün_ad:"Pantolon",
        ürün_fiyat:900
    },
    {
        id:3,
        ürün_ad:"Mont",
        ürün_fiyat:1500
    }
    
];

const indirimOrani = Number(prompt("İndirim oranını giriniz"));

for (const ürün of ürünler) {
    
     const ürünİndirim = ürün.ürün_fiyat * (100-indirimOrani)/100;
     console.log(`${ürün.ürün_ad} ürününün indirimli fiyatı ${ürünİndirim} TL`);
}