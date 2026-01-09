//'Ternary Operator' Kısa bir if-else yapısıdır. Tek satırda koşula göre değer döndürür.
//  kosul ? dogruysa : yanlissa;

//Örnekler: 

let yas = 20;

let sonuc = (yas >= 18) ? "Reşit" : "Reşit değil";
// yas 18 veya büyükse "Reşit", değilse "Reşit değil"
console.log(sonuc);

//Func içinde kullanımı:

function tekMiCiftMi(sayi) {
    return (sayi % 2 === 0) ? "Çift" : "Tek";
}

console.log(tekMiCiftMi(7)); // Tek

//Değişken doğrulama atama:

let girisYapildi = true;

let durum = girisYapildi ? "Hoş geldin" : "Giriş yap";
// true ise "Hoş geldin", false ise "Giriş yap"