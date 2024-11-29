import { Home } from "./homepage.js";

export const Posters = (navigateTo) => {
    // Opretter container for Posters-siden
    const container = document.createElement('div');
    container.classList.add('posters-container'); // Optional class for styling
  
    // Header med navigation
    const header = document.createElement('header');
    header.classList.add('header');
  
    const title = document.createElement('h1');
    title.textContent = 'Plakater';
    header.appendChild(title);
  
    // Tilføj navigation eller filtre hvis nødvendigt
    const nav = document.createElement('nav');
    const backButton = document.createElement('button');
    backButton.textContent = 'Tilbage til Forside';
    backButton.classList.add('nav-button');
    backButton.addEventListener('click', () => navigateTo(Home)); // Navigere tilbage til forsiden
    nav.appendChild(backButton);
  
    header.appendChild(nav);
    container.appendChild(header);
  
    // Sektion for at vise plakater
    const postersSection = document.createElement('section');
    postersSection.classList.add('posters-section');
    container.appendChild(postersSection);
  
    // Hent plakater fra API (hvis nødvendigt)
    document.addEventListener('DOMContentLoaded', async () => {
      try {
        const response = await fetch('http://localhost:3524/posters'); // Hent plakater fra API
        const posters = await response.json();
        console.log(posters);
        
  
        // Loop igennem plakaterne og tilføj dem til sektionen
        posters.forEach((poster) => {
          const posterCard = document.createElement('div');
          posterCard.classList.add('poster-card');
          
          const posterImage = document.createElement('img');
          posterImage.src = poster.image; // Sørg for at du har en `image` property fra API'et
          posterImage.alt = poster.name;
          posterCard.appendChild(posterImage);
  
          const posterName = document.createElement('h3');
          posterName.textContent = poster.name;
          posterCard.appendChild(posterName);
  
          // Tilføj kortet til posters-sektionen
          postersSection.appendChild(posterCard);
        });
      } catch (error) {
        console.error('Fejl under hentning af plakater:', error);
        postersSection.textContent = 'Kunne ikke hente plakater fra serveren.'; // Fejlmeddelelse hvis plakater ikke kan hentes
      }
    });
  
    // Returner den oprettede container (Posters-siden)
    return container;
  };
  