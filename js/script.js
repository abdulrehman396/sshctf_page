document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileToggle.addEventListener('click', function() {
    menuIcon.classList.toggle('open');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuIcon.classList.remove('open');
      mobileMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    });
  });

  // Initialize typing animation
  const fullText = 'Securing the Digital Frontier';
  const typedTextElement = document.getElementById('typed-text');
  let textContent = typedTextElement.textContent;
  
  typedTextElement.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < fullText.length) {
      typedTextElement.textContent = fullText.slice(0, i+1);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      typedTextElement.innerHTML = fullText + '<span class="cursor">|</span>';
    }
  }
  
  typeWriter();

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  
  function startCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      let count = 0;
      const increment = target > 100 ? Math.ceil(target / 100) : 1;
      const duration = 2000; // 2 seconds
      const interval = duration / (target / increment);
      
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = count;
        }
      }, interval);
      
      counter.style.animation = 'counterAnimation 0.5s forwards';
    });
  }

  // Observer for elements
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.querySelector('.counter')) {
          startCounters();
        }
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill out all required fields.');
        return;
      }
      
      // In a real application, you'd send this to a server
      // For demonstration, we'll just show a success message
      contactForm.innerHTML = `
        <div class="success-message">
          <h3>Thank you for your message!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      `;
      
      // Style the success message
      const successMessage = document.querySelector('.success-message');
      successMessage.style.textAlign = 'center';
      successMessage.style.padding = '40px 0';
    });
  }
});