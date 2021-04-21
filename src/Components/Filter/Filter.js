import { connect } from 'react-redux';
import { handleFilter } from "../../redux/phonebook/phonebook-actions";
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, handleFilter }) => {
    return (
        <label className={styles.label}>
            Find contacts by name
            <input
                className={styles.input}
                onChange={handleFilter}
                value={value}
                type="text"
                name="filter" />
        </label>
    );
};

Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    value: PropTypes.string,
};

const mapStateToProps = (state) => ({
    filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleFilter: (data) => {
            dispatch(handleFilter(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);