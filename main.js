document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
        // Toggle kelas ikon hamburger dan silang
        menuIcon.classList.toggle('bx-menu');
        menuIcon.classList.toggle('bx-x');
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
});



let words = document.querySelectorAll(".word");
let currentWordIndex = 0;
let currentLetterIndex = 0;

function showWord(index) {
    words.forEach(word => word.classList.remove('active'));
    let word = words[index];
    word.classList.add('active');

    let text = word.textContent;

    // Menampilkan setiap huruf dalam urutan
    function typeText() {
        let letters = text.slice(0, currentLetterIndex + 1).split('');
        word.innerHTML = ''; // Membersihkan konten sebelumnya
        letters.forEach((letter, index) => {
            let span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`; // Animasi delay untuk setiap huruf
            word.appendChild(span);
        });

        currentLetterIndex++;
        if (currentLetterIndex <= text.length) {
            setTimeout(typeText, 100); // Kecepatan ketikkan (dalam milidetik)
        }
    }

    typeText(); // Memulai efek ketikan
}

function changeText() {
    currentLetterIndex = 0;
    showWord(currentWordIndex);
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Memulai perubahan teks setiap 8 detik
setInterval(changeText, 8000);

// Untuk memulai animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    showWord(currentWordIndex);
});

// mixitup

const mixer = mixitup('.design-gallery', {
    selectors: {
        target: '.port-box'
    },
    animation: {
        duration: 300
    }
});

// active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);

// sticky navbar
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});