import styles from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className={styles.friend__list}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem 
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
                />
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