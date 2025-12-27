// map nedir ? 
// Orijinal array bozulmaz Yeni array döner.
// map = “Her elemanı al, işle, yeni array oluştur.”

const numbers = [99, 89, 79, 75]

// Her sayıyı 2 ile çarp
const doubled = numbers.map(n => n * 2)
// Yukardaki kodun açılımı
function mapX (n) {
  return n * 2
}

console.log(doubled)  // [2, 4, 6, 8]
console.log(numbers)  // [1, 2, 3, 4] → bozulmadı

console.log("===============================================================")

const extra = numbers.map(x => x + 1)
console.log(extra)