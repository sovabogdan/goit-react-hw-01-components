import PropTypes from 'prop-types';
import {Container,Description,Avatar,Name,Tag,Location,Stats,StatsEl,Label,Quantity}from './Profile.styled'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsEl>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsEl>
      <StatsEl>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsEl>
      <StatsEl>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsEl>
    </Stats>
  </Container>);
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.objectOf(PropTypes.number),
}
export default Profile;