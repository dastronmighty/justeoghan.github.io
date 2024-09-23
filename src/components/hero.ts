const hero_main = 'Eoghan Hogan';
const hero_secondary = 'Imagine. Create. Commit.'

export const Hero = () => `
  <section id="hero" aria-label="Hero Section">
    <canvas id="backgroundanimation" aria-label="Animated Background"></canvas>
    <div class="hero-content">
      <h1>${hero_main}</h1>
      <p>${hero_secondary}</p>
    </div>
  </section>
`;