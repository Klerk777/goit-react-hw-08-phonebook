import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, level = '1', children }) => {
  const CustomTitle = `h${level}`;
  return (
    <section className={styles.section}>
      <CustomTitle>{title}</CustomTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
};

export default Section;
