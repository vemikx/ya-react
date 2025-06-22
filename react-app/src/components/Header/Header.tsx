import { Link } from 'react-router-dom';
import NavElement from './NavElement/NavElement';
import styles from './Header.module.css';
import icons from '../../assets/icons/icons';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>
          <img src="/Logo SS.png" alt="Logo SS.png" />
        </h1>
        <span>МЕЖГАЛАКТИЧЕСКАЯ АНАЛИТИКА</span>
      </div>
      <nav className={styles.nav}>
        <Link to="/">
          <NavElement navName="CSV Аналитика" Icon={icons.analytics} />
        </Link>
        <Link to="/generator">
          <NavElement navName="CSV генератор" Icon={icons.generator} />
        </Link>
        <Link to="/history">
          <NavElement navName="История" Icon={icons.history} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
