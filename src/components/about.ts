// components/about.ts
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
    const timelineData = [
        {
            year: '2010',
            content: 'Started programming at age 13 to create Minecraft Mods.',
        },
        {
            year: '2015',
            content: 'Graduated high school and pursued Computer Science.',
        },
        // Add more items as needed
    ];

    return timelineData
        .map(
            (item, index) => `
    <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
      <div class="content">
        <h3>${item.year}</h3>
        <p>${item.content}</p>
      </div>
    </div>
  `
        )
        .join('');
}
