import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory ({ items }) {
    return (
        <table className={styles.transaction__history}>
            <thead>
                <tr>
                <th className={styles.transaction__head}>Type</th>
                <th className={styles.transaction__head}>Amount</th>
                <th className={styles.transaction__head}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.transaction__body}>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr className={index % 2 === 0 ? styles.transaction__row : styles.accent} key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.number.isRequired,
        })
    )
}