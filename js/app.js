// ============================================
// Mobile Menu Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isActive);
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Dark Mode Toggle with localStorage
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const DARK_MODE_KEY = 'taskflow-dark-mode';

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
    darkModeToggle.title = 'Switch to light mode';
    localStorage.setItem(DARK_MODE_KEY, 'true');
  } else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
    darkModeToggle.title = 'Switch to dark mode';
    localStorage.setItem(DARK_MODE_KEY, 'false');
  }
}

// Initialize theme from localStorage or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem(DARK_MODE_KEY);
  if (savedTheme !== null) {
    applyTheme(savedTheme === 'true');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
  }
}

darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  applyTheme(!isDark);
});

// ============================================
// Form Validation
// ============================================
const contactForm = document.getElementById('contactForm');
const formErrors = document.getElementById('formErrors');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Validation Patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(e) {
  e.preventDefault();
  
  // Reset errors
  clearErrors();
  
  let hasErrors = false;
  const errors = [];

  // Validate Name
  const name = nameInput.value.trim();
  if (!name) {
    nameError.textContent = 'Name is required';
    nameInput.classList.add('error');
    hasErrors = true;
    errors.push('Name is required');
  } else if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters';
    nameInput.classList.add('error');
    hasErrors = true;
    errors.push('Name must be at least 2 characters');
  }

  // Validate Email
  const email = emailInput.value.trim();
  if (!email) {
    emailError.textContent = 'Email is required';
    emailInput.classList.add('error');
    hasErrors = true;
    errors.push('Email is required');
  } else if (!EMAIL_REGEX.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.classList.add('error');
    hasErrors = true;
    errors.push('Please enter a valid email address');
  }

  // Validate Message
  const message = messageInput.value.trim();
  if (!message) {
    messageError.textContent = 'Message is required';
    messageInput.classList.add('error');
    hasErrors = true;
    errors.push('Message is required');
  } else if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageInput.classList.add('error');
    hasErrors = true;
    errors.push('Message must be at least 10 characters');
  }

  // Show errors
  if (hasErrors) {
    formErrors.innerHTML = '<strong>Please fix the following errors:</strong><ul><li>' + 
      errors.join('</li><li>') + '</li></ul>';
    formErrors.classList.add('show');
    return false;
  }

  // Form is valid - submit
  submitForm();
  return false;
}

function clearErrors() {
  formErrors.innerHTML = '';
  formErrors.classList.remove('show');
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  messageInput.classList.remove('error');
}

function submitForm() {
  // Simulate form submission
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
  clearErrors();
}

// Real-time validation
nameInput.addEventListener('blur', () => {
  if (nameInput.value.trim().length === 0) {
    nameError.textContent = 'Name is required';
    nameInput.classList.add('error');
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('error');
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim().length === 0) {
    emailError.textContent = 'Email is required';
    emailInput.classList.add('error');
  } else if (!EMAIL_REGEX.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.classList.add('error');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error');
  }
});

messageInput.addEventListener('blur', () => {
  if (messageInput.value.trim().length === 0) {
    messageError.textContent = 'Message is required';
    messageInput.classList.add('error');
  } else if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageInput.classList.add('error');
  } else {
    messageError.textContent = '';
    messageInput.classList.remove('error');
  }
});

contactForm.addEventListener('submit', validateForm);

// ============================================
// API Integration - Blog Posts
// ============================================
async function fetchBlogPosts() {
  const blogContainer = document.getElementById('blogContainer');
  const blogLoading = document.getElementById('blogLoading');
  const blogError = document.getElementById('blogError');

  try {
    // Show loading state
    blogLoading.style.display = 'block';
    blogError.style.display = 'none';
    blogContainer.innerHTML = '';

    // Fetch posts from JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    // Clear loading state
    blogLoading.style.display = 'none';

    // Render blog cards
    if (posts && posts.length > 0) {
      posts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogContainer.appendChild(blogCard);
      });
    } else {
      throw new Error('No posts found');
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    blogLoading.style.display = 'none';
    blogError.style.display = 'block';
    blogError.textContent = 'Failed to load blog posts. Please try again later.';
  }
}

function createBlogCard(post) {
  const card = document.createElement('article');
  card.className = 'blog-card';
  
  // Truncate title and body
  const title = post.title.substring(0, 50) + (post.title.length > 50 ? '...' : '');
  const body = post.body.substring(0, 100) + '...';
  
  card.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(body)}</p>
    <div class="blog-card-footer">
      <small>Post ID: ${post.id}</small>
    </div>
  `;
  
  return card;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initializeTheme();
  
  // Fetch and display blog posts
  fetchBlogPosts();
  
  // Add keyboard accessibility
  setupKeyboardNavigation();
});

// ============================================
// Keyboard Navigation
// ============================================
function setupKeyboardNavigation() {
  // Close mobile menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
}

// ============================================
// Lazy Loading Setup
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// Smooth Scroll Enhancement
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// Minimal Performance Optimization
// ============================================
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Optimization tasks can go here
  }, 100);
}, { passive: true });
