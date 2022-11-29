import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem ({ id, isOnline, avatar, name }) {
    return (
        <li className={styles.friend__item} key={id}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}