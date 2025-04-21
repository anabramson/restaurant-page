import createHeader from './header.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import '../styles.css'; // CSS is imported here (Webpack handles it)

function initializePage() {
  const content = document.getElementById('content');
  
  // Load initial page structure
  content.appendChild(createHeader());
  content.appendChild(loadHome()); // Default tab

  // Tab switching logic
  document.getElementById('home-btn').addEventListener('click', () => {
    content.replaceChild(loadHome(), content.lastChild);
    setActiveTab('home-btn');
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    content.replaceChild(loadMenu(), content.lastChild);
    setActiveTab('menu-btn');
  });

  document.getElementById('contact-btn').addEventListener('click', () => {
    content.replaceChild(loadContact(), content.lastChild);
    setActiveTab('contact-btn');
  });

  // Highlight active tab (optional)
  function setActiveTab(activeButtonId) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
      button.style.fontWeight = button.id === activeButtonId ? 'bold' : 'normal';
    });
  }

  // Set home as active by default
  setActiveTab('home-btn');
}

initializePage();