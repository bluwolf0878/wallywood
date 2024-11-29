import { Home } from './homepage.js';
import { Posters } from './posters.js';
// import { About } from './About.js';
// import { Contact } from './Contact.js';
// import { Login } from './Login.js';

const app = document.getElementById('app');

// Funktion til at navigere mellem sider
const navigateTo = (Page) => {
  app.textContent = ''; // Rydder eksisterende indhold
  app.appendChild(Page(navigateTo)); // Tilføj den nye side
};

// Start med forsiden
navigateTo(Home);
