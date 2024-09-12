function Contact() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p>
          Ready to take your business to the next level? Contact Eagle Rock Design LLC today, and let’s discuss how we can help you build a strong online presence and grow your brand.
        </p>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          
          <label>Email:</label>
          <input type="email" name="email" required />
          
          <label>Message:</label>
          <textarea name="message" required />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  