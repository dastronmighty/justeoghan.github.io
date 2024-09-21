import '../scss/styles.scss'; // Import your SCSS styles
import './background_animation';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';

// Dynamically load components into the #app container
const app = document.getElementById('app');
if (app) {
    app.innerHTML = `
    ${Hero()}
    <div class="divider"></div>
    ${About()}
    <div class="divider"></div>
    ${Contact()}
    <div class="divider"></div>
    ${Footer()}
  `;
}

// Add smooth scroll functionality after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
