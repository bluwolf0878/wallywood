import { Posters } from './posters.js'; // Hvis du bruger Posters.js
// import { About } from './About.js';
// import { Contact } from './Contact.js';
// import { Login } from './Login.js';

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
    { name: 'Plakater', page: Posters },
    { name: 'Om os', page: 'about' },
    { name: 'Kontakt os', page: 'contact' },
    { name: 'Login', page: 'login' },
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
  sectionTitle.textContent = 'Fire tilfældige...';
  sectionTitle.style.color = '#C75022';
  section.appendChild(sectionTitle);

  const postersGrid = document.createElement('div');
  postersGrid.style.display = 'grid';
  postersGrid.style.gridTemplateColumns = '1fr 1fr';
  postersGrid.style.gap = '20px';

  fetch('http://localhost:3524/posters?limit=4')
  .then((response) => response.json())
  .then((posters) => {
    posters.forEach((poster) => {
      const posterCard = document.createElement('div');
      posterCard.style.display = 'flex';
      posterCard.style.alignItems = 'center';
      posterCard.style.border = '1px solid #ddd';
      posterCard.style.padding = '10px';
      posterCard.style.background = '#fff';
      posterCard.style.borderRadius = '8px';

      const posterImage = document.createElement('img');
      posterImage.src = poster.image || 'default-image.jpg'; // Standardbillede hvis ingen billedsti
      posterImage.alt = poster.name || 'Ingen titel';
      posterImage.style.width = '100px';
      posterImage.style.height = '150px';
      posterImage.style.objectFit = 'cover';
      posterImage.style.marginRight = '15px';

      const posterDetails = document.createElement('div');

      const posterName = document.createElement('h4');
      posterName.textContent = poster.name || 'Ingen titel';
      posterName.style.marginBottom = '10px';

      const posterDescription = document.createElement('p');
      const descriptionText = poster.description
        ? poster.description.length > 80
          ? poster.description.substring(0, 80) + '...'
          : poster.description
        : 'Ingen beskrivelse tilgængelig.'; // Standardbeskrivelse, hvis den mangler
      posterDescription.textContent = descriptionText;

      const readMoreButton = document.createElement('button');
      readMoreButton.textContent = 'Læs mere';
      readMoreButton.style.marginTop = '10px';
      readMoreButton.style.padding = '5px 10px';
      readMoreButton.style.border = 'none';
      readMoreButton.style.borderRadius = '5px';
      readMoreButton.style.backgroundColor = '#C75022';
      readMoreButton.style.color = '#fff';
      readMoreButton.style.cursor = 'pointer';

      posterDetails.appendChild(posterName);
      posterDetails.appendChild(posterDescription);
      posterDetails.appendChild(readMoreButton);

      posterCard.appendChild(posterImage);
      posterCard.appendChild(posterDetails);

      postersGrid.appendChild(posterCard);
    });
  })
  .catch((err) => {
    const errorText = document.createElement('p');
    errorText.textContent = 'Kunne ikke hente plakater.';
    section.appendChild(errorText);
    console.error('Fejl under hentning af plakater:', err);
  });


  section.appendChild(postersGrid);
  container.appendChild(section);

  // Footer
  const footer = document.createElement('footer');
  footer.style.marginTop = '40px';
  footer.style.borderTop = '1px solid #ddd';
  footer.style.paddingTop = '20px';
  footer.style.textAlign = 'center';

  const footerText = document.createElement('p');
  footerText.textContent =
    'WALLYWOOD | CVR: 12345678 | MAIL: info@wallywood.dk | MOBIL: +45 9812 3456';
  footerText.style.fontSize = '14px';
  footerText.style.color = '#666';
  footer.appendChild(footerText);

  container.appendChild(footer);

  return container;
};
