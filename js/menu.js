export default function loadMenu() {
    const menu = document.createElement('div');
    menu.className = 'menu-tab';
  
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    menu.appendChild(heading);
  
    // Menu Categories
    const categories = [
      {
        name: 'Appetizers',
        items: [
          { name: 'Bruschetta', price: '$8', desc: 'Toasted bread with tomatoes, garlic, and basil' },
          { name: 'Calamari', price: '$12', desc: 'Fried squid with lemon aioli' }
        ]
      },
      {
        name: 'Main Courses',
        items: [
          { name: 'Spaghetti Carbonara', price: '$18', desc: 'Classic Roman pasta with eggs, cheese, and pancetta' },
          { name: 'Grilled Salmon', price: '$22', desc: 'With lemon butter sauce and seasonal vegetables' }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Tiramisu', price: '$9', desc: 'Coffee-flavored Italian dessert' },
          { name: 'Chocolate Lava Cake', price: '$10', desc: 'With vanilla ice cream' }
        ]
      }
    ];
  
    categories.forEach(category => {
      const section = document.createElement('section');
      section.className = 'menu-category';
      
      const h2 = document.createElement('h2');
      h2.textContent = category.name;
      section.appendChild(h2);
  
      const itemList = document.createElement('div');
      itemList.className = 'menu-items';
  
      category.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        
        const namePrice = document.createElement('div');
        namePrice.className = 'name-price';
        
        const h3 = document.createElement('h3');
        h3.textContent = item.name;
        
        const span = document.createElement('span');
        span.textContent = item.price;
        
        namePrice.append(h3, span);
        git
        const p = document.createElement('p');
        p.textContent = item.desc;
        
        itemDiv.append(namePrice, p);
        itemList.appendChild(itemDiv);
      });
  
      section.appendChild(itemList);
      menu.appendChild(section);
    });
  
    return menu;
  }
  