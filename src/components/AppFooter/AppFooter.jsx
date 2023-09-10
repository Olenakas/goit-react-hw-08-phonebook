import styles from './AppFooter.module.css';
import { Container } from '@mui/material';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <p className={styles.footerText}>
          ©2023 Developed by{' '}
          <a
            href="https://github.com/Olenakas"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            Olena Kasianenko
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default AppFooter;

