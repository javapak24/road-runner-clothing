import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import croppedlogo from '../../assets/croppedlogo.png';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={closeMenu}>
        <span className="brand__mark">
          <img src={croppedlogo} alt="logo" />
        </span>
        <span className="brand__copy">
          <strong>ROAD RUNNER</strong>
          <small>Keep Moving</small>
        </span>
      </NavLink>

      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((currentValue) => !currentValue)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
        aria-label="Main navigation"
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/collection" onClick={closeMenu}>
          Collection
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          The Brand
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
