function Contact() {
  return (
    <section className="section contact-page">
      <div>
        <p className="eyebrow">Orders and inquiries</p>
        <h1>GET IN THE GAME.</h1>
      </div>

      <div className="contact-page__content">
        <p>Payment Types</p>

        <div className="contact-grid">
          <a href="mailto:delfino.gonsalves@gmail.com">
            <span>Email</span>
            delfino.gonsalves@gmail.com
          </a>

          <a
            href="https://www.instagram.com/callmestevevo"
            target="_blank"
            rel="noreferrer"
          >
            <span>Instagram</span>
            @callmestevevo
          </a>

          {/* <a href="https://venmo.com/" target="_blank" rel="noreferrer">
            <span>Venmo</span>
            @RoadRunner
          </a> */}

          <a
            href="https://cash.app/$callmesteveoreno"
            target="_blank"
            rel="noreferrer"
          >
            <span>Cash App</span>
            $callmesteveoreno
          </a>
        </div>

        <p className="contact-note">
          Confirm the product, size, availability, shipping cost, and total
          before asking a customer to send payment.
        </p>
      </div>
    </section>
  );
}

export default Contact;
