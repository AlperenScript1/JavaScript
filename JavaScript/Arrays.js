const arr = [1, 2, 3, 4]
arr[0] // 1
arr.length // 4

arr.push(5)    // sona ekler
arr.pop()      // sondan siler
arr.unshift(0)// başa ekler
arr.shift()   // baştan siler




for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}


for (const item of arr) {
  console.log(item)
}


// Yeni array döner
// Orijinal bozulmaz
const doubled = arr.map(n => n * 2)


const dizi = ["Elma", "Armut", "Muz"];

// Dizinin içindeki toplam eleman sayısını verir (C#'taki Count gibi).
dizi.length;

// Diziyi aralarına virgül koyarak düz bir metne (string) çevirir.
dizi.toString();

// Belirtilen indeksteki elemanı getirir (eksi değer verirsen sondan geriye sayar).
dizi.at(1);

// Elemanları birleştirip metne çevirir, aradaki ayracı ("-", "/", " ") sen seçersin.
dizi.join(" - ");

// Dizinin en sonundaki elemanı tamamen siler ve silinen o elemanı sana verir.
dizi.pop();

// Dizinin en sonuna yeni bir eleman (veya elemanlar) ekler.
dizi.push("Çilek");

// Dizinin en başındaki (0. indeks) elemanı siler.
dizi.shift();

// Dizinin en başına (0. indekse) yeni bir eleman ekler.
dizi.unshift("Vişne");

// Bir değişkenin dizi olup olmadığını kontrol eder, true veya false döner.
Array.isArray(dizi);

// Belirtilen indeksi siler ama yeri boş (undefined) kalır; dizinin boyutu değişmez.
delete dizi[0];

// Mevcut diziyi başka dizilerle birleştirip sana yepyeni bir dizi verir.
dizi.concat(["Ayva", "Erik"]);

// Dizi içindeki bir bölümü, yine aynı dizi içindeki başka bir yere kopyalar.
dizi.copyWithin(0, 2);

// İç içe geçmiş dizileri (örneğin [[1,2],3]) tek bir düz dizi ([1,2,3]) yapar.
dizi.flat();

// Dizinin belirli bir aralığını kopyalayıp yeni bir dizi olarak sana verir.
dizi.slice(1, 3);

// Diziden eleman siler, ekler veya değiştirir (Orijinal diziyi kalıcı olarak değiştirir).
dizi.splice(1, 1, "Kivi");

// Splice ile aynı işi yapar ama orijinal diziyi bozmaz, sana yeni bir kopya döner.
dizi.toSpliced(1, 1);