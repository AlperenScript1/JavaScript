// --- TEMEL TIKLAMA OLAYLARI ---
element.addEventListener('click', (e) => {});      // Sol tıklandığında (En çok kullanılan)
element.addEventListener('dblclick', (e) => {});   // Çift tıklandığında
element.addEventListener('contextmenu', (e) => {   // Sağ tıklandığında
    e.preventDefault();                            // Tarayıcı menüsünü engellemek için kullanılır
});

// --- BASMA VE BIRAKMA ---

element.addEventListener('mousedown', (e) => {});   // Fare tuşuna basıldığı an (Tıklama tamamlanmadan)
element.addEventListener('mouseup', (e) => {});     // Basılı tutulan tuş bırakıldığı an

// --- HAREKET VE ÜZERİNE GELME ---

element.addEventListener('mouseenter', (e) => {});  // Fare öğenin üzerine girdiğinde (Sadece 1 kez)
element.addEventListener('mouseleave', (e) => {});  // Fare öğeden dışarı çıktığında (Sadece 1 kez)

element.addEventListener('mouseover', (e) => {});   // Fare öğeye veya alt öğelerine girdiğinde
element.addEventListener('mouseout', (e) => {});    // Fare öğeden veya alt öğelerinden çıktığında

element.addEventListener('mousemove', (e) => {      // Fare öğe üzerinde hareket ettiği her milisaniye 
    // e.clientX ve e.clientY ile koordinatları alabilirsin
});

// --- TEKERLEK (SCROLL) ---

element.addEventListener('wheel', (e) => {         // Fare tekerleği döndürüldüğünde
    // e.deltaY > 0 ise aşağı, < 0 ise yukarı dönüyordur
});

// --- SÜRÜKLE VE BIRAK (DRAG & DROP) ---

element.addEventListener('dragstart', (e) => {});   // Öğe sürüklenmeye başladığında
element.addEventListener('drag', (e) => {});        // Sürüklendiği sürece
element.addEventListener('dragend', (e) => {});     // Sürükleme bittiğinde
element.addEventListener('dragover', (e) => {});    // Sürüklenen bir öğe hedef alanın üzerindeyken
element.addEventListener('drop', (e) => {});        // Sürüklenen öğe bırakıldığında

// --- ÖNEMLİ BİLGİ: Hangi tuşa basıldı? ---
// mousedown veya click olayında 'e.button' değerine bakabilirsin:
// 0: Sol tuş
// 1: Orta (tekerlek) tuş
// 2: Sağ tuş