data = [1,1,2,1,0,1,0,1,1,1,1,5,2,1,3, ,1 , ,11 ,2 , ,]

console.log("İlk dizi: " + data)

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element != 1){
        console.log("!")
        data[i] = 1
    }
}
console.log("İlk dizi: " + data)