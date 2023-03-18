import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ text }) => {
  return (
    <button className={styles.formButton} type="submit">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
