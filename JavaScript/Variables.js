// Eski artık kullanımı önerilmiyor. Tekrardan aynı ad ile tanımlayama izin verir.
var a = 10

// Var yerine gelen yeni yapı farklı değer atanabilir. Tekrardan aynı ad ile  tanımlanmaya izin vermez. fakat değişkenin tuttuğu değer değiştirebilir
let b = 10

// Özeldir genelde belirli yerlerde kullanılır (ID) gibi Tekrardan aynı isim ile tanımlanamaz veya tuttuğu veri değiştirilemez
const c = 10

// const object → referans sabit, içindeki property'ler değişebilir
const user = {
  name: "Alperen",
  age: 22,
  isAdmin: true
}