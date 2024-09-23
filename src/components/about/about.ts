import { timelineData } from './timelineItems'

export const About = () => `
  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="timeline">
        ${generateTimelineItems()}
      </div>
    </div>
  </section>
`;

// Generate timeline items dynamically
function generateTimelineItems() {
  const isMobile = window.screen.width <= 780;
  return timelineData
    .map(
      (item, index) => `
    <div class="timeline-item ${isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'}"
        key=${index}
      aria-label="Timeline item: ${item.year}"
    >
      <div class="content">
        <h3>${item.year}</h3>
        <p>${item.content}</p>
      </div>
    </div>
  `
    )
    .join('');
}