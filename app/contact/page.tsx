export default function ContactPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Contact Me</h1>

      <p>
        If you have any questions, project ideas, or job opportunities, feel free
        to contact me. I’m always open to discussing new projects and
        collaborations.
      </p>

      <h3>Email</h3>
      <p>deeprajsrivastav935@gmail.com</p>

      <h3>Location</h3>
      <p>Uttar Pradesh, India</p>

      <h3>Send a Message</h3>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "10px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "10px" }}
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "10px" }}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}