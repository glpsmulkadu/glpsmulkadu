/* ============================================
   GLPS MULKADU — Main JavaScript
   ============================================ */

// ============================================
// ANNOUNCEMENTS DATA
// ============================================
// ✏️ HOW TO ADD A NEW ANNOUNCEMENT:
//    1. Copy one of the objects below
//    2. Change the id (increase by 1)
//    3. Fill in date, title, titleKn, content, contentKn
//    4. Set urgent to true or false
//    5. Save the file — done!
//
// 🗑️ HOW TO DELETE AN ANNOUNCEMENT:
//    1. Find the announcement you want to remove
//    2. Delete everything from { to the closing },
//    3. Make sure the previous item ends with a comma (or remove trailing comma if it's the last one)
//    4. Save the file — done!
// ============================================

const announcements = [
  {
    id: 1,
    date: "2025-06-01",
    title: "School Reopens for New Academic Year",
    titleKn: "ಹೊಸ ಶೈಕ್ಷಣಿಕ ವರ್ಷಕ್ಕೆ ಶಾಲೆ ಪುನಃ ಆರಂಭ",
    content: "School reopens on June 1, 2025 for the new academic year. All students are requested to attend regularly with proper uniforms and textbooks.",
    contentKn: "ಹೊಸ ಶೈಕ್ಷಣಿಕ ವರ್ಷಕ್ಕಾಗಿ ಜೂನ್ 1, 2025 ರಂದು ಶಾಲೆ ಪುನಃ ಆರಂಭವಾಗುತ್ತದೆ. ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು ನಿಯಮಿತವಾಗಿ ಸರಿಯಾದ ಸಮವಸ್ತ್ರ ಮತ್ತು ಪಠ್ಯಪುಸ್ತಕಗಳೊಂದಿಗೆ ಹಾಜರಾಗಬೇಕು.",
    urgent: false
  },
  {
    id: 2,
    date: "2025-03-15",
    title: "Annual Day Celebration",
    titleKn: "ವಾರ್ಷಿಕೋತ್ಸವ ಆಚರಣೆ",
    content: "Annual Day will be celebrated on March 15, 2025. All parents and guardians are cordially invited. Cultural programs start at 10 AM.",
    contentKn: "ಮಾರ್ಚ್ 15, 2025 ರಂದು ವಾರ್ಷಿಕೋತ್ಸವವನ್ನು ಆಚರಿಸಲಾಗುವುದು. ಎಲ್ಲಾ ಪೋಷಕರು ಮತ್ತು ಪಾಲಕರು ಆಹ್ವಾನಿತರಾಗಿದ್ದಾರೆ. ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಬೆಳಿಗ್ಗೆ 10 ಗಂಟೆಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ.",
    urgent: false
  },
  {
    id: 3,
    date: "2025-02-20",
    title: "Parent-Teacher Meeting",
    titleKn: "ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಪಾಲಕ-ಶಿಕ್ಷಕರ ಸಭೆ",
    content: "Parent-Teacher meeting scheduled for February 20, 2025. Please attend to discuss your child's progress. Meeting starts at 11 AM.",
    contentKn: "ಫೆಬ್ರವರಿ 20, 2025 ರಂದು ಪಾಲಕ-ಶಿಕ್ಷಕರ ಸಭೆ ನಡೆಯಲಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮಗುವಿನ ಪ್ರಗತಿಯನ್ನು ಚರ್ಚಿಸಲು ಹಾಜರಾಗಿ. ಸಭೆ ಬೆಳಿಗ್ಗೆ 11 ಗಂಟೆಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",
    urgent: false
  },
  {
    id: 4,
    date: "2025-01-26",
    title: "Republic Day Celebrations",
    titleKn: "ಗಣರಾಜ್ಯೋತ್ಸವ ಆಚರಣೆ",
    content: "Republic Day will be celebrated on January 26, 2025. Flag hoisting at 8 AM followed by cultural programs. All are welcome.",
    contentKn: "ಜನವರಿ 26, 2025 ರಂದು ಗಣರಾಜ್ಯೋತ್ಸವವನ್ನು ಆಚರಿಸಲಾಗುವುದು. ಬೆಳಿಗ್ಗೆ 8 ಗಂಟೆಗೆ ಧ್ವಜಾರೋಹಣ, ನಂತರ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು. ಎಲ್ಲರನ್ನೂ ಸ್ವಾಗತಿಸಲಾಗುತ್ತದೆ.",
    urgent: false
  },
  {
    id: 5,
    date: "2025-01-10",
    title: "Mid-Day Meal Menu Update",
    titleKn: "ಮಧ್ಯಾಹ್ನದ ಊಟದ ಮೆನು ನವೀಕರಣ",
    content: "The mid-day meal menu has been updated for the new term. Please check the notice board at school for the weekly menu.",
    contentKn: "ಹೊಸ ಅವಧಿಗಾಗಿ ಮಧ್ಯಾಹ್ನದ ಊಟದ ಮೆನು ನವೀಕರಿಸಲಾಗಿದೆ. ವಾರದ ಮೆನುಗಾಗಿ ಶಾಲೆಯ ಸೂಚನಾ ಫಲಕವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    urgent: true
  }
];

// ============================================
// DONORS DATA
// ✏️ To add/edit donors, modify this array
// ============================================
const donors = [
  { name: "Sri. Krishna Rao", amount: 5000, purpose: "Library Books", date: "2024-12" },
  { name: "Smt. Parvathamma", amount: 3000, purpose: "Sports Equipment", date: "2024-11" },
  { name: "Sri. Venkatesh M.", amount: 10000, purpose: "Computer Lab", date: "2024-10" },
  { name: "Smt. Lakshmi Devi", amount: 2000, purpose: "Stationery", date: "2024-09" },
  { name: "Sri. Ramesh K.", amount: 5000, purpose: "School Uniforms", date: "2024-08" },
  { name: "Smt. Savitha N.", amount: 8000, purpose: "Classroom Furniture", date: "2024-07" },
  { name: "Sri. Narasimha Murthy", amount: 15000, purpose: "Building Fund", date: "2024-06" },
  { name: "Smt. Geetha R.", amount: 3000, purpose: "Lab Equipment", date: "2024-05" }
];

// ============================================
// STAFF DATA
// ✏️ To add/edit staff, modify this array
// ============================================
const staff = [
  { name: "Sri. Ramesh K.", nameKn: "ಶ್ರೀ. ರಮೇಶ್ ಕೆ.", role: "Head Teacher", roleKn: "ಮುಖ್ಯ ಶಿಕ್ಷಕ", subject: "Mathematics / ಗಣಿತ", photo: "https://picsum.photos/seed/teacher1/200/200.jpg" },
  { name: "Smt. Lakshmi Devi", nameKn: "ಶ್ರೀಮತಿ. ಲಕ್ಷ್ಮೀ ದೇವಿ", role: "Teacher", roleKn: "ಶಿಕ್ಷಕಿ", subject: "Kannada / ಕನ್ನಡ", photo: "https://picsum.photos/seed/teacher2/200/200.jpg" },
  { name: "Sri. Venkatesh M.", nameKn: "ಶ್ರೀ. ವೆಂಕಟೇಶ್ ಎಂ.", role: "Teacher", roleKn: "ಶಿಕ್ಷಕ", subject: "English / ಇಂಗ್ಲಿಷ್", photo: "https://picsum.photos/seed/teacher3/200/200.jpg" },
  { name: "Smt. Savitha N.", nameKn: "ಶ್ರೀಮತಿ. ಸಾವಿತ್ರಿ ಎನ್.", role: "Teacher", roleKn: "ಶಿಕ್ಷಕಿ", subject: "EVS / ಪರಿಸರ ಅಧ್ಯಯನ", photo: "https://picsum.photos/seed/teacher4/200/200.jpg" },
  { name: "Sri. Narasimha Murthy", nameKn: "ಶ್ರೀ. ನರಸಿಂಹ ಮೂರ್ತಿ", role: "Teacher", roleKn: "ಶಿಕ್ಷಕ", subject: "Hindi / ಹಿಂದಿ", photo: "https://picsum.photos/seed/teacher5/200/200.jpg" },
  { name: "Smt. Geetha R.", nameKn: "ಶ್ರೀಮತಿ. ಗೀತಾ ಆರ್.", role: "Teacher", roleKn: "ಶಿಕ್ಷಕಿ", subject: "Science / ವಿಜ್ಞಾನ", photo: "https://picsum.photos/seed/teacher6/200/200.jpg" }
];

// ============================================
// CURRENT LANGUAGE
// ============================================
let currentLang = localStorage.getItem('glps-lang') || 'en';

// ============================================
// LANGUAGE TOGGLE
// ============================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('glps-lang', lang);
  
  // Update body class
  document.body.classList.toggle('lang-kn', lang === 'kn');
  
  // Update all text elements with data-en/data-kn attributes
  document.querySelectorAll('[data-en]').forEach(function(el) {
    var text = el.getAttribute('data-' + lang);
    if (text) {
      el.textContent = text;
    }
  });
  
  // Update placeholder attributes
  document.querySelectorAll('[data-en-placeholder]').forEach(function(el) {
    var placeholder = el.getAttribute('data-' + lang + '-placeholder');
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });
  
  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  
  // Re-render dynamic content
  renderAnnouncements();
  renderDonors();
  renderStaff();
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  
  if (toggle && mobileNav) {
    toggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }
}

function closeMobileMenu() {
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  
  if (toggle) toggle.classList.remove('open');
  if (mobileNav) mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function handleScroll() {
  var navbar = document.querySelector('.navbar');
  var backToTop = document.querySelector('.back-to-top');
  
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.fade-up').forEach(function(el) {
    observer.observe(el);
  });
}

// ============================================
// RENDER ANNOUNCEMENTS
// ============================================
function renderAnnouncements() {
  var container = document.getElementById('announcements-list');
  if (!container) return;
  
  var html = '';
  
  // Sort by date (newest first)
  var sorted = announcements.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  
  sorted.forEach(function(item) {
    var title = currentLang === 'kn' && item.titleKn ? item.titleKn : item.title;
    var content = currentLang === 'kn' && item.contentKn ? item.contentKn : item.content;
    var dateStr = formatDate(item.date);
    
    html += '<div class="announcement-item' + (item.urgent ? ' urgent' : '') + ' fade-up">';
    html += '  <div class="announcement-date">';
    html += '    <span class="iconify" data-icon="lucide:calendar" data-width="14"></span>';
    html += '    ' + dateStr;
    if (item.urgent) {
      html += '    <span class="urgency-badge" data-en="URGENT" data-kn="ತುರ್ತು">' + (currentLang === 'kn' ? 'ತುರ್ತು' : 'URGENT') + '</span>';
    }
    html += '  </div>';
    html += '  <div class="announcement-title">' + title + '</div>';
    html += '  <div class="announcement-content">' + content + '</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
  
  // Re-init scroll animations for new elements
  setTimeout(initScrollAnimations, 100);
}

// Render recent announcements for home page
function renderRecentAnnouncements() {
  var container = document.getElementById('recent-announcements');
  if (!container) return;
  
  var html = '';
  var recent = announcements.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 3);
  
  recent.forEach(function(item) {
    var title = currentLang === 'kn' && item.titleKn ? item.titleKn : item.title;
    var content = currentLang === 'kn' && item.contentKn ? item.contentKn : item.content;
    var dateStr = formatDate(item.date);
    
    html += '<div class="announcement-item' + (item.urgent ? ' urgent' : '') + '">';
    html += '  <div class="announcement-date">';
    html += '    <span class="iconify" data-icon="lucide:calendar" data-width="14"></span>';
    html += '    ' + dateStr;
    html += '  </div>';
    html += '  <div class="announcement-title">' + title + '</div>';
    html += '  <div class="announcement-content">' + content + '</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
}

// ============================================
// RENDER DONORS TABLE
// ============================================
function renderDonors() {
  var tbody = document.getElementById('donors-tbody');
  if (!tbody) return;
  
  var nameHeader = currentLang === 'kn' ? 'ದಾನಿಯ ಹೆಸರು' : 'Donor Name';
  var amountHeader = currentLang === 'kn' ? 'ಮೊತ್ತ (₹)' : 'Amount (₹)';
  var purposeHeader = currentLang === 'kn' ? 'ಉದ್ದೇಶ' : 'Purpose';
  var dateHeader = currentLang === 'kn' ? 'ದಿನಾಂಕ' : 'Date';
  
  // Update table headers
  var ths = tbody.parentElement.querySelectorAll('thead th');
  if (ths.length >= 4) {
    ths[0].textContent = nameHeader;
    ths[1].textContent = amountHeader;
    ths[2].textContent = purposeHeader;
    ths[3].textContent = dateHeader;
  }
  
  var html = '';
  donors.forEach(function(donor) {
    html += '<tr>';
    html += '  <td>' + donor.name + '</td>';
    html += '  <td class="amount">₹' + donor.amount.toLocaleString() + '</td>';
    html += '  <td>' + donor.purpose + '</td>';
    html += '  <td>' + donor.date + '</td>';
    html += '</tr>';
  });
  
  tbody.innerHTML = html;
}

// ============================================
// RENDER STAFF
// ============================================
function renderStaff() {
  var container = document.getElementById('staff-grid');
  if (!container) return;
  
  var html = '';
  staff.forEach(function(member) {
    var name = currentLang === 'kn' && member.nameKn ? member.nameKn : member.name;
    var role = currentLang === 'kn' && member.roleKn ? member.roleKn : member.role;
    
    html += '<div class="staff-card fade-up">';
    html += '  <div class="staff-photo">';
    html += '    <img src="' + member.photo + '" alt="' + name + '" loading="lazy">';
    html += '  </div>';
    html += '  <h3>' + name + '</h3>';
    html += '  <div class="staff-role">' + role + '</div>';
    html += '  <div class="staff-subject">' + member.subject + '</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
  setTimeout(initScrollAnimations, 100);
}

// ============================================
// GALLERY MODAL
// ============================================
function openGalleryModal(imgSrc, alt) {
  var modal = document.getElementById('gallery-modal');
  var modalImg = document.getElementById('gallery-modal-img');
  
  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeGalleryModal() {
  var modal = document.getElementById('gallery-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ============================================
// UTILITY: FORMAT DATE
// ============================================
function formatDate(dateStr) {
  var date = new Date(dateStr);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(currentLang === 'kn' ? 'kn-IN' : 'en-IN', options);
}

// ============================================
// ACTIVE PAGE HIGHLIGHT
// ============================================
function setActivePage() {
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-links a, .mobile-nav a:not(.lang-toggle-mobile a)').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// BACK TO TOP
// ============================================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Set active page
  setActivePage();
  
  // Set language
  setLanguage(currentLang);
  
  // Scroll handler
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  // Scroll animations
  initScrollAnimations();
  
  // Render dynamic content
  renderAnnouncements();
  renderRecentAnnouncements();
  renderDonors();
  renderStaff();
  
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav a').forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Close gallery modal on overlay click
  var modal = document.getElementById('gallery-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeGalleryModal();
      }
    });
  }
  
  // Keyboard escape to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeGalleryModal();
      closeMobileMenu();
    }
  });
});