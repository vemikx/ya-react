// import icons from '../../assets/icons/icons';
import styles from './CsvAnalyzer.module.css';
import type { RemoveBtnProps } from '../../types/RemoveBtnProps';

function RemoveBtn({ callback, active }: RemoveBtnProps) {
  return (
    <button className={`${styles.remove__btn} ${active ? 'active' : ''}`} onClick={callback}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66675 25.3332L16.0001 15.9998M16.0001 15.9998L25.3334 6.6665M16.0001 15.9998L6.66675 6.6665M16.0001 15.9998L25.3334 25.3332"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default RemoveBtn;
