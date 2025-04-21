export default function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tabs = ['Home', 'Menu', 'Contact'];
  
    tabs.forEach(tab => {
      const button = document.createElement('button');
      button.textContent = tab;
      button.id = `${tab.toLowerCase()}-btn`;
      nav.appendChild(button);
    });
  
    header.appendChild(nav);
    return header;
  }
  