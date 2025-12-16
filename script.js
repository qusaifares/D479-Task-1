// Transportation toggle functionality
function toggleTransportation(activityType) {
  const transportDiv = document.getElementById(activityType + '-transport');
  const header = document.querySelector(`h2[onclick="toggleTransportation('${activityType}')"]`);
  const toggleIcon = header.querySelector('.toggle-icon');
  
  const isExpanded = header.getAttribute('aria-expanded') === 'true';
  
  if (isExpanded) {
    transportDiv.style.display = 'none';
    toggleIcon.textContent = '+';
    header.setAttribute('aria-expanded', 'false');
  } else {
    transportDiv.style.display = 'block';
    toggleIcon.textContent = '−';
    header.setAttribute('aria-expanded', 'true');
  }
}

// Show feedback for interactive links
function showLinkFeedback(link) {
  // Remove any existing feedback
  const existingFeedback = document.querySelector('.link-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  
  // Create feedback element
  const feedback = document.createElement('div');
  feedback.className = 'link-feedback';
  feedback.textContent = 'Booking system would open here. Contact: (555) 123-BOOK';
  
  // Position it near the clicked link
  link.parentNode.appendChild(feedback);
  
  // Remove feedback after 3 seconds
  setTimeout(() => {
    if (feedback.parentNode) {
      feedback.remove();
    }
  }, 3000);
}

// Lodging filter functionality
function filterLodging(type) {
  const cards = document.querySelectorAll('.lodging-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter cards
  cards.forEach(card => {
    if (type === 'all') {
      card.classList.remove('hidden');
    } else {
      const cardTypes = card.getAttribute('data-type');
      if (cardTypes && cardTypes.includes(type)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
}

// Ensure all booking/contact links are functional (placeholder functionality)
document.addEventListener('DOMContentLoaded', function() {
  const bookingLinks = document.querySelectorAll('.booking-link');
  bookingLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Show feedback for interactive links
      if (link.classList.contains('interactive-link')) {
        showLinkFeedback(link);
      } else {
        alert('Booking system would open here. Contact information: (555) 123-BOOK');
      }
    });
  });
  
  // Add keyboard support for collapsible headers
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  collapsibleHeaders.forEach(header => {
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Add touch-friendly interactions for mobile
  const toggleButtons = document.querySelectorAll('.getting-here-toggle');
  toggleButtons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.background = '#dee2e6';
    });
    
    button.addEventListener('touchend', function() {
      this.style.background = '#e9ecef';
    });
  });
});