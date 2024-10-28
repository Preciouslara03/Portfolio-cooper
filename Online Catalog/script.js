fetch('makeup.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('makeup-collection');
        
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="images/${product.cover}" alt="${product.name}">
                <h2>${product.name}</h2>
                <h3>by ${product.brand}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            `;
            
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
