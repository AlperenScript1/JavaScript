// 1-) Bir Array oluştur ve sona 5 ekle.
const sayilar1 = [1,2,3,4]
sayilar1.push(5)
console.log(sayilar1)

// 2-) "react" değerini console’a yazdır.
const arr = ["js", "react", "node"]
console.log(arr[1])

// 3-) son elemanı length kullanarak yazdır.
const sayi = [10, 20, 30, 40] // tam olark ne istiyorsun onu anlamadım 
console.log(sayi[sayi.length - 1])

// -) Her elemanı 2 ile çarp ve yeni Array ekle 
const s1 = [1, 2, 3, 4]
const s2 = []


for(let i = 0; i < s1.length; i++){
  let carpilanDeger = s1[i]
    s2.push(carpilanDeger * 2)}
console.log(s2)

// 5-) 10’dan büyük olanları al
const sayilar2 = [3, 7, 12, 18, 21]
const buyukler = []
const kucukler = []

for(let i = 0; i < sayilar2.length; i++){
    alinanDeger = sayilar2[i]
    if( alinanDeger >= 10){
        console.log(alinanDeger + " 10'dan büyüktür!")
        kucukler.push(buyukler)
    }
    else{
        console.log(alinanDeger + " 10'dan küçüktür.")
        kucukler.push(kucukler)
    }
}

// 6-) "b" ve "c" yi al (slice kullan)
const abc1 = ["a", "b", "c", "d"]
console.log(abc1.slice(1,3))