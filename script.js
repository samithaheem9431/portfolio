   // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
      } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      }
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

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Typing effect for hero text
    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = '';
      
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      
      type();
    }

    // Initialize typing effect after page load
    window.addEventListener('load', function() {
      const heroTitle = document.querySelector('.hero h1');
      const heroSubtitle = document.querySelector('.hero p');
      
      setTimeout(() => {
        typeWriter(heroTitle, "Hi, I'm Abdul Sami", 80);
      }, 500);
      
      setTimeout(() => {
        typeWriter(heroSubtitle, "Software Engineer | Web & Mobile App Developer", 60);
      }, 2500);
    });

    // Skill card interaction
    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Project card interaction
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const hero = document.querySelector('.hero::before');
      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    });

    // Mobile menu auto-close
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('#navbarNav');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      });
    });

    // Loading animation
    window.addEventListener('load', function() {
      document.body.style.opacity = '1';
    });