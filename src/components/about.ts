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
      year: '2021 - Present',
      content: 'Machine Learning Engineer at Apple. Working on Conversational AI, Large Language Models, and mechanistic interpretability.',
    },
    {
      year: 'Apr 2023 - Oct 2023',
      content: 'Full Stack Engineer at Apple, implemented new features for an internal collaboration tool.',
    },
    {
      year: 'Oct 2022 - Apr 2023',
      content: 'ML Engineering Project Manager at Apple. Managed NLP project for Apple Care using ML skills.',
    },
    {
      year: 'Apr 2022 - Sep 2022',
      content: 'Data Scientist + Web Developer at Apple’s Global Business Intelligence team. Developed business insights using internal/external data.',
    },
    {
      year: 'Sep 2021 - Apr 2022',
      content: 'Support Data Scientist at SAP. Focused on forecasting and anomaly detection to improve system resolution.',
    },
    {
      year: 'Jan 2021 - Mar 2021',
      content: 'Community Mentor for Program for Access to Higher Education, guiding pupils on their path to higher education.',
    },
    {
      year: 'Sep 2020 - Dec 2020',
      content: 'Demonstrator at University College Dublin, assisting with classes.',
    },
    {
      year: 'Mar 2020 - Sep 2020',
      content: 'ML Intern at Apple, worked on multilingual sentiment analysis and state-of-the-art NLP tasks.',
    },
    {
      year: 'Jun 2019 - Jul 2019',
      content: 'IT Intern at Bizintra Financial Academy, developed and maintained WordPress websites and built a Full Stack WebApp.',
    },
    {
      year: 'Jun 2018 - Aug 2018',
      content: 'Tech Intern at CarTrawler. Developed a full-stack app for real-time info and built customer satisfaction tools.',
    },
    {
      year: '2017 - 2021',
      content: 'Bachelor of Science in Computer Science with Data Science, University College Dublin. Graduated with First Class Honours, won Franz Geiselbrechtinger Medal for best final year project.',
    },
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