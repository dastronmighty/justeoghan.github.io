export const Contact = () => `
  <section id="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <form id="contact-form" action="https://formspree.io/f/mblrvzwy" method="POST">
        <div class="form-group">
          <label for="name">Name<span aria-hidden="true">*</span></label>
          <input type="text" id="name" name="name" required aria-required="true" />
        </div>
        <div class="form-group">
          <label for="email">Email<span aria-hidden="true">*</span></label>
          <input type="email" id="email" name="_replyto" required aria-required="true" />
        </div>
        <div class="form-group">
          <label for="message">Message<span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" required aria-required="true"></textarea>
        </div>
        <button type="submit" class="btn">Send Message</button>
      </form>
      <hr>
      <a href="cv/CV0924.pdf" class="btn download-cv" aria-label="Download CV" download>
        Download CV
      </a>
    </div>
  </section>
`;
