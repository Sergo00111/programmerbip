// Анимация появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    
    // Добавляем класс hidden ко всем секциям кроме первой
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== 'home') {
            sections[i].classList.add('hidden');
        }
    }
    
    // Наблюдаем за появлением элементов в viewport
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    // Наблюдаем за всеми скрытыми элементами
    var hiddenElements = document.querySelectorAll('.hidden');
    for (var i = 0; i < hiddenElements.length; i++) {
        observer.observe(hiddenElements[i]);
    }
    
    // Анимация для кнопок
    var buttons = document.querySelectorAll('.cyber-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        buttons[i].addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Плавная прокрутка для навигации
    var navLinks = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', function() {
            // Анимация бургера
            this.classList.toggle('active');
            
            // Показ/скрытие меню
            if (mobileMenu.style.display === 'flex') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'flex';
            }
        });
        
        // Закрытие меню при клике на ссылку
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                burgerMenu.classList.remove('active');
            });
        });
    }
});

// Предотвращаем двойной скролл
document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки скролла
    function checkBodyScroll() {
        const body = document.body;
        const html = document.documentElement;
        
        // Если есть горизонтальный скролл - фиксим
        if (body.scrollWidth > window.innerWidth) {
            body.style.overflowX = 'hidden';
        }
    }
    
    // Проверяем при загрузке и изменении размера
    checkBodyScroll();
    window.addEventListener('resize', checkBodyScroll);
    
    // Для мобильных меню
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('touchmove', function(e) {
            // Разрешаем скролл только внутри меню
            e.stopPropagation();
        }, { passive: true });
    }
});

