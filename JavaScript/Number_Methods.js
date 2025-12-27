// Number → primitive sayılar için kullanılır
// Number metodları genelde string → number dönüşümleri ve formatlama içindir

// Number.isInteger() → tam sayı mı?
Number.isInteger(10)     // true
Number.isInteger(10.5)   // false

// Number.isNaN() → NaN mı?
Number.isNaN(NaN)        // true
Number.isNaN("NaN")      // false

// Number.isFinite() → sonlu sayı mı?
Number.isFinite(100)     // true
Number.isFinite(Infinity)// false

// Number.parseInt() → string’i integer’a çevirir
Number.parseInt("10")    // 10
Number.parseInt("10px")  // 10

// Number.parseFloat() → string’i ondalık sayıya çevirir
Number.parseFloat("10.5") // 10.5

// toFixed() → ondalık basamak sınırlar (string döner)
(10.567).toFixed(2)      // "10.57"

// toPrecision() → toplam basamak sayısı
(10.567).toPrecision(3) // "10.6"

// toString() → number → string
(10).toString()          // "10"

// valueOf() → primitive değerini döner
(10).valueOf()           // 10