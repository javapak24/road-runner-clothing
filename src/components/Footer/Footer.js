import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Road Runner. All rights reserved.</p>
      <p>Independent streetwear · Keep moving.</p>
    </footer>
  );
}

export default Footer;
