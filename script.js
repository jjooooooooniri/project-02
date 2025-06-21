// Page navigation and form handling functions

// Login functionality
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
    alert('이메일과 암호를 입력해주세요.');
    return;
  }
  
  // Simple validation - in real app, this would be server-side
  if (email.includes('@') && password.length > 0) {
    window.location.href = 'dashboard.html';
  } else {
    alert('올바른 이메일과 암호를 입력해주세요.');
  }
}

function logout() {
  if (confirm('로그아웃 하시겠습니까?')) {
    window.location.href = 'login.html';
  }
}

// Terms agreement functionality
function toggleAllTerms() {
  const agreeAll = document.getElementById('agreeAll');
  const termCheckboxes = document.querySelectorAll('.term-checkbox');
  const nextBtn = document.getElementById('termsNextBtn');
  
  termCheckboxes.forEach(checkbox => {
    checkbox.checked = agreeAll.checked;
  });
  
  nextBtn.disabled = !agreeAll.checked;
}

function goToRegister() {
  window.location.href = 'register.html';
}

// Registration form submission
function submitRegister(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  
  // Basic validation
  const email = formData.get('email');
  const phone = formData.get('phone');
  const position = formData.get('position');
  const duties = formData.get('duties');
  
  if (!email || !phone || !position || !duties) {
    alert('모든 필수 필드를 입력해주세요.');
    return;
  }
  
  alert('프로필이 성공적으로 등록되었습니다!');
  window.location.href = 'dashboard.html';
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const hamburger = document.querySelector('.hamburger');
  
  if (mobileMenu && overlay) {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  
  if (hamburger) {
    hamburger.classList.toggle('active');
  }
}

// Close mobile menu
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const hamburger = document.querySelector('.hamburger');
  
  if (mobileMenu && overlay) {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  }
  
  if (hamburger) {
    hamburger.classList.remove('active');
  }
}

// Individual term checkbox handling
document.addEventListener('DOMContentLoaded', function() {
  const termCheckboxes = document.querySelectorAll('.term-checkbox');
  const agreeAllCheckbox = document.getElementById('agreeAll');
  const nextBtn = document.getElementById('termsNextBtn');
  
  if (termCheckboxes.length > 0) {
    termCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const allChecked = Array.from(termCheckboxes).every(cb => cb.checked);
        
        if (agreeAllCheckbox) {
          agreeAllCheckbox.checked = allChecked;
        }
        
        if (nextBtn) {
          nextBtn.disabled = !allChecked;
        }
      });
    });
  }
});

// Handle Enter key for login
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  if (emailInput && passwordInput) {
    [emailInput, passwordInput].forEach(input => {
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          login();
        }
      });
    });
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    if (mobileNav && !mobileNav.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});