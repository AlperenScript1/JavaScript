data = [0, 5, 1, 1, 0, 2, 2, 0, 9, 1, 4, 3, 0]
console.log(data)
let sayac = 0
const bul = 0

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element == bul){
         console.log("")
         sayac++;

    }
    else{
        console.log()
    }
}
console.log("Toplam: " + sayac)