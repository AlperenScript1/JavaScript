let sayilar = [12, 5, 45, 8, 99, 23, 54, 7];
let enBuyuk = 0

for (let i = 0; i < sayilar.length; i++) {
    const element = sayilar[i];
    if (element > enBuyuk)
    {
        enBuyuk = element
    }
}
console.log(enBuyuk)