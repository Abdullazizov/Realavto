       // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Telegram link function
        function openTelegram() {
            window.open('https://t.me/real_auto_uz', '_blank');
        }

        function openTelegram2() {
            window.open('https://t.me/nasiya_avto_index', '_blank');
        }

        function openTelegram3() {
            window.open('https://t.me/Real_kredit_auto', '_blank');
        }

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.car-card, .service-card, .contact-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Add hover effects
        document.querySelectorAll('.service-card, .car-card, .social-icon, .contact-item').forEach(element => {
            element.addEventListener('mouseenter', function() {
                if (this.style.transform.includes('scale')) {
                    this.style.transform = this.style.transform.replace(/scale$$[^)]*$$/, 'scale(1.05)');
                } else {
                    this.style.transform += ' scale(1.05)';
                }
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = this.style.transform.replace(/scale$$[^)]*$$/, 'scale(1)');
            });
        });
