import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import {FriendContainer,FriendsList,Friend} from './FriendList.styled'


const FriendList = ({ friends }) => {
    return (
        <FriendContainer>
            <FriendsList>
                {friends.map(friend=>(<Friend key={friend.id}>
                    <FriendListItem
                     isOnline={friend.isOnline}
                     name={friend.name}
                     avatar={friend.avatar}/>
               </Friend>))}
            </FriendsList>
        </FriendContainer>
        
    );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;