import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
    return (

        <label className={styles.label}>
            Find contacts by name
            <input
                className={styles.input}
                onChange={onChange}
                value={filter}
                type="text"
                name="filter" />
        </label>

    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;