import { Helmet } from 'react-helmet-async';
import Section from '../../shared/Section/Section';
import imgPhonebook from '../../images/phonebook.png';
import styles from './Home.module.scss';
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <Section>
        <div className={styles.homeContainer}>
          <h1>Phonebook welcome page</h1>
          <img src={imgPhonebook} width="400" alt="Phonebook & retro phone" />
          <span>Copyright © 2023 - All rights reserved.</span>
        </div>
      </Section>
    </>
  );
}
