var slideIndex = 0; // Mulai dari slide pertama (indeks 0)
showSlides(); // Panggil fungsi showSlides

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Ganti slide setiap 2 detik (2000ms)
}

// JavaScript for smooth scrolling
        document.addEventListener('DOMContentLoaded', function() {
            // Get all links with hash references
            const links = document.querySelectorAll('nav ul li a');
            
            // Add click event listener to each link
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Prevent default anchor click behavior
                    e.preventDefault();
                    
                    // Get the href attribute
                    const targetId = this.getAttribute('href');
                    
                    // Get the target element
                    const targetElement = document.querySelector(targetId);
                    
                    // Scroll to the target element smoothly
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                     // Update URL hash (optional)
                    history.pushState(null, null, targetId);
                });
            });
        });

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;

        if (!name || !email || !interest) {
            formMessage.textContent = 'Mohon isi semua kolom.';
            formMessage.className = 'form-message error';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Mohon masukkan alamat email yang valid.';
            formMessage.className = 'form-message error';
            return;
        }

        setTimeout(function() {
            alert('Formulir Anda telah berhasil dikirim!');
            formMessage.textContent = 'Terima kasih atas pertanyaan Anda! Kami akan menghubungi Anda dalam waktu 24 jam.';
            formMessage.className = 'form-message success';
            contactForm.reset();
        }, 1000);
    });
});
