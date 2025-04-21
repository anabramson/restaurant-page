export default function loadHome() {
    const home = document.createElement('div');
    home.className = 'home-tab';
  
    // Hero Section
    const hero = document.createElement('section');
    hero.className = 'hero';
    
    const heroImage = document.createElement('img');
    heroImage.src = require('../assets/restaurant-hero.jpg'); // Webpack will process this
    heroImage.alt = 'Restaurant interior';
    heroImage.className = 'hero-image';
  
    const heroText = document.createElement('div');
    heroText.className = 'hero-text';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Bistro Delight';
    
    const p = document.createElement('p');
    p.textContent = 'Authentic flavors since 1995';
  
    heroText.append(h1, p);
    hero.append(heroImage, heroText);
  
    // Info Section
    const info = document.createElement('section');
    info.className = 'info';
  
    const hours = document.createElement('div');
    hours.className = 'hours';
    
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    
    const hoursList = document.createElement('ul');
    const hoursData = [
      'Monday - Friday: 11am - 10pm',
      'Saturday: 10am - 11pm',
      'Sunday: 10am - 9pm'
    ];
    
    hoursData.forEach(time => {
      const li = document.createElement('li');
      li.textContent = time;
      hoursList.appendChild(li);
    });
  
    hours.append(hoursTitle, hoursList);
  
    // Location
    const location = document.createElement('div');
    location.className = 'location';
    
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    
    const address = document.createElement('p');
    address.textContent = '123 Gourmet Street, Foodville, FC 12345';
  
    location.append(locationTitle, address);
  
    info.append(hours, location);
  
    // Assemble Home Tab
    home.append(hero, info);
  
    return home;
  }
  