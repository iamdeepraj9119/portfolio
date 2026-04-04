export default function Contact() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Contact Us</h1>

      <p>If you have any questions, feel free to contact me.</p>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <textarea
          placeholder="Your Message"
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <button style={{ padding: "10px 20px" }}>
          Send
        </button>
      </form>
    </div>
  );
}