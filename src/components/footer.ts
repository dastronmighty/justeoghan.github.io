// components/footer.ts
export const Footer = () => `
  <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/dastronmighty" aria-label="GitHub">
          <img src="icons/github-mark-white.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/eoghanhogan99/" aria-label="LinkedIn">
          <img src="icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <p>&copy; ${new Date().getFullYear()} Eoghan Hogan. All rights reserved.</p>
    </div>
  </footer>
`;
