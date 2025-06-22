import { useRef, useState } from 'react';
import styles from './CsvAnalyzer.module.css';
import RemoveBtn from './RemoveBtn';

function CsvAnalyzer() {
  const [fileName, setFileName] = useState<string | null>('Загрузите файл');
  const [active, setActive] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setActive(true);
      console.log(`Файл выбран: ${file.name}`);
    } else {
      setFileName('');
      console.log('Файл не выбран');
    }
  };
  const handleAnalyze = () => {
    if (fileName) {
      console.log(`Анализ файла: ${fileName}`);
    } else {
      console.log('Файл не выбран для анализа');
    }
  };
  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <div className={styles.container}>
      <span>Загрузите csv файл и получите полную информацию о нём за сверхнизкое время</span>
      <div className={styles.control__wrapper}>
        <input
          id="file-input"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="file-input" className={styles.load__btn}>
          {fileName}
        </label>
        <RemoveBtn active={active} callback={handleRemoveFile} />
      </div>
      <button onClick={handleAnalyze} type="submit" className={styles.send__btn}>
        Отправить
      </button>
    </div>
  );
}

export default CsvAnalyzer;
