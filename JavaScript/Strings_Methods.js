// Javascript strings primitive ve immutable'dır.
// Tüm string metodları yeni bir string döndürür, orijinali değiştirmez.

// String length → string uzunluğu
"Alperen".length  // 7

// charAt() → verilen index’teki karakter
"Alperen".charAt(0)  // "A"

// charCodeAt() → karakterin UTF-16 kodu
"A".charCodeAt(0)  // 65

// codePointAt() → Unicode code point (emoji gibi karakterler için)
"🏎️".codePointAt(0)

// concat() → string birleştirir
"Ali".concat(" ", "Veli")  // "Ali Veli"

// at() → index’teki karakter (negatif index destekler)
"Alperen".at(-1)  // "n"

// [] → index ile karakter alma
"Alperen"[1]  // "l"

// slice() → string parçası alır (negatif index olur)
"Alperen".slice(0, 3)  // "Alp"

// substring() → string parçası alır (negatif index YOK)
"Alperen".substring(0, 3)  // "Alp"

// substr() → başlangıç + uzunluk (DEPRECATED, KULLANMA)
"Alperen".substr(0, 3)  // "Alp"

// toUpperCase() → büyük harfe çevirir
"alperen".toUpperCase()  // "ALPEREN"

// toLowerCase() → küçük harfe çevirir
"ALPEREN".toLowerCase()  // "alperen"

// isWellFormed() → Unicode yapısı bozuk mu kontrol eder
"test".isWellFormed()  // true

// toWellFormed() → bozuk Unicode karakterleri düzeltir
"test".toWellFormed()

// trim() → baştaki ve sondaki boşlukları siler
"  test  ".trim()  // "test"

// trimStart() → baştaki boşlukları siler
"  test".trimStart()

// trimEnd() → sondaki boşlukları siler
"test  ".trimEnd()

// padStart() → başına karakter ekler
"5".padStart(3, "0")  // "005"

// padEnd() → sonuna karakter ekler
"5".padEnd(3, "0")  // "500"

// repeat() → string’i tekrarlar
"ha".repeat(3)  // "hahaha"

// replace() → ilk eşleşeni değiştirir
"js js".replace("js", "JS")  // "JS js"

// replaceAll() → tüm eşleşenleri değiştirir
"js js".replaceAll("js", "JS")  // "JS JS"

// split() → string’i array’e çevirir
"Ali,Veli,Ayşe".split(",")  // ["Ali", "Veli", "Ayşe"]

// i = döngüdeki sıra numarası
data.splice(i, 1);