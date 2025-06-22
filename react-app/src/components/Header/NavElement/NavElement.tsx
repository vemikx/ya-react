import type { NavElementProps } from '../../../types/NavElementProps';
import styles from './NavElement.module.css';

function NavElement({ navName, Icon }: NavElementProps) {
  return (
    <div className={styles.nav__item}>
      <Icon />
      <span>{navName}</span>
    </div>
  );
}

export default NavElement;
