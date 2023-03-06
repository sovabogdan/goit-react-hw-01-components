import PropTypes from 'prop-types';
import {Status,Avatar,Name} from './FriendList.styled'
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Status
            isOnline={isOnline}
            style={{
            backgroundColor: isOnline ? 'green' : 'red',
                }}>
                {isOnline}
            </Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
    );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default FriendListItem;
