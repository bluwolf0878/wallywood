export const Home = (navigateTo) => {
    // Hovedcontainer
    const container = document.createElement('div');
    container.style.backgroundColor = '#fff';
    container.style.padding = '20px';
  
    // Logo og navigation
    const header = document.createElement('header');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
  
    const logo = document.createElement('h1');
    logo.textContent = 'WALLYWOOD';
    logo.style.color = '#C75022'; // Match med billedet
    header.appendChild(logo);
  
    const nav = document.createElement('nav');
    const navItems = [
      { name: 'Forside', page: Home },
    ];
  
    navItems.forEach((item) => {
      const navButton = document.createElement('button');
      navButton.textContent = item.name;
      navButton.style.margin = '0 10px';
      navButton.style.cursor = 'pointer';
      navButton.addEventListener('click', () => navigateTo(item.page));
      nav.appendChild(navButton);
    });
  
    header.appendChild(nav);
    container.appendChild(header);
  
    // Hovedbillede
    const image = document.createElement('img');
    image.src = '../imgages/0f4281bb96ff3bf39fb0eae573e60297.png'; // Tilpas billedsti
    image.alt = 'Rød teatergardin';
    image.style.width = '100%';
    image.style.marginTop = '20px';
    container.appendChild(image);
  
    // Sektion: Fire tilfældige plakater
    const section = document.createElement('section');
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Fire tilfældige plakater';
    sectionTitle.style.color = '#C75022';
    section.appendChild(sectionTitle);
  
    const postersGrid = document.createElement('div');
    postersGrid.classList.add('posters-container');  // CSS-grid class for container
  
    document.addEventListener('DOMContentLoaded', async () => {
        const app = document.getElementById('app'); // Dit root-element
        if (!app) throw new Error('Elementet med id "app" blev ikke fundet.');
      
        try {
          // Fetch de 4 tilfældige plakater fra API'et
          const response = await fetch('http://localhost:3524/posters?limit=4'); // Henter 4 tilfældige plakater
          const posters = await response.json();
      
          // Opret en container til plakater
          const postersContainer = document.createElement('div');
          postersContainer.style.display = 'grid';
          postersContainer.style.gridTemplateColumns = '1fr 1fr';
          postersContainer.style.gap = '20px';
      
          // Dynamisk opbygning af plakater
          posters.forEach(poster => {
            const posterCard = document.createElement('div');
            posterCard.classList.add('poster-card'); // Tilføj CSS-klassen til plakatkortet
      
            const posterImage = document.createElement('img');
            posterImage.src = poster.image;
            posterImage.alt = poster.name;
      
            const posterDetails = document.createElement('div');
            
            const posterName = document.createElement('h3');
            posterName.textContent = poster.name;
            
            const posterDescription = document.createElement('p');
            const description = poster.description || 'Ingen beskrivelse tilgængelig';
            posterDescription.textContent = description.length > 80 ? description.substring(0, 80) + '...' : description;
      
            const posterGenre = document.createElement('p');
            posterGenre.textContent = `Genre: ${poster.genre || 'Ukendt'}`;
      
            const posterPrice = document.createElement('p');
            posterPrice.textContent = `Pris: ${poster.price || 'Ukendt'}`;
      
            const readMoreButton = document.createElement('button');
            readMoreButton.textContent = 'Læs mere';
            readMoreButton.classList.add('read-more-btn');
      
            posterDetails.appendChild(posterName);
            posterDetails.appendChild(posterDescription);
            posterDetails.appendChild(posterGenre);
            posterDetails.appendChild(posterPrice);
            posterDetails.appendChild(readMoreButton);
      
            // Tilføj billede og tekst til kortet
            posterCard.appendChild(posterImage);
            posterCard.appendChild(posterDetails);
      
            postersContainer.appendChild(posterCard);
          });
      
          app.appendChild(postersContainer);
        } catch (error) {
          console.error('Fejl under hentning af plakater:', error);
          app.textContent = 'Kunne ikke hente plakater fra serveren.';
        }
      });
  
    container.appendChild(section);
  
    // Footer
    const footer = document.createElement('footer');
    footer.style.marginTop = '40px';
    footer.style.borderTop = '1px solid #ddd';
    footer.style.paddingTop = '20px';
  
    const footerText = document.createElement('p');
    footerText.textContent = 'WALLYWOOD | CVR: 12345678 | MAIL: info@wallywood.dk | MOBIL: +45 9812 3456';
    footerText.style.fontSize = '14px';
    footerText.style.color = '#666';
    footer.appendChild(footerText);
  
    container.appendChild(footer);
  
    return container;
  };
  