// Inicializar íconos de Lucide
        lucide.createIcons();

        // Lógica para el menú móvil
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Lógica para Scroll-Spy (resaltar el enlace activo)
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.35 // Porcentaje de visibilidad para considerar la sección activa
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                if (navLink) {
                    navLink.classList.remove('active');
                }

                if (entry.isIntersecting) {
                    // Desactivar todos
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Activar el actual
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
