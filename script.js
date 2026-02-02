// Script to handle simple interactions and animations

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');

    // Language Switcher
    const translations = {
        en: {
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.certificates': 'Certificates',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'section.about': 'About',
            'section.skills': 'Skills',
            'section.certificates': 'Certificates & Journey',
            'section.projects': 'Projects',
            'section.blog': 'Blog & Articles',
            'about.p1': 'I enjoy building practical web and mobile projects using modern tools and simple solutions. I work with technologies like Next.js, Flutter, and basic hardware platforms, and I like turning ideas into working systems.',
            'about.p2': 'I also build AI automations to reduce repetitive tasks and improve workflows. Alongside development, I have experience in video editing, creating clean and engaging content for social media and online platforms.',
            'about.p3': 'I focus on learning by building, experimenting with new tools, and creating real-world solutions that make everyday work easier.',
            'skills.webMobile': 'Web & Mobile',
            'skills.hardwareTools': 'Hardware & Tools',
            'certificates.subtitle1': 'I\'ve been learning and building projects throughout my BSIT journey.',
            'certificates.subtitle2': 'Here\'s a timeline of my certifications and achievements.',
            'footer.text': 'Built by 4urie. The source code is available on GitHub.'
        },
        tl: {
            'nav.about': 'Tungkol',
            'nav.skills': 'Kasanayan',
            'nav.certificates': 'Mga Sertipiko',
            'nav.projects': 'Mga Proyekto',
            'nav.contact': 'Makipag-ugnayan',
            'section.about': 'Tungkol',
            'section.skills': 'Mga Kasanayan',
            'section.certificates': 'Mga Sertipiko at Paglalakbay',
            'section.projects': 'Mga Proyekto',
            'section.blog': 'Blog at Mga Artikulo',
            'about.p1': 'Nagsasaya ako sa paggawa ng praktikal na web at mobile projects gamit ang mga modernong tools at simpleng solusyon. Gumagamit ako ng mga teknolohiya tulad ng Next.js, Flutter, at basic hardware platforms, at gusto kong gawing working systems ang mga ideya.',
            'about.p2': 'Gumagawa rin ako ng AI automation para mabawasan ang paulit-ulit na gawain at mapabuti ang daloy ng trabaho. Kasama ng development, mayroon akong karanasan sa video editing, lumilikha ng malinis at nakakaakit na content para sa social media at online platforms.',
            'about.p3': 'Nakatuon ako sa pag-aaral sa pamamagitan ng paggawa, pag-eksperimento sa mga bagong tools, at paglikha ng tunay na mundo na solusyon na nagpapadali sa pang-araw-araw na trabaho.',
            'skills.webMobile': 'Web at Mobile',
            'skills.hardwareTools': 'Hardware at Mga Tools',
            'certificates.subtitle1': 'Nag-aaral at gumagawa ako ng mga proyekto sa buong aking BSIT journey.',
            'certificates.subtitle2': 'Narito ang timeline ng aking mga sertipiko at tagumpay.',
            'footer.text': 'Ginawa ni 4urie. Ang source code ay available sa GitHub.'
        },
        es: {
            'nav.about': 'Acerca de',
            'nav.skills': 'Habilidades',
            'nav.certificates': 'Certificados',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'section.about': 'Acerca de',
            'section.skills': 'Habilidades',
            'section.certificates': 'Certificados y Trayectoria',
            'section.projects': 'Proyectos',
            'section.blog': 'Blog y Artículos',
            'about.p1': 'Disfruto creando proyectos web y móviles prácticos utilizando herramientas modernas y soluciones simples. Trabajo con tecnologías como Next.js, Flutter y plataformas de hardware básicas, y me gusta convertir ideas en sistemas funcionales.',
            'about.p2': 'También creo automatizaciones de IA para reducir tareas repetitivas y mejorar los flujos de trabajo. Junto con el desarrollo, tengo experiencia en edición de video, creando contenido limpio y atractivo para redes sociales y plataformas en línea.',
            'about.p3': 'Me enfoco en aprender construyendo, experimentando con nuevas herramientas y creando soluciones del mundo real que facilitan el trabajo diario.',
            'skills.webMobile': 'Web y Móvil',
            'skills.hardwareTools': 'Hardware y Herramientas',
            'certificates.subtitle1': 'He estado aprendiendo y construyendo proyectos a lo largo de mi trayectoria en BSIT.',
            'certificates.subtitle2': 'Aquí está la línea de tiempo de mis certificaciones y logros.',
            'footer.text': 'Creado por 4urie. El código fuente está disponible en GitHub.'
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langSwitcher = document.querySelector('.lang-switcher');
    const currentLangSpan = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    let currentLang = localStorage.getItem('language') || 'en';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        currentLangSpan.textContent = lang.toUpperCase();
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update active state
        langOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
        
        langSwitcher.classList.remove('active');
        lucide.createIcons();
    }
    
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
        lucide.createIcons();
    });
    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.dataset.lang);
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('active');
        }
    });
    
    setLanguage(currentLang);

    // Rotating Text Animation
    const rotatingText = document.getElementById('rotating-text');
    const texts = ['video editing', 'web development', 'AI automation', 'virtual assistance'];
    let currentIndex = 0;
    
    function shuffleText() {
        rotatingText.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            rotatingText.textContent = texts[currentIndex];
            rotatingText.style.opacity = '1';
        }, 300);
    }
    
    setInterval(shuffleText, 2000);

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'light') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.removeAttribute('data-theme');
        }
        
        localStorage.setItem('theme', newTheme);
        lucide.createIcons();
    });

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .skill-item, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        observer.observe(item);
        // Stagger animation delay
        item.style.transitionDelay = `${index * 0.2}s`;
    });

    // Add visible class style via JS or CSS? 
    // Better to add a style block or class in CSS. 
    // Let's inject the style for the 'visible' class here to keep it contained if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
