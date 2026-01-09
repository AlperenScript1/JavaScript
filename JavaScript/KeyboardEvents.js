// --- TEMEL KLAVYE OLAYLARI ---
// 1. keydown: Tuşa basıldığı an tetiklenir (En yaygın ve hızlı olanıdır).
window.addEventListener('keydown', (e) => {
    // console.log("Bir tuşa basıldı");
});

// 2. keyup: Parmak tuştan çekildiği an tetiklenir.
window.addEventListener('keyup', (e) => {
    // console.log("Tuş bırakıldı");
});

// 3. keypress: (Önerilmez) Tuşa basılı tutulduğunda çalışır ama modern JS'de keydown tercih edilir.


// --- TUŞLARI AYIRT ETME (Event Objesi Özellikleri) ---

window.addEventListener('keydown', (e) => {
    
    console.log(e.key);   // Tuşun adını verir: "a", "Enter", "ArrowUp", " " (Boşluk)
    console.log(e.code);  // Fiziksel tuş konumunu verir: "KeyA", "Enter", "Space"
    
    // --- ÖZEL TUŞ KONTROLLERİ (Boolean - True/False döner) ---
    
    if (e.ctrlKey)  console.log("Ctrl tuşuyla birlikte basıldı");
    if (e.shiftKey) console.log("Shift tuşuyla birlikte basıldı");
    if (e.altKey)   console.log("Alt tuşuyla birlikte basıldı");
    if (e.metaKey)  console.log("Windows veya Command tuşuyla basıldı");

    // --- ÖRNEK: Belirli bir tuşu yakalama ---
    
    if (e.key === "Enter") {
        console.log("Enter'a bastın, form gönderiliyor...");
    }

    if (e.code === "Space") {""
        console.log("Boşluk tuşuna basıldı, karakter zıpladı!");
    }
});

// --- YASAKLAMA / ENGELLEME ---

window.addEventListener('keydown', (e) => {
    // Örnek: F5 tuşuna basılmasını engelleyelim (Sayfa yenilenmez)
    if (e.key === "F5") {
        e.preventDefault(); 
        console.log("Sayfayı yenileyemezsin!");
    }
});