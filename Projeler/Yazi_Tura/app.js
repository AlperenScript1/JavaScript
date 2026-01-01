const randomSayi = () =>{
    let rastgeleSayi = Math.floor(Math.random() * 100) + 1;
    console.log(rastgeleSayi)

    if (rastgeleSayi >= 50){
        console.log(rastgeleSayi + " Tura")
        document.getElementById("sonucText").innerText = "Tura geldi"
    }
    else{
        console.log(rastgeleSayi + " Yazı")
        document.getElementById("sonucText").innerText = "Yazı geldi"
    }
} 