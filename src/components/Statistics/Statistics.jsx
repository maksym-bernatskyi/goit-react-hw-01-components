import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    // const renderTitle = title ? <h2 className={styles.title}>UPLOAD STATS</h2> : '';
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>UPLOAD STATS</h2>}
            <ul className={styles.stat__list}>
                {stats.map(({ id, label, percentage }) => (
                <li className={styles.item} key={id}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}</span>
                </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}