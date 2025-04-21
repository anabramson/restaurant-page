export default function loadContact() {
    const contact = document.createElement('div');
    contact.className = 'contact-tab';
  
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    contact.appendChild(heading);
  
    // Contact Info
    const info = document.createElement('div');
    info.className = 'contact-info';
    
    const phone = document.createElement('div');
    phone.innerHTML = '<h2>Phone</h2><p>(123) 456-7890</p>';
    
    const email = document.createElement('div');
    email.innerHTML = '<h2>Email</h2><p>info@bistrodelight.com</p>';
    
    const address = document.createElement('div');
    address.innerHTML = '<h2>Address</h2><p>123 Gourmet Street<br>Foodville, FC 12345</p>';
    
    info.append(phone, email, address);
    contact.appendChild(info);
  
    // Contact Form
    const form = document.createElement('form');
    form.className = 'contact-form';
    form.innerHTML = `
      <h2>Send Us a Message</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" required></textarea>
      </div>
      <button type="submit">Send</button>
    `;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will respond soon.');
      form.reset();
    });
  
    contact.appendChild(form);
  
    return contact;
  }
  