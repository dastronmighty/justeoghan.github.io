// components/footer.ts
export const Footer = () => `
  <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/dastronmighty" aria-label="GitHub">
          <img src="icons/github-mark-white.svg" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
          <img src="icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/yourusername" aria-label="Instagram">
          <img src="icons/instagram.svg" alt="Instagram" />
        </a>
      </div>
      <p>&copy; ${new Date().getFullYear()} Eoghan Hogan. All rights reserved.</p>
    </div>
  </footer>
`;
