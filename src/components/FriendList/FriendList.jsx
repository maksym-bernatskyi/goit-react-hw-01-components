import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className={styles.friend__list}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li className={styles.friend__item} key={id}>
                <span className={isOnline ? styles.online : styles.offline}></span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}