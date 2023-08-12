import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css'

const GoBackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <button className={styles.button} onClick={goBack}>&larr; Back</button>
  );
};

export default GoBackButton;
